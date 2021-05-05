import './listeutilisateurs.css';
import React , { Component } from 'react';
import imgtest from './test.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Listeutilisateurs() {
  return (
    <div className="Listeutilisateurs">
       
       <h4 className="titre">Liste des utilisateurs</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px",width:"80%",marginLeft:"auto",marginRight:"auto"}} >
         <div className="container">
        

        <div className="row">
    <div className="col-2 ecrirure"><strong>id</strong></div>
    <div className="col-2 ecrirure"><strong>nom</strong></div>
    <div className="col-3 ecrirure"><strong>email</strong></div>
    <div className="col-3 ecrirure"><strong>image</strong></div>
    <div classN="col-2 ecrirure"><strong>supprimer</strong></div>
  </div>

  <div className="row">
    <div className="col-2">1</div>
    <div className="col-2">maryem</div>
    <div className="col-3">baiz.maryem@gmail.com</div>
    <div className="col-3"> <img  style={{width:"100%",height:"100px",border:"none",borderRadius:"50%"}} src={imgtest} alt="image"></img></div>
    <div classN="col-2"><button className="btn btn-danger">supprimer</button></div>
  </div>
</div>
</div>

    </div>
  );
}

export default Listeutilisateurs;