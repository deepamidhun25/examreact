import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginApi } from '../service/allapi';
import { Navigate } from 'react-router-dom';


function Login() {


const [preview,Setpreview]=useState({
    username:"",
    password:"",
    store_id:'10'
})
const printvalue=(e)=>{
    e.preventDefault()
    const {value,name}=e.target
   Setpreview({...preview,[name]:value})
}
console.log(preview);

// const getData=(e)=>{
//     e.preventDefault();
//     console.log(e);
//     const {name,value}=e.target
//     setdata({ ...usedata, [name]: value });

// }
// console.log(setdata);

const submitData=async(e)=>{
    e.preventDefault()
    const {username,password}=preview
    console.log(preview.username);
    if(preview.username=="918086808680" && preview.password=="123456")
{
    // console.log(true);
    const response=await loginApi(preview)
 console.log(response);
}
else{
    console.log(false);
}

}
useEffect(()=>{

},[])

  return (
    <div>
       <div className="p-3 my-5 d-flex flex-column w-50 form-control">
         <div>
         <Form>
            <div>
                welcome
            </div>
      <Form.Group className="mb-3"  controlId="formBasicEmail">
        <Form.Control type="text" onChange={printvalue} name="username" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password"  onChange={printvalue} placeholder="Password" />
      </Form.Group>
    
      <Button style={{backgroundColor:'#39ac39'}} variant='primary' onClick={submitData}  type="submit">
        Login
      </Button>
    </Form>
         </div>
        


       </div>
    </div>
  )
}

export default Login