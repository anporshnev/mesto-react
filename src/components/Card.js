function Card({ link, name, likes }) {
  return (
    <div className="card">
      <button type="button" className="card__btn-remove"></button>
      <img className="card__image" src={link} alt={`Изображение места: ${name}`} />
      <div className="card__wrap">
        <h2 className="card__title">{name}</h2>
        <div className="card__wrap-like">
          <button type="button" className="card__btn-like"></button>
          <div className="card__like-count">{likes}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
