import React from 'react'

export const PhotoGet = () => {
  const URL = 'https://dogsapi.origamid.dev/json';

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`${URL}/api/photo/`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      });
  }

  /*
const PHOTO_GET = {
  endpoint: {
    photos: '/api/photo',
    photos_query: '/api/photo/?_total=9&_page=1&_user=0',
    photo: '/api/photo/:id',
  },
  method: 'GET',
};

  */
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text" />
      <button>Enviar</button>
    </form>
  );
}
