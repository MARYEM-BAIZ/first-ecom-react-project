import './ajoutsouscategorie.css';
import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Ajoutsouscategorie() {
  return (
    <div className="Ajoutsouscategorie my-4">
      
      <h4 className="titre ">Ajout d'une souscatégorie</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px" , width:"60%",marginLeft:"auto",marginRight:"auto"}} >
            
           <form className="" action=""  >

     <label className="ecriture" >Nom du souscatégorie :
     <input     type="text" name="nom" /> 
     </label>

     <select style={{display:"block",marginRight:"auto",marginLeft:"auto",marginBottom:"10px",marginTop:"10px"}}  name="categorie_id">
     <option value="">cat1</option>
     <option value="">cat2</option>
    </select>
     
     <input   style={{border:"none",padding:"7px 15px",backgroundColor:"#3a6b35",color:"#e3b448",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>

    </div>
  );
}

export default Ajoutsouscategorie;