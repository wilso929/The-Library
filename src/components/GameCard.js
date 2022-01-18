import * as React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'C:/Users/Admin/OneDrive/Desktop/The-Library/the-library/src/pages/CSS/GameCard.css';
import { Link } from 'react-router-dom'

const GameCard = ({ game }) => {
    return (
      
      <Link to={`/GameCard/${game.id}`} style={{ textDecoration: 'none', color:"#1E90FF" }}>
        <div className='card'>
            <div className='card__body'>
                <img src={game.Img} className='card__img'/>
                <h2 className='card__title'>{game.Title}</h2>
            </div>
        </div>
      </Link>

    )
}

export default GameCard
