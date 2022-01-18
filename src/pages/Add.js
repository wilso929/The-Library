import React from 'react'
import {useState} from 'react'

import 'C:/Users/Admin/OneDrive/Desktop/The-Library/the-library/src/pages/CSS/Add.css';

const Add = () => {
    const [title, setTitle] = useState("")
    const [platforms, setPlatforms] = useState([])
    const [image, setImage] =useState(" ")
    const [complete, setComplete] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!title){
            alert('Please add Title')
            return
        }

        addGame({title, platforms, image, complete})
        setTitle("")
        setPlatforms([])
        setComplete(false)
    }

    const addGame = async (game) =>{
        const res = await fetch(`http://localhost:5000/games`,{
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(game)
        })
    
        const data = await res.json()
    }
    
    const editPlatforms = (system) =>{
        if(!platforms.includes(system)){
            setPlatforms([...platforms, system])
        }else{
            setPlatforms(platforms.filter((platform) => platform != system))
        }
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className = 'form-control'>
                <label>Title:</label>
                <input type='text' placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/> 
            </div>
            <div className = 'form-control'>
                <label>Completed:</label>
                <input type='checkbox' checked = {complete} value={complete} onChange={(e) => setComplete(e.currentTarget.checked)}/> 
            </div>
            <div className = 'form-control'>
                <label>Platforms:</label>
                <div className = 'button-grid'>
                    <input type='button' value = "Switch" onClick={() =>{editPlatforms("Switch")}}/>
                    <input type='button' value = "Wii U" onClick={() =>{editPlatforms("Wii U")}}/>
                    <input type='button' value = "Wii" onClick={() =>{editPlatforms("Wii")}}/>
                    <input type='button' value = "Gamecube" onClick={() =>{editPlatforms("Gamecube")}}/>
                    <input type='button' value = "N64" onClick={() =>{editPlatforms("N64")}}/>
                    <input type='button' value = "SNES" onClick={() =>{editPlatforms("SNES")}}/>
                    <input type='button' value = "NES" onClick={() =>{editPlatforms("NES")}}/>
                    <input type='button' value = "DS" onClick={() =>{editPlatforms("DS")}}/>
                    <input type='button' value = "Game Boy" onClick={() =>{editPlatforms("Game Boy")}}/>
                    <input type='button' value = "PS5" onClick={() =>{editPlatforms("PS5")}}/>
                    <input type='button' value = "PS4" onClick={() =>{editPlatforms("PS4")}}/>
                    <input type='button' value = "PS3" onClick={() =>{editPlatforms("PS3")}}/>
                    <input type='button' value = "PS2" onClick={() =>{editPlatforms("PS2")}}/>
                    <input type='button' value = "PS1" onClick={() =>{editPlatforms("PS1")}}/>
                    <input type='button' value = "Xbox One" onClick={() =>{editPlatforms("Xbox One")}}/>
                    <input type='button' value = "360" onClick={() =>{editPlatforms("360")}}/>
                    <input type='button' value = "Original Xbox" onClick={() =>{editPlatforms("Original Xbox")}}/>
                </div>
            </div>
            <input type='submit' value = 'save' className="btn btn-black"/>
        </form>
    )
}

export default Add
