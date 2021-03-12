function handleEditAvatarClick() {
  document.querySelector('.popup_type_avatar').classList.add('popup_open');
}

function handleEditProfileClick() {
  document.querySelector('.popup-profile').classList.add('popup_open');
}

function handleAddPlaceClick() {
  document.querySelector('.popup-card').classList.add('popup_open');
}

function Main() {
  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrap-avatar" onClick={handleEditAvatarClick}>
          <img className="profile__avatar" src="#" alt="Изображение профиля" />
        </div>
        <div className="profile__wrap">
          <h1 className="profile__name"></h1>
          <button type="button" className="profile__btn-edit" onClick={handleEditProfileClick}></button>
          <p className="profile__text-interests"></p>
          <button type="button" className="profile__btn-add button" onClick={handleAddPlaceClick}></button>
        </div>
      </section>

      <section className="elements">

      </section>
    </main>
  )
}

export default Main;
export {
  handleEditAvatarClick,
  handleEditProfileClick,
  handleAddPlaceClick
}
