import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
// import  {
//   handleEditAvatarClick,
//   handleEditProfileClick,
//   handleAddPlaceClick
// } from './Main';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        <Footer />

        <div className="popup popup_type_profile">
          <div className="popup__content">
            <h2 className="popup__title">Редактировать профиль</h2>
            <button type="button" className="popup__icon-close"></button>
            <form className="popup__form form-profile" name="popup-form" noValidate>
              <input className="popup__input popup__input_content_username" type="text" name="name" defaultValue="" placeholder="Имя"
                tabIndex="1" id="username-profile" minLength="2" maxLength="40" required />
              <span id="username-profile-error" className="popup__input-error"></span>
              <input className="popup__input popup__input_content_about" type="text" name="about" defaultValue="" placeholder="О себе"
                tabIndex="2" id="about-profile" minLength="2" maxLength="200" required />
              <span id="about-profile-error" className="popup__input-error"></span>
              <button type="submit" className="popup__submit button">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_card">
          <div className="popup__content">
            <h2 className="popup__title">Новое место</h2>
            <button type="button" className="popup__icon-close"></button>
            <form className="popup__form form-card" name="popup-form" noValidate>
              <input className="popup__input popup__input_content_place-name" type="text" name="name" defaultValue="" placeholder="Название"
                tabIndex="1" id="name-card" minLength="2" maxLength="30" required />
              <span id="name-card-error" className="popup__input-error"></span>
              <input className="popup__input popup__input_content_image-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку"
                tabIndex="2" id="link-card" required />
              <span id="link-card-error" className="popup__input-error"></span>
              <button type="submit" className="popup__submit button">Создать</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_avatar">
          <div className="popup__content">
            <h2 className="popup__title">Обновить аватар</h2>
            <button type="button" className="popup__icon-close"></button>
            <form className="popup__form form-avatar" name="popup-form" noValidate>
              <input className="popup__input popup__input_content_image-link" type="url" name="link" defaultValue="" placeholder="Ссылка на картинку"
                tabIndex="2" id="link-avatar" required />
              <span id="link-avatar-error" className="popup__input-error"></span>
              <button type="submit" className="popup__submit button">Сохранить</button>
            </form>
          </div>
        </div>

        <div className="popup popup_type_image">
          <div className="popup__image-conteiner">
            <button className="popup__icon-close"></button>
            <img src="#" alt="#" className="popup__pic" />
            <h3 className="popup__pic-title">#</h3>
          </div>
        </div>

        <div className="popup popup_type_confirm">
          <div className="popup__content">
            <button className="popup__icon-close"></button>
            <h2 className="popup__title">Вы уверены?</h2>
            <form className="form-card" name="popup-form" noValidate>
              <button type="submit" className="popup__submit popup__confirm-button button">Да</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
