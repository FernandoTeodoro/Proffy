import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing/index'
import TeatcherList from './pages/TeatcherList/index'
import TeatcherForm from './pages/TeatcherForm/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeatcherList} />
        <Route path="/give-classes" component={TeatcherForm} />
      </Switch>
    </BrowserRouter>
  );
}
 
export default Routes;