import './index.css';
import headerLogo from './images/header_logo.svg';

function App() {
  return (
    <div className="page">
      <div className="page__content">

        <header className="header">
          <img className="header__logo" src={headerLogo} alt="Логотип Mesto Russia" />
        </header>

        <main className="main-content">
          <section className="profile">
            <div className="profile__wrap-avatar">
              <img className="profile__avatar" src="#" alt="Изображение профиля" />
            </div>
            <div className="profile__wrap">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__btn-edit"></button>
              <p className="profile__text-interests"></p>
              <button type="button" className="profile__btn-add button"></button>
            </div>
          </section>

          <section className="elements">

          </section>
        </main>

        <footer className="footer">
          <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup-profile">
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

        <div className="popup popup-card">
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

        <div className="popup popup-avatar">
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

        <div className="popup popup-image">
          <div className="popup__image-conteiner">
            <button className="popup__icon-close"></button>
            <img src="#" alt="#" className="popup__pic" />
            <h3 className="popup__pic-title">#</h3>
          </div>
        </div>

        <div className="popup popup-confirm">
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
