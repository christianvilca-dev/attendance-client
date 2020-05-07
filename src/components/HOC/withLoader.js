import React, {Component} from "react"

const withLoader = (propValue) => (WrapperComponent) => {
  return class WithLoader extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return this.props[propValue].length === 0
      ? <h1>Cargando...</h1>
      : <WrapperComponent {...this.props} />
    }
  }
}

export default withLoader