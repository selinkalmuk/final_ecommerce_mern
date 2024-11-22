// src/pages/NotFoundPage.js
import React from 'react';
import '../assets/styles/notfound.css';

const NotFoundPage = () => {
  return (
    <div className='not-found'>
      <h1>404 Not Found</h1>
      <img className="not-found-img" src="https://i.pinimg.com/736x/a2/6b/14/a26b14f11ef35cbb111f427133ee574d.jpg" alt="" />
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
