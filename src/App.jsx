import React, { Component, lazy, Suspense } from 'react'
import Spinner from './components/Atoms/Spinner.jsx'
import {Provider} from 'react-redux'
import store from './redux/store'
import {getAllConfirmantes} from './redux/actionCreators.js'
import AppRoutes from './AppRoutes.jsx'
/* import HeaderMain from './components/Organisms/HeaderMain.jsx'
import Main from './components/Organisms/Main.jsx'
import Header from './components/Organisms/Header.jsx' */

const HeaderMain = lazy(() => import('./components/Organisms/HeaderMain.jsx'))
const Main = lazy(() => import('./components/Organisms/Main.jsx'))
//const Header = lazy(() => import('/components/Organisms/Header.jsx'))

/* store.dispatch(getAllConfirmantes()) */

const App = () => {
    return (
      <>
       {/*  <Provider store={store}> */}
          {/* <Suspense fallback={<Spinner />}>
            <HeaderMain />
            <Main />
          </Suspense> */}
          <AppRoutes />
        {/* </Provider> */}
      </>
    )
}

export default App
