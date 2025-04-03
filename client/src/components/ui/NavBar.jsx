import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router';


export default function NavBar({ logoutHandler, user, searchHandler }) {
  return (
    <Navbar
      style={{
        background: 'linear-gradient(to right,rgb(112, 39, 104),rgb(219, 52, 52))',
        minHeight: '10vh',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand
          style={{
            color: '#ecf0f1',
            fontSize: '1.5rem',
            letterSpacing: '1px',
            fontFamily: '"Segoe UI", Arial, sans-serif',
            position: 'relative',
            padding: '5px 15px',
            borderRadius: '4px',
          }}
        >
          {user.status === 'logged'
            ? `Приветствую, ${user?.data?.name}`
            : 'Приветствую,  Гость'}
        </Navbar.Brand>

        <Form onSubmit={searchHandler} className="d-flex" style={{ width: '40%' }}>
          <FormControl
            type="search"
            name='query'
            placeholder="Поиск..."
            className="me-2"
            aria-label="Search"
            style={{
              borderRadius: '20px',
              border: 'none',
              padding: '10px 20px',
              background: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              '::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
          <Button
            type="submit"
            variant="outline-light" 
            style={{
              borderRadius: '20px',
              border: '2px solid white',
              background: 'transparent',
              padding: '0 20px',
              transition: 'all 0.3s ease',
              ':hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            Найти
          </Button>
        </Form>

        <Nav className="d-flex align-items-center gap-4">
          {user.status === 'logged' && (
            <>
              <Link
                to={'/'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  position: 'relative',
                  padding: '5px 0',
                  ':after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: '0',
                    left: '0',
                    background: '#e74c3c',
                    transition: 'width 0.3s ease',
                  },
                  ':hover:after': {
                    width: '100%',
                  },
                }}
              >
                Главная
              </Link>

              <Button
                onClick={() => logoutHandler()}
                style={{
                  background: 'transparent',
                  border: '2px solid #2ecc71',
                  color: 'white',
                  padding: '8px 25px',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    background: '#e74c3c',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Выход
              </Button>
            </>
          )}
          {user.status === 'guest' && (
            <div className="d-flex gap-4 align-items-center">
              <Link
                to={'/signup'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '2px solid #2ecc71',
                  borderRadius: '25px',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  ':hover': {
                    background: '#2ecc71',
                    color: 'white',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Регистрация
              </Link>
              <Link
                to={'/login'}
                style={{
                  color: '#ecf0f1',
                  textDecoration: 'none',
                  padding: '8px 25px',
                  background: '#e67e22',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    background: '#d35400',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                Войти
              </Link>
            </div>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
