import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Containers/AppContainer';
import './Style/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppRouters from './Routers/AppRouters';

ReactDOM.render(
  <AppRouters/> ,
   document.getElementById('root')
);
