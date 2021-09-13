import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer';



import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';

import './App.css'

import { User } from './Components/User/User';
import { ProtectdRoute } from './Components/Helper/ProtectdRoute';
import { Photo } from './Components/Photo/Photo';
import { UserProfile } from './Components/User/UserProfile';
import { NotFound } from './Components/NotFound';
import { autoLogin } from './store/user';
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])
  return <div className="App">
    <BrowserRouter>

      <Header />
      <main className="AppBody">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectdRoute path="conta/*" element={<User />} />
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </div>;
};

export default App;
