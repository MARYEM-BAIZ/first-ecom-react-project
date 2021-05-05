import './listesouscategories.css';
import React , { Component } from 'react';
import Axios from 'axios';
import Modifiersouscategorie from '../changersouscategorie/changersouscategorie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Listesouscategories extends Component {

  constructor(props){
    super(props);
    this.state={
       souscategories:[]
    };

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



  supprimer = (id) => {


    Axios.delete("http://localhost:8000/api/souscategories/" +id )
    .then(response => {
         console.log(response);

    })
    .catch(error=> {
     console.log(error);
 });


  }







  render(){

  return (
    <div className="Listesouscategories">
      

      <Router>
      <h4 className="titre">Liste des souscategories</h4>
       <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px",width:"80%",marginLeft:"auto",marginRight:"auto"}} >
  <div className="container">
  <div className="row">
      <div className="col-2 ecriture"><strong>id</strong></div>
      <div className="col-3 ecriture"><strong>Nom du souscatégorie</strong></div>
      <div className="col-3 ecriture"><strong>Nom du catégorie</strong></div>
      <div className="col-2 ecriture"><strong>modifier</strong></div>
      <div className="col-2 ecriture"><strong>supprimer</strong></div>
    </div>
{    this.state.souscategories.map( (souscategorie) => {  
    return(
      <div>
     
    <div className="row">
      <div className="col-2">{souscategorie.id}</div>
    <div className="col-3">{souscategorie.nom}</div>
    <div className="col-3">{souscategorie.categorie_id}</div>
      <div className="col-2"> <Link key={souscategorie.id}  to={"/changersouscategorie/" + souscategorie.id} >modifier</Link></div>
      <div  className="col-2"><button onClick={ () =>{ this.supprimer(souscategorie.id)}} className="btn btn-danger">supprimer</button></div>
    </div>
    </div>
    );
  }) }

</div> </div> 

<Switch>
   
<Route path="/changersouscategorie/:id"  >
    <Modifiersouscategorie />
    </Route>
    </Switch>
</Router>


    </div>
  )};
}

export default Listesouscategories;