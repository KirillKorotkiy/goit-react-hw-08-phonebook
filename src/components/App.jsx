import { Routes, Route, Navigate } from 'react-router-dom';
import { LayoutPage } from 'pages/LayoutPage';
import { RequireAuth } from 'hoc/RequireAuth';
import { PublicRoute } from 'hoc/PublicRoute';
import { useGetCurrentUserQuery } from 'redux/auth/authQueryAPI';
import authSelectors from '.././redux/auth/auth-selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from 'redux/auth/authSlice';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const { data } = useGetCurrentUserQuery(null, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) {
      dispatch(setUser({ name: data.name, email: data.email }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />} />
        <Route
          path="contacts"
          element={
            <RequireAuth>
              <ContactsPage />
            </RequireAuth>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
