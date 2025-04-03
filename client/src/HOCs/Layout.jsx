import { Outlet } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';

export default function Layout({ user, logoutHandler, searchHandler }) {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col'>
                <NavBar user={user} logoutHandler={logoutHandler} searchHandler={searchHandler} />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Outlet/>
            </div>
        </div>
    </div>
  );
}