import './listecategories.css';
import React , { Component } from 'react';
import Axios from 'axios';
import Modifiercategorie from '../changercategorie/changercategorie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Listecategories extends Component {


  constructor(props){
    super(props);
    this.state={
       categories:[]
    };

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


  supprimer = (id) => {


    Axios.delete("http://localhost:8000/api/categories/" +id )
    .then(response => {
         console.log(response);

    })
    .catch(error=> {
     console.log(error);
 });


  }


  render(){

  return (
    <div className="Listecategories">
   <Router>
      <h4 className="titre">Liste des categories</h4>
       <div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px",width:"80%",marginLeft:"auto",marginRight:"auto"}} >
  <div className="container">
  <div className="row">
      <div className="col-2 ecriture"><strong>id</strong></div>
      <div className="col-4 ecriture"><strong>Nom du catégorie</strong></div>
      <div className="col-3 ecriture"><strong>modifier</strong></div>
      <div className="col-3 ecriture"><strong>supprimer</strong></div>
    </div>
{    this.state.categories.map( (categorie) => {  
    return(
      <div>
     
    <div className="row">
      <div className="col-2">{categorie.id}</div>
    <div className="col-4">{categorie.nom}</div>

      <div className="col-3"> <Link key={categorie.id}  to={"/changercategorie/" + categorie.id} >modifier</Link></div>
      <div  className="col-3"><button onClick={ () =>{ this.supprimer(categorie.id)}} className="btn btn-danger">supprimer</button></div>
    </div>
    </div>
    );
  }) }

</div> </div> 

<Switch>
   
<Route path="/changercategorie/:id"  >
    <Modifiercategorie />
    </Route>
    </Switch>
</Router>

</div>
  )};
}

export default Listecategories;