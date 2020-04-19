import React, {Component} from 'react'
import MenuItem from '../Molecules/MenuItem.jsx'
//import menuItems from '../../menu.json';
import menuItems from '../../menu1.json';

/* const menuItems = [
  'REGISTROS',
  'Asistencia',
  'Confirmante',
  'REPORTES',
  'General',
  'Individual',
  'Carnet',
] */
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
    //const activeStyle = "main-menu__item"//{ background: '#3A4248' };
    //console.log(menuItems.usuarios[0].administrador)
    return (
      <nav id="main-nav" className="main-nav">
        <ul className="main-menu">
          {menuItems.usuarios[0].administrador.map((value, key) =>{
            //console.log(this.state.active)
            return(
            <li 
              className={(this.state.active === value.name && value.url) ? "main-menu__item" : ""} 
              key={key}
              //style={this.state.active === value.name ? activeStyle : {}} 
              onClick={this._handleClick.bind(this, value.name)}
            >
              <MenuItem
                //key={key}
                svg={value.icon}
                href="#"//{value.url}
              >
                {value.name}
              </MenuItem>
            </li>)}
          )}

          {/* <li className="main-menu__item"><MenuItem href="#" svg="clock" >Asistencia</MenuItem></li>
          <li className="main-menu__item"><MenuItem href="#" svg="male" >Confirmante</MenuItem></li>
          <li className="main-menu__item"><MenuItem>REPORTES</MenuItem></li>
          <li className="main-menu__item"><MenuItem href="#" svg="chart" >General</MenuItem></li>
          <li className="main-menu__item"><MenuItem href="#" svg="chart" >Individual</MenuItem></li>
          <li className="main-menu__item"><MenuItem href="#" svg="card" >Carnet</MenuItem></li> */}
        </ul>
      </nav>
    )
  }
}

export default Menu
