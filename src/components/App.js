import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (data) => {
    setSelectedCard(data);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          handleCardClick={handleCardClick}
        />
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <PopupWithForm
          name="profile"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          title="Редактировать профиль"
          titleButton="Сохранить"
        >
          <input className="popup__input popup__input_content_username" type="text" name="name" defaultValue="" placeholder="Имя"
            tabIndex="1" id="username-profile" minLength="2" maxLength="40" required />
          <span id="username-profile-error" className="popup__input-error"></span>
          <input className="popup__input popup__input_content_about" type="text" name="about" defaultValue="" placeholder="О себе"
            tabIndex="2" id="about-profile" minLength="2" maxLength="200" required />
          <span id="about-profile-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="card"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          title="Новое место"
          titleButton="Создать"
        >
          <input className="popup__input popup__input_content_place-name" type="text" name="name" defaultValue="" placeholder="Название"
            tabIndex="1" id="name-card" minLength="2" maxLength="30" required />
          <span id="name-card-error" className="popup__input-error"></span>
          <input className="popup__input popup__input_content_image-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку"
            tabIndex="2" id="link-card" required />
          <span id="link-card-error" className="popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="avatar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          title="Обновить аватар"
          titleButton="Сохранить"
        >
          <input className="popup__input popup__input_content_image-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку"
            tabIndex="2" id="link-avatar" required />
          <span id="link-avatar-error" className="popup__input-error"></span>
        </PopupWithForm>




        {/*
        <div className="popup popup_type_confirm">
          <div className="popup__content">
            <button className="popup__icon-close"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="form-card" name="popup-form" noValidate>
              <button type="submit" className="popup__submit popup__confirm-button button">Да</button>
            </form>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default App;
