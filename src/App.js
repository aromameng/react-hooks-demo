import React from 'react';
import { Provider } from 'reto'
import {
  HashRouter as Router,
} from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import stores from './stores'
import './App.css';

function App() {
  return (
    <Provider of={stores.FooStore}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </Provider>
  );
}

export default App;
