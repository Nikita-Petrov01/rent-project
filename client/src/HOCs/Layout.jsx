import { Outlet } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';

export default function Layout({ user, logoutHandler }) {
  return (
    <div>
      <NavBar user={user} logoutHandler={logoutHandler} />
      <Outlet />
    </div>
  );
}