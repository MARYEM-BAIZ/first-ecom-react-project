import './ajoutarticle.css';
import React , { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Ajoutarticle() {
  return (
    <div className="Ajoutarticle my-4">
      
      <h4 className="titre ">Ajout d'un article</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px" , width:"60%",marginLeft:"auto",marginRight:"auto"}} >
            
           <form className="" action=""  >

     <label className="ecriture" >Titre :
     <input     type="text" name="titre" /> 
     </label>

     <label className="ecriture" >Description :
     <input     type="text" name="description" /> 
     </label>

     <label className="ecriture" >Prix :
     <input     type="text" name="prix" /> 
     </label>

     <label className="ecriture" >Quantité :
     <input     type="text" name="quantite" /> 
     </label>

     <label  >uploader une image :
     <input   type="file" name="image" /> 
     </label>

     <select style={{display:"block",marginRight:"auto",marginLeft:"auto",marginBottom:"10px",marginTop:"10px"}}  name="souscategorie_id">
     <option value="">souscat1</option>
     <option value="">souscat2</option>
    </select>
     
     <input   style={{border:"none",padding:"7px 15px",backgroundColor:"#3a6b35",color:"#e3b448",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>

    </div>
  );
}

export default Ajoutarticle;