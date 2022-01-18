import React from 'react'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import 'C:/Users/Admin/OneDrive/Desktop/The-Library/the-library/src/pages/CSS/GamePro.css';
import {AiOutlineCheck} from "react-icons/ai"
import {FaTimes} from "react-icons/fa"

const GamePro = () => {
    const [game, setGame] = useState(null);
    const [complete, setComplete] = useState(false)

    let { id } = useParams(); 

    useEffect(()=>{
        const getGame = async () =>{
          const gameFromServer = await fetchGame(id);
          setGame(gameFromServer);
          console.log(gameFromServer)
        }
        getGame();
    }, [])

    const fetchGame = async (id) =>{
        const res = await fetch(`http://localhost:5000/games/${id}`);
        const data = await res.json();
        return data
    }

    return (
        <div className='container'>
            <div>
                {game && <img src={game.Img} width={400} className='image'/>}
            </div>
            <div className='info'>
                {game && <h1 className='title'>{game.Title}</h1>}
                {game && <h1 className='complete'>
                    Completed: {game.Completed ? (<AiOutlineCheck style = {{color: 'green'}}/>) 
                    : (<FaTimes style = {{color: 'red'}}/>) }</h1>}
                <h1 className='p-title'>Platforms:</h1>
                <div className='platforms'>

                </div>

            </div>
        </div>
    )
}

export default GamePro
