import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router';

export default function NavBar({ logoutHandler, user, searchHandler }) {
  const {id} = useParams()
  const location = useLocation();
  const searchRoutes = ['/', '/admin', `/categories/card/${id}`]
  return (
    <Navbar
      style={{
        background: '#ffffff', // Белый фон для современного минимализма
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Легкая тень для объема
        minHeight: '10vh',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand >
          <img
            src="https://cdn1.iconfinder.com/data/icons/real-estate-set-1/512/37-1024.png"
            alt="Логотип"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px', // Квадрат с закругленными углами
              objectFit: 'cover',
            }}
          />
        </Navbar.Brand>
     

        {searchRoutes.includes(location.pathname) && (
        <Form onSubmit={searchHandler} className="d-flex" style={{ width: '40%' }}>
          <FormControl
            type="search"
            name="query"
            placeholder="Поиск жилья..."
            className="me-2"
            aria-label="Search"
            style={{
              borderRadius: '20px',
              border: '1px solid #ddd',
              padding: '10px 15px',
              background: '#f9f9f9',
              color: '#333',
            }}
          />
          <Button
            type="submit"
            variant="outline-light"
            style={{
              background: 'white', // Синий акцент
              border: 'none',
              padding: '0 10px',
              color: '#fff',
              transition: 'all 0.3s ease',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </Button>
        </Form>
        )}

        <Nav className="d-flex align-items-center gap-4">
            <>
          {user.status === 'logged' && user.data?.role !== 'admin' ? (
            <Link
            to={'/'}
            style={{
                  color: '#2c3e50', // Темный текст
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold', // Более жирный текст
                  padding: '5px 10px',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.color = 'grey'; // Синий акцент при наведении
                  e.target.style.textShadow = '0 0 5px rgba(96, 101, 104, 0.8)'; // Легкая подсветка
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#2c3e50'; // Возврат к исходному цвету
                  e.target.style.textShadow = 'none'; // Убираем подсветку
                }}
            >
                Главная
              </Link>
              ) : (
                <Link
            to={'/admin'}
            style={{
                  color: '#2c3e50', // Темный текст
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold', // Более жирный текст
                  padding: '5px 10px',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.color = 'grey'; // Синий акцент при наведении
                  e.target.style.textShadow = '0 0 5px rgba(96, 101, 104, 0.8)'; // Легкая подсветка
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#2c3e50'; // Возврат к исходному цвету
                  e.target.style.textShadow = 'none'; // Убираем подсветку
                }}
            >
                Главная
              </Link>
              )}

              {user.status === 'logged' && user.data?.role !== 'admin' && (

                <Link
                to="/favorites"
                style={{
                  color: '#2c3e50', // Темный текст
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold', // Более жирный текст
                  padding: '5px 10px',
                  transition: 'color 0.3s ease, text-shadow 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.target.style.color = 'grey'; // Синий акцент при наведении
                  e.target.style.textShadow = '0 0 5px rgba(96, 101, 104, 0.8)'; // Легкая подсветка
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#2c3e50'; // Возврат к исходному цвету
                  e.target.style.textShadow = 'none'; // Убираем подсветку
                }}
              >
                {user.status === 'logged' ? `${user?.data?.name}` : 'Гость'}
              </Link>
              )}
              
              {user.status === 'logged' && (
                <Button
                onClick={() => logoutHandler()}
                style={{
    background: '#e74c3c', // Красный акцент
    border: 'none',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Легкая тень
  }}
  onMouseOver={(e) => {
    e.target.style.background = '#c0392b'; // Темнее при наведении
    e.target.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)'; // Усиление тени
  }}
  onMouseOut={(e) => {
    e.target.style.background = '#e74c3c'; // Возврат к исходному цвету
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; // Возврат тени
  }}
                >
                Выход
              </Button>
              )}
            </>
          
          {user.status === 'guest' && (
            <div className="d-flex gap-4 align-items-center">
              <Link
                to={'/signup'}
                style={{
                  color: '#3498db',
                  textDecoration: 'none',
                  padding: '8px 20px',
                  border: '1px solid #3498db',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                }}
              >
                Регистрация
              </Link>
              <Link
                to={'/login'}
                style={{
                  color: '#fff',
                  textDecoration: 'none',
                  padding: '8px 25px',
                  background: '#3498db',
                  borderRadius: '20px',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
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
