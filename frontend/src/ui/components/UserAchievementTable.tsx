import {
  ENDPOINTS,
  type Achievement,
  type SharedUser,
} from '@gamifikace/shared';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React, { useMemo } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../../middleware';
import { Preloader } from './Preloader';
import { cm } from '../../libs/utils/cm';

/**
 * Soure: https://dev.to/morewings/lets-create-data-table-with-react-tanstack-table-and-tailwind-css-part-1-intro-and-html-layout-1dkm
 * *modified
 */

const columnHelper = createColumnHelper<Achievement>();

interface TableCellProps {
  user: SharedUser;
  achievement: Achievement;
}

const TableCell: React.FC<TableCellProps> = ({ user, achievement }) => {
  const queryClient = useQueryClient();
  const requestData = { params: {}, body: { user, achievement } };

  const hasAchievement = useQuery({
    queryKey: ['hasAchievement', user.id, achievement.key],
    queryFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.HAS_ACHIEVEMENT, requestData),
  });

  const grantAchievement = useMutation({
    mutationKey: ['grant', user.id, achievement.key],
    mutationFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.GRANT, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['hasAchievement', user.id, achievement.key],
      });
      queryClient.invalidateQueries({ queryKey: ['scoreboard'] });
    },
  });

  const revokeAchievement = useMutation({
    mutationKey: ['revoke', user.id, achievement.key],
    mutationFn: () =>
      apiClient.request(ENDPOINTS.ACHIEVEMENT.REVOKE, requestData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['hasAchievement', user.id, achievement.key],
      });
      queryClient.invalidateQueries({ queryKey: ['scoreboard'] });
    },
  });

  if (!hasAchievement.isSuccess) {
    return <Preloader />;
  }

  const handleToggle = () => {
    if (hasAchievement.data.hasAchievement) {
      revokeAchievement.mutate();
    } else {
      grantAchievement.mutate();
    }
  };

  return (
    <input
      type='checkbox'
      checked={hasAchievement.data.hasAchievement}
      onChange={handleToggle}
    />
  );
};

interface UserAchievementTableProps {
  users: SharedUser[];
  achievements: Achievement[];
}

export const UserAchievementTable: React.FC<UserAchievementTableProps> = ({
  users,
  achievements,
}) => {
  const columns = useMemo(() => {
    return [
      columnHelper.accessor('name', {
        id: 'name',
        header: 'Achievement',
        cell: (info) => <strong>{info.getValue()}</strong>,
      }),
      ...users.map((user) =>
        columnHelper.display({
          id: user.id,
          header: user.nickname,
          cell: (info) => {
            const achievement = info.row.original;
            return <TableCell user={user} achievement={achievement} />;
          },
        }),
      ),
    ];
  }, [users]);

  const pageSize = 16;

  // typescript... -_-
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: achievements,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize,
      },
      columnPinning: {
        left: ['name'],
      },
    },
  });

  return (
    <>
      <div className='flex w-full flex-row justify-between mb-2'>
        <div className='flex gap-3 items-center'>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeftIcon />
          </button>
          <span>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </span>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowRightIcon />
          </button>
          <span>Showing {pageSize} per page</span>
        </div>
      </div>

      <div className='h-min max-h-[80vh] max-w-full overflow-auto'>
        <table className='border-separate border-spacing-0 text-xs w-full'>
          <thead className='sticky left-0 top-0 z-30'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isPinned = header.column.getIsPinned();
                  return (
                    <th
                      key={header.id}
                      className={cm(
                        'whitespace-nowrap text-left font-normal p-2',
                        'border-solid border bg-background',
                        isPinned && 'sticky z-20 w-[1%]',
                      )}
                      style={{
                        left:
                          isPinned === 'left'
                            ? `${header.column.getStart()}px`
                            : undefined,
                      }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const isPinned = cell.column.getIsPinned();
                  return (
                    <td
                      key={cell.id}
                      className={cm(
                        'whitespace-nowrap font-normal p-2 text-center',
                        'border border-solid',
                        'bg-background',
                        isPinned && 'sticky z-20',
                      )}
                      style={{
                        left:
                          isPinned === 'left'
                            ? `${cell.column.getStart()}px`
                            : undefined,
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
