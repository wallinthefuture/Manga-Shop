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
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { check } from '../http/userAPI';

const userNavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem('token');
    navigate(LOGIN_ROUTE);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <NavLink style={{ color: 'black' }} to={SHOP_ROUTE}>
          MangoManga
        </NavLink>

        {user.isAuth ? (
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* <Nav
                className="me-auto my-3 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="me-2">
                  Search
                </Button>
                <Button
                  variant={'outline-success'}
                  className="me-2"
                  onClick={() => {
                    logOut();
                  }}
                >
                  Выйти
                </Button>
              </Form>
            </Navbar.Collapse>
          </div>
        ) : (
          <div>
            <Navbar.Collapse id="navbarScroll">
              {/* <Nav
                className="mr-auto my-3 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav> */}

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" className="me-2">
                  Search
                </Button>
              </Form>
              <Button
                variant={'outline-success'}
                className="me-2"
                onClick={() => {
                  navigate(LOGIN_ROUTE);
                }}
              >
                Войти
              </Button>
              <Button
                variant={'outline-success'}
                onClick={() => {
                  navigate(REGISTRATION_ROUTE);
                }}
              >
                Регистрация
              </Button>
            </Navbar.Collapse>
          </div>
        )}
      </Container>
    </Navbar>
  );
});

export default userNavBar;