import { Preloader } from '../components/Preloader';

export const LoadingPage: React.FC = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Preloader />
    </div>
  );
};
