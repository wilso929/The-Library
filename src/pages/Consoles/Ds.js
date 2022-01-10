import React from 'react';
import 'C:/Users/Admin/OneDrive/Desktop/The-Library/the-library/src/pages/CSS/Console.scss';
import { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard';

const Ds = () => {
    const [games, setGames] = useState([]);

    useEffect(()=>{
        const getGames = async () =>{
          const gamesFromServer = await fetchGames();
          setGames(gamesFromServer.filter((game) => game.Platforms.includes("DS")));
        }
        getGames();
      }, [])
    
      const fetchGames = async () =>{
        const res = await fetch('http://localhost:5000/games');
        const data = await res.json();
        return data
      }
    
      const fetchGame = async (id) =>{
        const res = await fetch(`http://localhost:5000/games/${id}`);
        const data = await res.json();
        return data
      }


  return (
    <div className='wrapper'>
        {games.map((game) => (
                <GameCard key={game.id} game={game}/>
            ))} 
    </div>
  )
}

export default Ds
