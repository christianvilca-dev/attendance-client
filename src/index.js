import '@babel/polyfill';
import React from 'react'
import ReactDOM from 'react-dom' // Permite agregar al DOM la aplicacion hecha en react
import './scss/styles.scss'
import './favicon.ico'
import Apollo from './apollo/Apollo.jsx'
//import './css/normalize.css'

ReactDOM.render(<Apollo />, document.getElementById('app'));
