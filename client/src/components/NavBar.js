import React, { useContext } from 'react';
import { Context } from '..';

import AdminNavBar from './AdminNavBar';
import UserNavBar from './UserNavBar';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  return <div>{user.role ? <AdminNavBar /> : <UserNavBar />}</div>;
});

export default NavBar;
