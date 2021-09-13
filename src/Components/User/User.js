import React from 'react'
import { Route, Routes } from 'react-router'
import { Feed } from '../Feed/Feed'
import { Head } from '../Helper/Head'
import { NotFound } from '../NotFound'
import { UserHeader } from './UserHeader'
import { UserPhotoPost } from './UserPhotoPost'
import { UserStatis } from './UserStatis'
import { useSelector } from 'react-redux'

export const User = () => {
    const { data } = useSelector(state => state.user)
    return (
        <section className="container">
            <Head
                title="Minha Conta"
            />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="/postar" element={<UserPhotoPost />} />
                <Route path="/estatisticas" element={<UserStatis />} />
                <Route path="*" element={<NotFound />} />
            </Routes>

        </section>
    )
}
