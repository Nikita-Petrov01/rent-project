import React from 'react';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <div className="text-center mt-5">
      <h1>404 - Страница не найдена</h1>
      <p>Извините, запрашиваемая страница не существует.</p>
      <Link to="/" className="btn btn-primary">Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;