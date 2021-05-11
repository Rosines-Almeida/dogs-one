import React from 'react';
import { useParams } from 'react-router';
import { Feed } from './Feed/Feed';
import { Head } from './Helper/Head';

export const Home = () => {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="home do site Dogs , com o feed de fotos"
      />
      <Feed user={user} />
    </section>
  );
};
