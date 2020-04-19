import React, {Component} from 'react'
import Icon from '../Atoms/Icon.jsx'

const MenuItem = ({svg, href, children}) =>{
  //console.log(children)
  return (
    <>
    { 
      svg 
      ? <A svg={svg} href={href} >{children}</A> 
      : <Div>{children}</Div>
    }
{/*       <a className="menu-item" href="#">
      { this.props.svg &&
      <div className="menu-item__icon">
        <Icon svg={this.props.svg} title="Facebook"/>
      </div>
      }
      <span className="menu-item__text">{this.props.children}</span>
    </a> */}
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
    <a href={href} className="menu-item">
      <div className="menu-item__icon">
        <Icon svg={svg} classes="class-svg" title="Facebook"/>
      </div>
      <span className="menu-item__text">{children}</span>
    </a>
  )
} 

export default MenuItem
