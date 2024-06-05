import React, { useState } from 'react'
import {useNavigate}from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import './SignUp.css'
const Signup = () => {
  const navigate =useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
const handleInput=(event)=>{
  const {name,value}=event.target

setFormData({
  ...formData,
  [name]:value
})
}
const handleSubmit=async (e)=>{
  e.preventDefault()
  console.log("email",formData.email);
  try {
    const response=await fetch("http://localhost:5000/user/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)})
        const result=response.json()
        console.log(result);
        navigate('/login')
  } catch (error) {
    console.log(error.message);
  }
  finally{
    setFormData({
      email:"",
      name:"",
      password:""
    })
  }
 
}
  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>
        <h1>SignUP</h1>

        <Form.Group controlId="formBasicEmail">
          
          <Form.Label>
            Email</Form.Label>
          <Form.Control type='email' name='email' 
          value={formData.email}
          onChange={handleInput}
          placeholder='Enter-Email' />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Name        </Form.Label>
          <Form.Control type='text' name='name' onChange={handleInput} value={formData.name} placeholder='Enter-Name' />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' onChange={handleInput} value={formData.password} placeholder='Enter-Password' />
        </Form.Group>

        <Button variant='dark' type='submit' className='w-100'>
          SignUp
        </Button>

      </Form>
    </div>
  )
}

export default Signup
