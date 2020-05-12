import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Pages/Home.jsx';
import Institutions from './components/Pages/Institutions.jsx';
import Confirmantes from './components/Pages/Confirmantes.jsx';
import Confirmante from './components/Pages/Confirmante.jsx';
import Groups from './components/Pages/Groups.jsx';
import Group from './components/Pages/Group.jsx';
import Attendance from './components/Pages/Attendance.jsx';
import Catequistas from './components/Pages/Catequistas.jsx';
import Catequista from './components/Pages/Catequista.jsx';
import CatequesisList from './components/Pages/CatequesisList.jsx';
import Catequesis from './components/Pages/Catequesis.jsx';
import CatequesisJoin from './components/Pages/CatequesisJoin.jsx';
import CatequesisCopySecurity from './components/Pages/CatequesisCopySecurity.jsx';
import ReportAll from './components/Pages/ReportAll.jsx';
import ReportOne from './components/Pages/ReportOne.jsx';
import Carnet from './components/Pages/Carnet.jsx';
import Login from './components/Pages/Login.jsx';
import Register from './components/Pages/Register.jsx';
import Page404 from './components/Pages/Page404.jsx';

import Protected from './components/Routes/Protected.jsx';
import Public from './components/Routes/Public.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Protected path="/" exact component={ Home } />
        <Protected path="/Instituions" exact component={ Institutions } />

        <Protected path="/confirmantes" exact component={ Confirmantes } />
        <Protected path="/confirmantes/:id" exact component={ Confirmante } />

        <Protected path="/grupos" exact component={ Groups } />
        <Protected path="/grupos/:id" exact component={ Group } />

        <Protected path="/asistencia" exact component={ Attendance } />

        <Protected path="/catequistas" exact component={ Catequistas } />
        <Protected path="/catequistas/:id" exact component={ Catequista } />

        <Protected path="/catequesis" exact component={ CatequesisList } />
        <Protected path="/catequesis/:id" exact component={ Catequesis } />
        <Protected path="/catequesis-join" exact component={ CatequesisJoin } />
        <Protected path="/catequesis-copy-security" exact component={ CatequesisCopySecurity } />

        <Protected path="/reportes" exact component={ ReportAll } />
        <Protected path="/reporte" exact component={ ReportOne } />

        <Protected path="/carnet" exact component={ Carnet } />

        <Public path="/login" exact component={ Login } />
        <Public path="/registro" exact component={ Register } />

        <Route component={Page404}/>

        {/* <Route path="/cursos" component={ CourseGrid } />
        <Route path="/formulario" component={ () => <Formulario name="Pagina de Contacto" /> } />
        <Route component={() => ( // si las antiores path's no son encontradas
          <div>
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        )} /> */}
      </Switch>
    </Router>
  )
}

export default AppRoutes


/*
<ul>
        <li><NavLink activeClassName="activo" to="/" exact> Inicio </NavLink></li>
        <li><NavLink activeClassName="activo" to="/cursos" > Cursos </NavLink></li>
        <li><NavLink activeClassName="activo" to="/formulario" > Formulario </NavLink></li>
        <CardCounter />
      </ul> */
