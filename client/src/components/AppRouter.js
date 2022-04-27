import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { check } from '../http/userAPI';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = observer(() => {
  const { user } = useContext(Context);
  console.log('user :>> ', user);
  check().then((data) => {
    if (data.role === 'ADMIN') user.setRole(true);
    console.log(user.role);
  });
  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  );
});

export default AppRouter;
