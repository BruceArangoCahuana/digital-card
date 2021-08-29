import React,{Fragment} from 'react';

//importamor react-router-dom para los enlaces
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//los componentes para los enlaces
import Inicio from './componentes/Incio';
import Lima from './componentes/Lima/Lima';
import Ventas from './componentes/Provincia/Provincia';
import Verporid from './componentes/Verporid';
import Error from './componentes/Errror';
function App() {
  return (
    <Router>
      <Fragment>
                <Switch>
                      <Route exact path="/">
                        <Inicio />
                      </Route>
                      <Route exact path="/trabajadores/Lima">
                        <Lima />
                      </Route>
                      <Route exact path="/trabajadores/departamento/:idPersonal" component={Verporid} />
                      <Route exact path="/trabajadores/Provincia">
                        <Ventas />
                      </Route>
                      <Route path="*" component={Error} />
                </Switch>
      </Fragment>
    </Router>
    );
}

export default App;
