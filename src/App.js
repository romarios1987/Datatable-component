import React, {Component} from 'react';
import {Route, Redirect, Switch} from "react-router-dom";

import './App.css';
import Phones from "./components/Phones";
import DetailsPhone from "./components/DetailsPhone";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
          <>
            <h1 className="text-center">DataTable React Component</h1>
            <main className="container">
              <Switch>

                <Route path="/phones/:id" component={DetailsPhone}/>
                <Route path="/phones" component={Phones}/>

                <Route path="/not-found" component={NotFound}/>

                <Redirect from="/" exact to="/phones"/>
                <Redirect to="/not-found"/>

              </Switch>
            </main>
          </>
    );
  }
}

export default App;
