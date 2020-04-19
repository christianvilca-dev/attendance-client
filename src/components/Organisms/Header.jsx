import React from 'react'

import ButtonHeader from '../Molecules/ButtonHeader.jsx';
import Wizard from '../Molecules/Wizard.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className="l-container-s header__block">
        <div className="left-align">
          <ButtonHeader icon="arrow-back" classes="button-header" />
        </div>
        <div className="header__title">
          Titulo
        </div>
        <div className="right-align">
          <ButtonHeader icon="qrcode" classes="button-header__color" />
        </div>
      </div>
      <Wizard />
    </header>
  )
}

export default Header