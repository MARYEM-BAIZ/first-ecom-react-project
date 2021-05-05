
import './changersouscategorie.css';

import React , {useState,useEffect} from 'react';

import Axios from 'axios';
import {Link,useParams,useLocation,useHistory} from "react-router-dom";





const Modifiersouscategorie = ()  =>{

  const [nom, setNom] = useState("") ;
  const [souscategorie, setSouscategorie] = useState({}) ;

  const para = useParams();
    console.log(para);
  const url= 'http://localhost:8000/api/souscategories/' +para.id ;
  useEffect( () =>{

      Axios.get(url).then(response => {
        setSouscategorie(response.data);
     // console.log(response.data);
         });

  } ,[url]) ;

    

    

    
    const inputhandler  = (event) => {

         setNom(event.target.value);
      
    }


   const modifier  = (event) => {
        event.preventDefault();

      const new_souscategorie ={nom:nom };
      
        //  #######################
      Axios.put("http://localhost:8000/api/souscategories/" +para.id ,new_souscategorie)
    .then(response => {
         console.log(response);


    })
    .catch(error=> {
     console.log(error);
 });

     } 

   console.log(souscategorie);

    return (

      <div className="Modifiersouscategorie">
     <h4 className="ecriture">Modification du souscategories</h4>
<div   style={{border:" 1px solid #eee", boxShadow:"0 2px 3px #ccc" , padding:"15px"}} >
            
            <form action=""  >
      <label  >Nouveu nom du souscatégorie :
      <input style={{width:"80%"}} onChange={inputhandler}   type="text" name="nom" value={souscategorie.nom} /> 
      </label>
     
      <input className="inputsubmitform" onClick={modifier} style={{border:"none",padding:"7px 15px",color:"white",backgroundColor:"rgb(182, 212, 52)",display:"block",marginRight:"auto",marginLeft:"auto"}} type="submit" value="modifier"/>
    </form>
 
    </div>

       </div>

    );
  }




export default Modifiersouscategorie;
