import React, { Component } from 'react'
import Icon from '../Atoms/Icon.jsx';

export class Button extends Component {
  render() {
    return (
      <a href="#" className="button">
        <Icon svg="right" classes="svg-icon" title="Facebook"/><span>Danos like en facebook</span>
      </a>
    )
  }
}

export default Button
