
import React from 'react';
import App  from './App';
import About  from './About';
import Bar  from './Bar';
import Help from "./Help"
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
      <div>
        <Bar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
          <Route exact path="/help" component={Help} />
        </Switch>
      </div>
    );
  };

//   <Route exact path="/">
//       <Redirect to="/Home" />
//     </Route>