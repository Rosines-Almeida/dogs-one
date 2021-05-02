import React from 'react'
import { Route, Routes } from 'react-router'
import { Feed } from '../Feed/Feed'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStatis } from './UserStatis'

export const User = () => {
    return (
        <section className="container">   
        <UserHeader/>
        <Routes>    
            <Route path="/" element={<Feed/>}/>
            <Route path="/postar" element={<UserPhotoPost/>}/>
            <Route path="/estatisticas" element={<UserStatis/>}/>
        </Routes>
           
        </section>
    )
}
