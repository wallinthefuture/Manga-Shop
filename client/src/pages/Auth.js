import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { check, login, registration } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
  const { user } = useContext(Context);

  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      check().then((data) => {
        user.setUser(data);
      });

      user.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">
          {isLogin ? 'Authorization' : 'Registration'}{' '}
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" className="mb-2" onClick={click}>
            {isLogin ? 'Submit' : 'Registration'}
          </Button>
          {isLogin ? (
            <div>
              You haven't got account?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>{' '}
            </div>
          ) : (
            <div>
              You have got account?{' '}
              <NavLink to={LOGIN_ROUTE}>Authorization</NavLink>{' '}
            </div>
          )}
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
