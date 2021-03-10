import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page">
      <div className="page__content">

        <header class="header">
          <img class="header__logo" src="<%=require('./images/header_logo.svg')%>" alt="Логотип Mesto Russia" />
        </header>

        <main>
          <section class="profile">
            <div class="profile__wrap-avatar">
              <img class="profile__avatar" src="#" alt="Изображение профиля" />
            </div>
            <div class="profile__wrap">
              <h1 class="profile__name"></h1>
              <button type="button" class="profile__btn-edit"></button>
              <p class="profile__text-interests"></p>
              <button type="button" class="profile__btn-add button"></button>
            </div>
          </section>

          <section class="elements">

          </section>
        </main>

        <div class="popup popup-profile">
          <div class="popup__content">
            <h2 class="popup__title">Редактировать профиль</h2>
            <button type="button" class="popup__icon-close"></button>
            <form class="popup__form form-profile" name="popup-form" novalidate>
              <input class="popup__input popup__input_content_username" type="text" name="name" value="" placeholder="Имя"
                tabindex="1" id="username-profile" minlength="2" maxlength="40" required />
              <span id="username-profile-error" class="popup__input-error"></span>
              <input class="popup__input popup__input_content_about" type="text" name="about" value="" placeholder="О себе"
                tabindex="2" id="about-profile" minlength="2" maxlength="200" required />
              <span id="about-profile-error" class="popup__input-error"></span>
              <button type="submit" class="popup__submit button">Сохранить</button>
            </form>
          </div>
        </div>

        <div class="popup popup-card">
          <div class="popup__content">
            <h2 class="popup__title">Новое место</h2>
            <button type="button" class="popup__icon-close"></button>
            <form class="popup__form form-card" name="popup-form" novalidate>
              <input class="popup__input popup__input_content_place-name" type="text" name="name" value="" placeholder="Название"
                tabindex="1" id="name-card" minlength="2" maxlength="30" required />
              <span id="name-card-error" class="popup__input-error"></span>
              <input class="popup__input popup__input_content_image-link" type="url" name="link" value="" placeholder="Ссылка на картинку"
                tabindex="2" id="link-card" required />
              <span id="link-card-error" class="popup__input-error"></span>
              <button type="submit" class="popup__submit button">Создать</button>
            </form>
          </div>
        </div>

        <div class="popup popup-avatar">
          <div class="popup__content">
            <h2 class="popup__title">Обновить аватар</h2>
            <button type="button" class="popup__icon-close"></button>
            <form class="popup__form form-avatar" name="popup-form" novalidate>
              <input class="popup__input popup__input_content_image-link" type="url" name="link" value="" placeholder="Ссылка на картинку"
                tabindex="2" id="link-avatar" required />
              <span id="link-avatar-error" class="popup__input-error"></span>
              <button type="submit" class="popup__submit button">Сохранить</button>
            </form>
          </div>
        </div>

        <div class="popup popup-image">
          <div class="popup__image-conteiner">
            <button class="popup__icon-close"></button>
            <img src="#" alt="#" class="popup__pic" />
            <h3 class="popup__pic-title">#</h3>
          </div>
        </div>

        <div class="popup popup-confirm">
          <div class="popup__content">
            <button class="popup__icon-close"></button>
            <h2 class="popup__title">Вы уверены?</h2>
            <form class="form-card" name="popup-form" novalidate>
              <button type="submit" class="popup__submit popup__confirm-button button">Да</button>
            </form>
          </div>
        </div>

        <footer class="footer">
          <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>

      </div>
    </div>
  );
}

export default App;
