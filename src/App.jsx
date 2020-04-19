import React, { Component, lazy, Suspense } from 'react'
import Spinner from './components/Atoms/Spinner.jsx'
/* import HeaderMain from './components/Organisms/HeaderMain.jsx'
import Main from './components/Organisms/Main.jsx'
import Header from './components/Organisms/Header.jsx' */

const HeaderMain = lazy(() => import('./components/Organisms/HeaderMain.jsx'))
const Main = lazy(() => import('./components/Organisms/Main.jsx'))
//const Header = lazy(() => import('/components/Organisms/Header.jsx'))

export class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<Spinner />}>
          <HeaderMain />
          {/* <Header /> */}
          <Main />
        </Suspense>
      </>
    )
  }
}