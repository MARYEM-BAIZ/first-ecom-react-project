import './ajoutsouscategorie.css';
import React , { Component } from 'react';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Ajoutsouscategorie extends Component  {

  constructor(props){
    super(props);

    this.state ={
      nom:"",
      categorie_id:"",
       categories:[]

    }

}


componentDidMount(){
  const url= 'http://localhost:8000/api/categories' ;
    Axios.get(url).then(response => {
     // console.log(response.data);
    this.setState({
      categories:response.data
    })
  });

}

inputhandler  = (event) => {
  this.setState({

      nom: event.target.value

     });
  
}


inputhandlercategorie_id  = (event) => {
  console.log(event.target.value);
    this.setState({
 
        categorie_id: event.target.value
    
       });
       
 }



 ajouter  = (event) => {
  event.preventDefault();

const url = "http://localhost:8000/api/souscategories";
const souscategorie  ={ 
  nom: this.state.nom,

  categorie_id: this.state.categorie_id
};

console.log(souscategorie);

Axios.post(url ,souscategorie)
.then(response => {
   console.log(response);


})
.catch(error=> {
console.log(error);
});

}


  render(){

    let categories= this.state.categories.map( categorie => {
      
      return ( 
     <option   key={categorie.id} value={categorie.id} >{categorie.nom}</option>
     )
   });

    return (
      <div className="Ajoutsouscategorie my-4">
        
        <h4 className="titre ">Ajout d'une souscatégorie</h4>
               <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px" , width:"60%",marginLeft:"auto",marginRight:"auto"}} >
              
             <form className="" action=""  >
  
       <label className="ecriture" >Nom du souscatégorie :
       <input  onChange={this.inputhandler}   type="text" name="nom" /> 
       </label>
  
       <select style={{display:"block",marginRight:"auto",marginLeft:"auto",marginBottom:"10px",marginTop:"10px"}}  onChange={this.inputhandlercategorie_id}  name="categorie_id">
       { categories}
      </select>
       
       <input  onClick={this.ajouter}  style={{border:"none",padding:"7px 15px",backgroundColor:"#3a6b35",color:"#e3b448",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="ajouter"/>
     </form>
  
     </div>
  
      </div>
    )

  };
}

export default Ajoutsouscategorie;