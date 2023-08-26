import React, { useEffect,useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {useStorage} from "./ContextProvider";
import {Card,Container,Col,Row,Alert} from "react-bootstrap";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { NavLink } from 'react-router-dom';

function App() {
  const {logIn,UserPresent}=useStorage();
  const [email,setEmail] =useState("");
  const [pass,setPass] =useState("");
  const [showWorning,setShowWorning]=useState(false);
  const [worning,setWorning]=useState("");

  function email_validator(email){
    const expression =/^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email)){
      return true;
    }
    return false;
  }
  async function HandleClick(e){
    e.preventDefault();
    if(pass.length>=6){
      if(email_validator(email)){
        await logIn({email,pass});
        {!UserPresent && setShowWorning(true)};
        {!UserPresent && setWorning("The Email or password do not match...")};
      }else{
        {!UserPresent && setShowWorning(true)};
        {!UserPresent && setWorning("Please Write an valid email address...")};
      }
    }else if(pass.length<6){
      setShowWorning(true);
      setWorning("The Password should be atleast 6 character long...");
    }
  }
  return (
    <div className='cantainer-fluid' style={{fontWeight:"200"}}>
      <Card className='text-black m-5' style={{borderRadius: '25px'}}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1'>
            <form onSubmit={(e)=>HandleClick(e)} className="d-flex login flex-column align-items-center">
            {showWorning && <Alert variant="danger">{worning}</Alert>}
              <h1 classNAme="text-center h1 fw-bold" style={{margin:"30px 10px 30px 10px"}}>Login</h1>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <input type="email" id='form2' value={email} placeholder="Enter Your Email" required className='w-100 py-1' onChange={(e)=>{setEmail(e.target.value);setShowWorning(false);}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <input type="password" id='form3' value={pass} placeholder="Enter Your Password" required className='w-100 py-1' onChange={(e)=>{setPass(e.target.value);setShowWorning(false);}} />
              </div>
              <button  className='btn btn-primary btn-lg mb-4' size='lg'>Sign In</button>
              <p>Not a member? <NavLink to="/signUp" style={{textDecoration:"none"}}> Register</NavLink></p>
            </form>
            </Col>
            <Col md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;