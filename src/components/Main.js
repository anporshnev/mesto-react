import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  const errorApi = err => {
    console.error(err);
    };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(item => item._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards(state => state.map(item => item._id === card._id ? newCard : item))
      });
  }

  const handleCardDelete = (card) => {
    api
      .removeCard(card._id)
      .then(res => {
        res && setCards(cards => cards.filter(item => item._id !== card._id))
      });
  }

  useEffect(() => {
    api
      .getCardList()
      .then(data => {
        setCards(data)
      })
      .catch(errorApi)
  }, [])

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrap-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Изображение профиля" />
        </div>
        <div className="profile__wrap">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button type="button" className="profile__btn-edit" onClick={props.onEditProfile}></button>
          <p className="profile__text-interests">{currentUser.about}</p>
          <button type="button" className="profile__btn-add button" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        {
          cards.map(item =>
            <Card
              key={item._id}
              card={item}
              onCardClick={(data) => props.handleCardClick(data)}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          )
        }
      </section>
    </main>
  )
}

export default Main;
