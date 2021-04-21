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

const App = () => {
  return <div> 
  
  {/* <UserPost />   */}
   {/* <h2>Token Post</h2> */}
    {/* <TokenPost/> */}
    {/* <h2>Photo post</h2> */}
    {/* <PhotoPost/> */}
    {/* <h2>PhotoGet</h2> */}
    {/* <PhotoGet/>    */}


    <BrowserRouter>
    <Header/>
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="login/*" element={<Login/>} />
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  </div>;
};

export default App;
