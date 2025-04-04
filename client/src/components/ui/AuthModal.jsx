import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthModal({ show, onClose }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onClose();
    navigate('/login');
  };

  const handleRegisterClick = () => {
    onClose();
    navigate('/signup');
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Требуется авторизация</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Чтобы добавить объявление в избранное, необходимо войти в систему или
              зарегистрироваться.
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleLoginClick}>
              Вход
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleRegisterClick}
            >
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
