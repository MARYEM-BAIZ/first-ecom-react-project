import './ajoutarticle.css';
import React , { Component } from 'react';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Ajoutarticle extends Component {

  constructor(props){
    super(props);

    this.state ={
      titre:"",
      description:"",
      prix:"",
      quantite:"",
      image:"image",
      souscategorie_id:"",
       souscategories:[]

    }

}



componentDidMount(){
  const url= 'http://localhost:8000/api/souscategories' ;
    Axios.get(url).then(response => {
     // console.log(response.data);
    this.setState({
      souscategories:response.data
    })
  });

}


   
inputhandlertitre  = (event) => {
  this.setState({

      titre: event.target.value

     });
  
}


inputhandlerdescription  = (event) => {
  this.setState({

      description: event.target.value

     });
  
}


inputhandlerprix  = (event) => {
  this.setState({

      prix: event.target.value

     });
  
}


inputhandlerquantite  = (event) => {
  this.setState({

      quantite: event.target.value

     });
  
}


inputhandlersouscategorie_id  = (event) => {
  console.log(event.target.value);
    this.setState({
 
        souscategorie_id: event.target.value
    
       });
       
 }



 ajouter  = (event) => {
  event.preventDefault();

const url = "http://localhost:8000/api/articles";
const article  ={ 
  titre: this.state.titre,
  description:this.state.description,
  prix:this.state.prix,
  quantite:this.state.quantite,
  image:this.state.image,

  souscategorie_id: this.state.souscategorie_id
};

console.log(article);

Axios.post(url ,article)
.then(response => {
   console.log(response);


})
.catch(error=> {
console.log(error);
});

}








   render(){

     
    let souscategories= this.state.souscategories.map( souscategorie => {
      
      return ( 
     <option   key={souscategorie.id} value={souscategorie.id} >{souscategorie.nom}</option>
     )
   });



  return (
    <div className="Ajoutarticle my-4">
      
      <h4 className="titre ">Ajout d'un article</h4>
             <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px" , width:"60%",marginLeft:"auto",marginRight:"auto"}} >
            
           <form className="" action=""  >

     <label className="ecriture" >Titre :
     <input  onChange={this.inputhandlertitre}   type="text" name="titre" /> 
     </label>

     <label className="ecriture" >Description :
     <input  onChange={this.inputhandlerdescription}   type="text" name="description" /> 
     </label>

     <label className="ecriture" >Prix :
     <input  onChange={this.inputhandlerprix}   type="text" name="prix" /> 
     </label>

     <label className="ecriture" >Quantité :
     <input   onChange={this.inputhandlerquantite}  type="text" name="quantite" /> 
     </label>

     <label  >uploader une image :
     <input   type="file" name="image" /> 
     </label>

     <select style={{display:"block",marginRight:"auto",marginLeft:"auto",marginBottom:"10px",marginTop:"10px"}} onChange={this.inputhandlersouscategorie_id}   name="souscategorie_id">
     { souscategories}
    </select>
     
     <input onClick={this.ajouter}  style={{border:"none",padding:"7px 15px",backgroundColor:"#3a6b35",color:"#e3b448",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
   </form>

   </div>

    </div>
  )};
}

export default Ajoutarticle;