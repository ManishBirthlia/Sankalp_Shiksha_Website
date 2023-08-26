import React, { useEffect,useState } from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {useStorage} from "./ContextProvider";
import { useNavigate  } from 'react-router';
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
  const navigate=useNavigate();
  const goHome=()=>navigate('/');
  const {signIn,UserPresent}=useStorage();
  const [name,setName] =useState("");
  const [email,setEmail] =useState("");
  const [pass,setPass] =useState("");
  const [rPass,setRPass] =useState("");
  const [showWorning,setShowWorning]=useState(false);
  const [worning,setWorning]=useState("");

  function email_validator(email){
    const expression =/^[^@]+@\w+(\.\w+)+\w$/;
    if(expression.test(email)){
      return true;
    }
    return false;
  }
  function HandleClick(e){
    e.preventDefault();
    if(pass==rPass && pass.length>=6){
      if(email_validator(email)){
        signIn({name,email,pass,rPass});
        if(!UserPresent){
          setWorning("This email is already registered...");
          setShowWorning(true);
        }else{
          console.log("User is created...");
          goHome();
        }
      }else{
        setWorning("Please Write an valid email address...");
        setShowWorning(true);
      }
    }else if(pass.length<6){
      setWorning(" The password should be atleast 6 charater long...");
      setShowWorning(true);
    }else{
      setWorning(" The passwords do not match...");
      setShowWorning(true);
    }
  }
  return (
    <div className='cantainer-fluid'>
      <Card className='text-black m-5' style={{borderRadius: '25px'}}>
        <Card.Body>
          <Row>
            <Col md='10' lg='6' className='order-2 order-lg-1'>
            <form onSubmit={(e)=>HandleClick(e)} className="d-flex signup flex-column align-items-center">
            {showWorning && <Alert variant="danger">{worning}</Alert>}
              <h1 classNAme="text-center h1 fw-bold" style={{margin:"30px 10px 30px 10px"}}>Sign up</h1>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <input id='form1' value={name} placeholder="Enter Full Name" required type='text' className='w-100 py-1' onChange={(e)=>{setName(e.target.value);setShowWorning(false);}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <input type="email" id='form2' value={email} placeholder="Enter Your Email" required className='w-100 py-1' onChange={(e)=>{setEmail(e.target.value);setShowWorning(false);}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <input type="password" id='form3' value={pass} placeholder="Enter Your Password" required className='w-100 py-1' onChange={(e)=>{setPass(e.target.value);setShowWorning(false);}} />
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <input type="password" id='form4' value={rPass} placeholder="Repeat your password" required className='w-100 py-1' onChange={(e)=>{setRPass(e.target.value);setShowWorning(false);}} />
              </div>
              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>
              <button  className='btn btn-primary btn-lg mb-4' size='lg'>Register</button>
              <p>Have already an account? <NavLink to="/logIn" style={{textDecoration:"none"}}>Login here</NavLink></p>
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