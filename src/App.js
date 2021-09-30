import React, {Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Menu from "./components/Menu";
import Routes from "./configure/routing/Routes";
import AppRoute from './components/router/AppRoute';

function App() {

 // const {clients} = this.state;
  return (
    <Router>
      <Suspense fallback="Cargando...">
         <Menu />  
          <Switch>
            {Routes.map(route =>(
              <AppRoute 
              key = {route.path}
              path={route.path}
              component={route.component}
              isPrivate ={route.isPrivate}
              />
            ))}
          </Switch>
      </Suspense> 
    </Router>
  );
}

export default App;