import { useEffect, useState } from 'react';
import axiosInstance, { setAccessToken } from './API/axiosInstance';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './HOCs/Layout';
import ProtectedRouter from './HOCs/ProtectedRouter';
import SignUpPage from './components/pages/SignUpPage';
import LoginPage from './components/pages/LoginPage';

import MainPage from './components/pages/MainPage';

import YandexMapWithDBPoints from './components/pages/YandexMap';

import AdminPageMain from './components/pages/AdminPage/AdminPageMain';
import CategoryUserPage from './components/pages/CategoryUserPage';
import OneCardPage from './components/pages/OneCardPage';


function App() {
  const [user, setUser] = useState({ status: 'logging' });

  useEffect(() => {
    axiosInstance('/tokens/refresh')
      .then(({ data }) => {
        setUser({ status: 'logged', data: data.user });
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: 'guest', data: null });
        setAccessToken('');
      });
  }, []);
  const logoutHandler = () => {
    axiosInstance
      .get('/auth/logout')
      .then(() => setUser({ status: 'guest', data: null }));
    setAccessToken('');
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password || !formData.name) {
      return alert('Please fill all fields');
    }
    axiosInstance.post('/auth/signup', formData).then(({ data }) => {
      setUser({ status: 'logged', data: data.user });
      setAccessToken(data.accessToken);
    });
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    if (!formData.email || !formData.password) {
      return alert('Missing required fields');
    }
    const res = await axiosInstance.post('/auth/login', formData);
    if (res.status === 200) {
      setUser({ status: 'logged', data: res.data.user });
      setAccessToken(res.data.accessToken);
    }
  };

  return (
    <Routes>
      <Route element={<Layout user={user} logoutHandler={logoutHandler} />}>
        <Route path="/" element={<CategoryUserPage user={user} />}/>
      <Route path="/categories" element={<CategoryUserPage />}></Route>
        <Route
          path="/"
          element={
            <ProtectedRouter isAllowed={user.status === 'logged'}>
              <CategoryUserPage user={user} />
            </ProtectedRouter>
          }
        />

        <Route
          path="/signup"
          element={
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo="/admin">
              <SignUpPage signUpHandler={signUpHandler} />
            </ProtectedRouter>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo="/admin">
              <LoginPage loginHandler={loginHandler} />
            </ProtectedRouter>
          }
        />

        <Route
          path="/map"
          element={
            // <ProtectedRouter isAllowed={user.status === 'guest'} redirectTo="/">
            <YandexMapWithDBPoints />
            // </ProtectedRouter>
          }
        />

        <Route path="/admin" element={
          <ProtectedRouter
          isAllowed={user.status === 'logged' && user.data?.role === 'admin'}
          redirectTo="/">
          <AdminPageMain />
          </ProtectedRouter>
          } />

        <Route path='/categories/card/:id' element={<OneCardPage/>}/>

      </Route>
    </Routes>
  );
}

export default App;
