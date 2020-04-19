import React, {Component, lazy, Suspense} from 'react'

import Menu from './Menu.jsx';
import Options from './Options.jsx';
import ButtonHeader from '../Molecules/ButtonHeader.jsx';

/* const Menu = lazy(() => import('./Menu.jsx'))
//const Options = lazy(() => import('./Options.jsx'))
const ButtonHeader = lazy(() => import('../Molecules/ButtonHeader.jsx')) */

class HeaderMain extends Component {

/*   handleChange=(event)=>{
    console.log("HeaderMain")
    const nav = document.getElementById('main-nav')
    nav.classList.toggle('show')
  } */

  render(){
    return (
      <header className="main-header">
        <div className="l-container main-header__block">
          <div className="left-align">
            <ButtonHeader icon="burger" classes="main-header__button" />
          </div>
          <Menu />
          <div className="main-header__title">
            Titulo
          </div>
          {/* <Options /> */}
          <div className="main-header__circle">
            <a href="#">
              <img src="https://coreui.io/react/demo/assets/img/avatars/6.jpg" className="main-header__img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="main-header__notification right-align">7</span>
              {/* <div className="main-header__notification">7</div> */}
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default HeaderMain