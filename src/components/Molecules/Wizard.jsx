import React from 'react'
import Icon from '../Atoms/Icon.jsx'

const Wizard = () => {
  return (
    <div className="wizard" >
      <ul className="wizard__list" >
        <li className="wizard__item" >
          <a href="#" className="wizard__link" >
            <div className="wizard__group" >
              <div className="wizard__icon">
                <div className="wizard__icon-circle" >
                  <Icon svg="user-1" className="class-svg" title="Facebook"/>
                </div>
                <div className="wizard__icon-line"></div>
              </div>
              <span className="wizard__text" >Personales</span>
            </div>
          </a>
        </li>
        <li className="wizard__item" >
          <a href="#" className="wizard__link" >
            <div className="wizard__group" >
              <div className="wizard__icon">
                <div className="wizard__icon-circle" >
                  <Icon svg="user-1" className="class-svg" title="Facebook"/>
                </div>
                <div className="wizard__icon-line"></div>
              </div>
              <span className="wizard__text" >Personales</span>
            </div>
          </a>
        </li>
        <li className="wizard__item" >
          <a href="#" className="wizard__link" >
            <div className="wizard__group" >
              <div className="wizard__icon">
                <div className="wizard__icon-circle" >
                  <Icon svg="user-1" className="class-svg" title="Facebook"/>
                </div>
                <div className="wizard__icon-line"></div>
              </div>
              <span className="wizard__text" >Personales</span>
            </div>
          </a>
        </li>
        <li className="wizard__item" >
          <a href="#" className="wizard__link" >
            <div className="wizard__group" >
              <div className="wizard__icon">
                <div className="wizard__icon-circle" >
                  <Icon svg="user-1" className="class-svg" title="Facebook"/>
                </div>
                <div className="wizard__icon-line"></div>
              </div>
              <span className="wizard__text" >Personales</span>
            </div>
          </a>
        </li>
        <li className="wizard__item" >
          <a href="#" className="wizard__link" >
            <div className="wizard__group" >
              <div className="wizard__icon">
                <div className="wizard__icon-circle" >
                  <Icon svg="user-1" className="class-svg" title="Facebook"/>
                </div>
                {/* <div className="wizard__icon-line"></div> */}
              </div>
              <span className="wizard__text" >Personales</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Wizard
