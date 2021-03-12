import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__image-conteiner">
        <button className="popup__icon-close"></button>
        <img src="#" alt="#" className="popup__pic" />
        <h3 className="popup__pic-title">#</h3>
      </div>
    </div>
  )
}
