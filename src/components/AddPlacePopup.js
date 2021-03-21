import React, { useState, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [name, setName] = useState('');
  const urlRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    onAddPlace({
      name,
      link: urlRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      title="Новое место"
      titleButton="Создать"
    >
      <input className="popup__input popup__input_content_place-name" type="text" name="name" placeholder="Название"
        tabIndex="1" id="name-card" minLength="2" maxLength="30" required
        defaultValue={name}
        onChange={e => setName(e.target.value)}
      />
      <span id="name-card-error" className="popup__input-error"></span>
      <input className="popup__input popup__input_content_image-link" type="url" name="link" defaultValue=""
        placeholder="Ссылка на картинку" tabIndex="2" id="link-card" required
        ref={urlRef}
        />
      <span id="link-card-error" className="popup__input-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
