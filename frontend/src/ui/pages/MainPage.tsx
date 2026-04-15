import { Typography } from '../components/Typography';
import { DefaultLayout } from './layouts/DefaultLayout';

export const MainPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Typography variant='h1' size='5xl'>
        Gamifikace
      </Typography>
    </DefaultLayout>
  );
};
