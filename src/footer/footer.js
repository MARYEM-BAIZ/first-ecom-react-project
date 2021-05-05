import './footer.css';
import React , { Component } from 'react';
import Axios from 'axios';
import {useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Footer() {



  const [name, setName] = useState("") ;
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("") ;


 const inputhandlername  = (event) => {

  setName(event.target.value);
}

const inputhandleremail  = (event) => {

  setEmail(event.target.value);
}

const inputhandlerpassword  = (event) => {

  setPassword(event.target.value);
}



  const ajouter  = (event) => {
    event.preventDefault();

    const new_user ={
      name:name,
      email:email,
      password:password

     };
  console.log(new_user);
  Axios.post("http://localhost:8000/api/users",new_user)
.then(response => {
     console.log(response);


})
.catch(error=> {
 console.log(error);
});

 } 


  return (
    <div className="Footer">
      <div className="pb-4" style={{ width: "80%", marginLeft: "auto", marginRight: "auto"}}>
        <div className="container">
        <div className="row">
      

             

         
        <div className="col-3">
        <p style={{color:"#3a6b35"}}  className="my-4 ppfooter">Support</p>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Affiliate Program</p>   </Link>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Affiliate Program</p>   </Link>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Terms of Use</p>   </Link>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Sales Tax</p>   </Link>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Shipping</p>   </Link>
        <Link to="" style={{textDecoration:"none"}} > <p className="ecriture" style={{color:"#3a6b35"}}  >Return Policy</p>   </Link>
      </div>

      <div className="col-3">
      <p style={{color:"#3a6b35"}}  className="my-4 ppfooter">Contact Us</p>
      <address className="ecriture" style={{color:"#3a6b35"}} >06 00 00 00 00</address>  
      <Link to="" style={{textDecoration:"none"}} ><address className="ecriture" style={{color:"#3a6b35"}} >MFMarket@gmail.com</address>   </Link>
      </div>

      <div className="col-3">
      <p style={{color:"#3a6b35"}}  className="my-4 ppfooter">Stay in touch</p>
      <Link to="" style={{textDecoration:"none"}} >  <i style={{color:"#e3b448"}}  class="fa fa-instagram" aria-hidden="true"></i> </Link>
      <Link to="" style={{textDecoration:"none"}} >   <i style={{color:"#e3b448"}}  class="fa fa-facebook-square" aria-hidden="true"></i> </Link>
      <Link to="" style={{textDecoration:"none"}} > <i style={{color:"#e3b448"}}  class="fa fa-twitter" aria-hidden="true"></i>  </Link>
      <Link to="" style={{textDecoration:"none"}} >  <i style={{color:"#e3b448"}}  class="fa fa-linkedin" aria-hidden="true"></i> </Link>
      </div>

      <div className="col-3">
      <p style={{color:"#3a6b35"}}  className="my-4 ppfooter">Get the newsletter</p>

      <form>

      <div className="form-outline mb-2">
  <label style={{color:"#3a6b35"}}  className="form-label ecrirute" for="form3Example3">name</label>
    <input onChange={inputhandlername} type="text" name="name" id="form3Example3" class="form-control" />
  </div>


  <div className="form-outline mb-2">
  <label style={{color:"#3a6b35"}}  className="form-label ecriture" for="form3Example3">Email address</label>
    <input onChange={inputhandleremail} type="email" name="email" id="form3Example3" class="form-control" />
  </div>

 
  <div className="form-outline mb-4">
  <label style={{color:"#3a6b35"}}  className="form-label ecriture" for="form3Example4">Password</label>
    <input onChange={inputhandlerpassword}  type="password" name="password" id="form3Example4" class="form-control" />
  </div>

  

  <button onClick={ajouter} style={{backgroundColor:"#3a6b35",color:"#e3b448"}} type="submit" class="btn  btn-block">Sign up</button>

  
</form>
      </div>






    </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;