import React, { useContext } from 'react';
import { Context } from '..';
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { BrowserRouter, NavLink, useNavigate } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../utils/consts';
import AdminNavBar from './AdminNavBar';
import UserNavBar from './UserNavBar';
import { observer } from 'mobx-react-lite';
import { check } from '../http/userAPI';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  check().then((data) => {
    if (data.role === 'ADMIN') user.setRole(true);
  });

  console.log(user.role);
  return <div>{user.role ? <AdminNavBar /> : <UserNavBar />}</div>;
});

export default NavBar;
