import React, {Component} from 'react'
import Icon from '../Atoms/Icon.jsx'
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

const MenuItem = ({svg, href, children}) =>{
  //console.log(children)
  return (
    <>
    {
      svg
      ? <A svg={svg} href={href} >{children}</A>
      : <Div>{children}</Div>
    }
    </>
  )
}

const Div = ({children}) => {
  //console.log("Children", children)
  return (
    <div className="menu-item">
      <span className="menu-item__text">{children}</span>
    </div>
  )
}

const A = ({children, href, svg}) => {
  return (
    <NavLink to={href} activeClassName="main-menu__item" className="menu-item">
      <div className="menu-item__icon">
        <Icon svg={svg ? svg : ""} classes="class-svg" title="Facebook"/>
      </div>
      <span className="menu-item__text">{children}</span>
    </NavLink>
  )
}

MenuItem.propTypes = {
  svg: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string
}

MenuItem.defaultProps = {
  svg: "",
  href: "",
  children: ""
}

Div.propTypes = {
  children: PropTypes.string
}

Div.defaultProps = {
  children: ""
}

A.propTypes = {
  svg: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string
}

A.defaultProps = {
  svg: "",
  href: "",
  children: ""
}

export default MenuItem
