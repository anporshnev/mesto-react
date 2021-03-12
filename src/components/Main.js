function Main(props) {
  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrap-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src="#" alt="Изображение профиля" />
        </div>
        <div className="profile__wrap">
          <h1 className="profile__name"></h1>
          <button type="button" className="profile__btn-edit" onClick={props.onEditProfile}></button>
          <p className="profile__text-interests"></p>
          <button type="button" className="profile__btn-add button" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">

      </section>
    </main>
  )
}

export default Main;
