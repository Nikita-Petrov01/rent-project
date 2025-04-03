import { useLocation, Outlet } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  const location = useLocation();
  const regaPage = ['/signup', '/login'];
  const noFooter = regaPage.includes(location.pathname);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar user={user} logoutHandler={logoutHandler} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
      {!noFooter && <ul><li>г.Москва, ул.Ленина, д.3</li><li>newpochta@mail.ru</li></ul> }
    </div>
  );
}
