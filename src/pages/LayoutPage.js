import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const LayoutPage = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={'Loading...'}>
      <div className='container'>
        <Outlet />
      </div>
      </Suspense>
    </>
  );
};
