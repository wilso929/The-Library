import { useState } from 'react'
import './Dropdown.css';
import{Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink} from './NavbarElements'


const Dropdown = ( { MenuItems }) => {
    const [click, setClick] =  useState(false)
    const handelClick = () =>setClick(!click)


    return (
        <div>
            <ul onClick={handelClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                            <NavLink to={item.path} activeStyle>
                                {item.title} 
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Dropdown
