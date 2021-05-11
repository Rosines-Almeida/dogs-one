import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './Components/Footer';

// import { PhotoGet } from './api/endpoints/PhotoGet';
// import { PhotoPost } from './api/endpoints/PhotoPost';
//  import { TokenPost } from './api/endpoints/TokenPost';
//  import { UserPost } from './api/endpoints/UserPost';

import { Header } from './Components/Header';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
 
import './App.css'
import { UserStorage }  from './Hooks/UserContext'
import { User } from './Components/User/User';
import { ProtectdRoute } from './Components/Helper/ProtectdRoute';
import { Photo } from './Components/Photo/Photo';
import { UserProfile } from './Components/User/UserProfile';
import { NotFound } from './Components/NotFound';

const App = () => {
  return <div className="App"> 
  
  {/* <UserPost />   */}
   {/* <h2>Token Post</h2> */}
    {/* <TokenPost/> */}
    {/* <h2>Photo post</h2> */}
    {/* <PhotoPost/> */}
    {/* <h2>PhotoGet</h2> */}
    {/* <PhotoGet/>    */}


    <BrowserRouter>
    <UserStorage>
    <Header/>
    <main className="AppBody">
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="login/*" element={<Login/>} />
      <ProtectdRoute path="conta/*" element={<User/>}/>
      <Route  path="foto/:id" element={<Photo/>} />
      <Route  path="perfil/:user" element={<UserProfile/>} />
      <Route  path="*" element={<NotFound/>} />
    </Routes>
    </main>
    <Footer/>
    </UserStorage>
    </BrowserRouter>
  </div>;
};

export default App;
