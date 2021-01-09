import './accueil.css';
import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Accueil() {
  return (
    <div className="Accueil">
      <p>accueil</p>
    </div>
  );
}

export default Accueil;