import React, {Component} from 'react'
import MenuItem from '../Molecules/MenuItem.jsx'
//import menuItems from '../../menu.json';
import menuItems from '../../menu1.json';

class Menu extends Component {
  state = {
    active: ''
  };

  _handleClick(menuItem) {
    this.setState({ active: menuItem });
    const nav = document.getElementById('main-nav')
    nav.classList.toggle('show')
  }

  render(){
    return (
      <nav id="main-nav" className="main-nav">
        <ul className="main-menu">
          {menuItems.usuarios[0].administrador.map((value, key) =>{
            //console.log(this.state.active)
            return(
              <li
                key={key}
                onClick={this._handleClick.bind(this, value.name)}
              >
                <MenuItem
                  //key={key}
                  svg={value.icon}
                  href={value.url}
                >
                  {value.name}
                </MenuItem>
              </li>
            )}
          )}

        </ul>
      </nav>
    )
  }
}

export default Menu
