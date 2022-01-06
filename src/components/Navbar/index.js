import{Nav, NavLink, NavMenu, Bars, NavBtn, NavBtnLink} from './NavbarElements'
import Dropdown from './Dropdown'
import { useState } from 'react'
import './index.css';
import { Ninitems, PSitems, Xitems } from './Menuitems'


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(true);
        }
      };
    
      const onMouseLeave = () => {
        if (window.innerWidth < 960) {
          setDropdown(false);
        } else {
          setDropdown(false);
        }
      };

    const [dropdownp, setDropdownp] = useState(false)

    const onMouseEnterp = () => {
        if (window.innerWidth < 960) {
          setDropdownp(false);
        } else {
          setDropdownp(true);
        }
      };
    
      const onMouseLeavep = () => {
        if (window.innerWidth < 960) {
          setDropdownp(false);
        } else {
          setDropdownp(false);
        }
      };

      const [dropdownx, setDropdownx] = useState(false)

      const onMouseEnterx = () => {
          if (window.innerWidth < 960) {
            setDropdownx(false);
          } else {
            setDropdownx(true);
          }
        };
      
        const onMouseLeavex = () => {
          if (window.innerWidth < 960) {
            setDropdownx(false);
          } else {
            setDropdownx(false);
          }
        };

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavMenu>
                    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <NavLink to="/Nintendo" activeStyle >
                            Nintendo
                        </NavLink>
                        {dropdown && <Dropdown MenuItems={ Ninitems }/>}
                    </div>

                    <div onMouseEnter={onMouseEnterp} onMouseLeave={onMouseLeavep}>
                        <NavLink to="/PS" activeStyle>
                            Play Station
                        </NavLink>
                        {dropdownp && <Dropdown MenuItems={ PSitems }/>}
                    </div>

                    <div onMouseEnter={onMouseEnterx} onMouseLeave={onMouseLeavex}>
                        <NavLink to="/Xbox" activeStyle>
                            Xbox
                        </NavLink>
                        {dropdownx && <Dropdown MenuItems={ Xitems }/>}
                    </div>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign in</NavBtnLink>
                </NavBtn>
            </Nav>
            
        </>
    )
}

export default Navbar
