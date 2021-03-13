function Card(props) {

  function handleClick() {
    props.onCardClick({link: props.link, name: props.name})
  }

  return (
    <div className="card">
      <button type="button" className="card__btn-remove"></button>
      <img className="card__image" src={props.link} alt={`Изображение места: ${props.name}`} onClick={handleClick} />

      <div className="card__wrap">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__wrap-like">
          <button type="button" className="card__btn-like"></button>
          <div className="card__like-count">{props.likes}</div>
        </div>
      </div>
    </div>
  )
}

export default Card;
