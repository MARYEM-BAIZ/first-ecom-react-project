import './admin.css';
import Ajoutcategorie from '../ajoutcategorie/ajoutcategorie';
import Ajoutsouscategorie from '../ajoutsouscategorie/ajoutsouscategorie';
import Ajoutarticle from '../ajoutarticle/ajoutarticle';
import Listecategories from '../listecategories/listecategories';
import Listesouscategories from '../listesouscategories/listesouscategories';
import Listearticles from '../listearticles/listearticles';
import Listeutilisateurs from '../listeutilisateurs/listeutilisateurs';
import Listecommandes from '../listecommandes/listecommandes';
import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Admin() {
  return (
    <div className="Admin">
       <Router> 
    <div className="adminlinks">
    <Link to="/ajoutcategorie" style={{textDecoration:"none"}} > <p className="ppp" >Ajout catégorie</p>   </Link>
    <Link to="/ajoutsouscategorie" style={{textDecoration:"none"}} > <p className="ppp" >Ajout souscatégorie</p>   </Link>
    <Link to="/ajoutarticle" style={{textDecoration:"none"}} > <p className="ppp" >Ajout article</p>   </Link>
    <Link to="/listecategories" style={{textDecoration:"none"}} > <p className="ppp" >Liste des catégories</p>   </Link>
    <Link to="/listesouscategories" style={{textDecoration:"none"}} > <p className="ppp" >Liste des souscatégories</p>   </Link>
    <Link to="/listearticles" style={{textDecoration:"none"}} > <p className="ppp" >Liste des articles</p>   </Link>
    <Link to="/listeutilisateurs" style={{textDecoration:"none"}} > <p className="ppp" >Liste des utilisateurs</p>   </Link>
    <Link to="/listecommandes" style={{textDecoration:"none"}} > <p className="ppp" >Liste des Commandes</p>   </Link>
    </div>

    <Switch>
    

    <Route path="/ajoutcategorie" exact>
        <Ajoutcategorie />
    </Route>

    <Route path="/ajoutsouscategorie" exact>
        <Ajoutsouscategorie />
    </Route>

    <Route path="/ajoutarticle" exact>
        <Ajoutarticle />
    </Route>

    <Route path="/listecategories" exact>
        <Listecategories />
    </Route>

    <Route path="/listesouscategories" exact>
        <Listesouscategories />
    </Route>

    <Route path="/listearticles" exact>
        <Listearticles />
    </Route>

    <Route path="/listeutilisateurs" exact>
        <Listeutilisateurs />
    </Route>

    <Route path="/listecommandes" exact>
        <Listecommandes />
    </Route>


    </Switch>
    </Router> 
    </div>
  );
}

export default Admin;