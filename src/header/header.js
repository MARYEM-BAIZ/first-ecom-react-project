import React , { Component } from 'react';
import './header.css';
import Axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



  class  Header extends  Component {
 
   render() {
     
     
   return (
     <div className="Header">
      <div style={{paddingTop:"20px"}}>
     <div className="div1header">
     <article className="ar1div1header"> <Link to="/accueil" style={{textDecoration:"none"}} > <img src="" alt="image"></img> </Link></article>

     <article className="ar2div1header ">

     <div > <form style={{display:"flex"}} action="" method="post">
       <input   className="form-control"  type="text" name="motcherche" placeholder=" search a product ?" />

       <button style={{backgroundColor:"#3a6b35"}} className="btn btn-outline-secondary" type="button"><i class="fa fa-search" aria-hidden="true"></i></button>
       </form></div>
       
       <div ><i class="fa fa-user mt-3" aria-hidden="true"></i></div>

       <div ><i class="fa fa-shopping-cart mt-3 " aria-hidden="true"></i></div>


     </article>
     </div>


     <div style={{paddingTop:"20px"}} className="div2header">
     <Link to="/moroccansnacks" style={{textDecoration:"none"}} > <p className="pp" >Moroccan Snacks</p>   </Link>
     <Link to="" style={{textDecoration:"none"}} > <p className="pp" >Moroccan Food</p>   </Link>
     <Link to="/blog" style={{textDecoration:"none"}} > <p className="pp" >Blog</p>   </Link>
     <Link to="/howtocook" style={{textDecoration:"none"}} > <p className="pp" >How to cook</p>   </Link>
     <Link to="/admin" style={{textDecoration:"none"}} > <p className="pp" >admin</p>   </Link>
     </div>
     
     </div>
     </div>
   )};
 }
 
 
 export default Header;