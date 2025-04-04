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
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEw0lEQVR4nO2ae4hVVRTGfzNOjabZDdPG0EoqU8vIEukF+aDQIhJB05TsD6lAkySKHqbFEJUTYQo+sCIfRUUlUaZpWL6ixNQpRMaxMhIySy0ba8bHPbGG78Bmc84d595z75wJP9hwzz777L3Wfqy91rcu5I9hwLtAA1APPA30oJ2gErgPqAWCiNIILAOuIKW4HJgDHHKE3gc8BVwKjAQ+Ak7p3XFgaVoUqgTGAuuArKPAZtVXxCi8WIoEUuw91ZcUFwFjgCXAYUf4P4EFwDWn2c8lnkJNwHzggmIKvylmvwd6Nxk4J8+++wBvACfU30FgECVQ5ACwHng84f09QP3aGLuAs0kZxmgi/gGOAZ8BDwIXRrTtBNRJmSdJEcZ6RsAtJ4HVwAQZDffuyUpps3apQK2Eng500UG+H1jlHPJA7bo6361Q/cekBA0S6NyId6bUNGCv2nwIlOldFXBE9aNJAb6WMMt0mMuB851ylqzWH2o3y/l2mup+KsAiJoabtNfjTPcp+WAb9Zx1VqADsF311aQAA+SKHJTgh1WaYpQ7Clylb2/QN41tcfO3Bh2BwcBcKRAqs0dbz/Ca6t4hAawDfgN2yo2wmUoadq+86Zjr1dpevfVsh79gbI3YAqt0UJPGMGd1bIwX9PuYrFnB6A5cBzzruOo24MOyRkliYcz52ZHwOM379y1ngG90i/fUdugG9AVuAx4CXgY+lfvRoNmtV90cBWLXAxngMucitYvxVeBeZ6yiYBywP4d5LbRMcsYqqiLosjIncK2UOinz+oPuBzvAz2hWh2i1MlqBcZ6lOiKjEtZNpISKFApfQHNTxkvxshztUodQwMkxoXGF3qVekU0REWeILTnepQ7hjNdFzHr4XJdjxVKJOEXaHYIziqQMZ1YkbfjfrUiVSrtVZEeE42hxe5shA8wQp1sDjPJIuDhUecps94Ipo1HvUr/bxL78qN82zggxM4lgoIgGf2bNI35dg5XnQWC8FNNv4JVfgefF9ueFnmI/NqhDc+GnKHAKaR03AWQcVq+IkMDSFlfLhX8F+M779ltFpX01IV0VHlSL/Happk+AO0934joqT+hzvFOB85x2VypMDpnFQLFLreKYOHoo0EosFOPSEm5RZNnoTZzJkxOL1LhR4aur0L+iQu9x2EKLMR6NEdjC4F+A75XFstTFrQqfW4tuGid0Ri3/khN/qWF/PfdQxLjeyReGQr4N3A18obr3JWivIuZDyjTG8JYa/i6h+sScG2Piv4pJL9is5YPyYrj0SyXUIZlc91y4MCvymA5rqMhcpdnivjF0FrNih3YmsAb4W0YgUXR3SOhAgyxqISk60suPtLZkgZUUaR/a3v/c20IbRSRE7f9rlRmud85ZVDEO7GfgS3FcE2LSdonDEqQven8cOKC6vC+ptkRn4AER34FjAj8Abk+IZu2iZGuN3Ba7ax4pZgriZlGsTd4lNRu4uJV9VQB36NILU3t+CW/1fkXSp/mOeULnwh10jbjjyhxn0LJf8zwmMqu/i8wSoTddzObRUtFHJthQYLny765juUTkd0YXWY0Ouzvju/SXqbi0RkbukHndJUNGfpB7v0SVfVJqUCmFyxe2p5+TgbCV2i0P+EaPB84L/wGJoQi5i/rM3AAAAABJRU5ErkJggg==" alt="key-exchange"/>
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
