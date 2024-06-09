import React from 'react';
import './ConfirmationModal.css';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-message-container">
          <p className="modal-message">{message}</p>
        </div>
        <div className="modal-buttons">
          <button className="cancel" onClick={onCancel}>
            Cancelar
          </button>
          <button className="confirm" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>{' '}
    </div>
  );
};

export default ConfirmationModal;
