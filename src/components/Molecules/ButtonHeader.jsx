import React, {Component} from 'react'
import Icon from '../Atoms/Icon.jsx';

class ButtonHeader extends Component {

  handleChange=(event)=>{
    const nav = document.getElementById('main-nav')
    nav.classList.toggle('show')
  }

  render(){
//const ButtonHeader = ({icon, classes}) => {
  //console.log(icon)
  return (
    <a href="#" className={this.props.classes} onClick={this.handleChange} >
      <Icon svg={this.props.icon} className="class-svg" title="Facebook"/>
    </a>
  )
  }
}

export default ButtonHeader
