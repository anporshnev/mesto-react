import React, { useState, useEffect } from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main(props) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  const errorApi = err => {
    console.error(err);
    };

  useEffect(() => {
    api
      .getUserInfoServ()
      .then(data => {
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
      })
      .catch(errorApi)
  })

  useEffect(() => {
    api
      .getCardList()
      .then(data => {
        const cardsList = data.map(item => {
          return {
            name: item.name,
            link: item.link,
            idCard: item._id,
            idOwner: item.owner._id,
            likes: item.likes.length
          }
        })
        setCards(cardsList)
      })
      .catch(errorApi)
  }, [])

  return (
    <main className="main-content">
      <section className="profile">
        <div className="profile__wrap-avatar" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Изображение профиля" />
        </div>
        <div className="profile__wrap">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__btn-edit" onClick={props.onEditProfile}></button>
          <p className="profile__text-interests">{userDescription}</p>
          <button type="button" className="profile__btn-add button" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        {
          cards.map(item =>
            <Card
              key={item.idCard}
              link={item.link}
              name={item.name}
              likes={item.likes}
            />
          )
        }
      </section>
    </main>
  )
}

export default Main;
