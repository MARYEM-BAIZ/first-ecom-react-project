import './main.css';
import Admin from '../admin/admin';
import Accueil from '../accueil/accueil';
import Blog from '../blog/blog';
import Howtocook from '../howtocook/howtocook';
import Moroccansnacks from '../moroccansnacks/moroccansnacks';
import React , { Component } from 'react';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Main() {
  return (
    <div className="Main">

      <Switch>
    

    <Route path="/admin" exact>
        <Admin />
    </Route>

    <Route path="/accueil" exact>
        <Accueil />
    </Route>

    <Route path="/moroccansnacks" exact>
        <Moroccansnacks />
    </Route>

    <Route path="/blog" exact>
        <Blog />
    </Route>

    <Route path="/howtocook" exact>
        <Howtocook />
    </Route>


    </Switch>

    </div>
  );
}

export default Main;