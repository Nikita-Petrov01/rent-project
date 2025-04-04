import { useLocation, Outlet } from 'react-router';
import NavBar from '../components/ui/NavBar';

export default function Layout({ user, logoutHandler, searchHandler }) {
  const location = useLocation();
  const regaPage = ['/signup', '/login'];
  const noFooter = regaPage.includes(location.pathname);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar user={user} logoutHandler={logoutHandler} searchHandler={searchHandler} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
      {!noFooter && (
        <footer
          style={{
            background: '#f9f9f9', // Светлый фон
            color: '#7f8c8d', // Серый текст
            padding: '10px 0', // Отступы сверху и снизу
            textAlign: 'center', // Центрирование текста
            marginTop: '20px', // Отступ сверху
            borderTop: '1px solid #ddd', // Линия сверху
          }}
        >
          <ul
            style={{
              listStyle: 'none', // Убираем маркеры списка
              padding: 0, // Убираем внутренние отступы
              margin: 0, // Убираем внешние отступы
              fontSize: '0.9rem', // Уменьшенный размер текста
            }}
          >
            <li style={{ marginBottom: '5px' }}>г. Москва, ул. Ленина, д. 3</li>
            <li>newpochta@mail.ru</li>
          </ul>
        </footer>
      )}
    </div>
  );
}