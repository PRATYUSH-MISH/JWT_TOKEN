import React,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
//import './Signup.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    
    email: '',
    password: ''
  })
  const handleInput = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("email", formData.email);
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      const result = await response.json()
      localStorage.setItem("token",result.token)
      console.log(result);
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message);
    }
    finally {
      setFormData({
        email: "",
        name:"",
        password: ""
      })
    }

  }
  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <Form.Group controlId="formBasicEmail">

          <Form.Label>
            Email</Form.Label>
          <Form.Control type='email' name='email'
            value={formData.email}
            onChange={handleInput}
            placeholder='Enter-Email' />
        </Form.Group>

        

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' name='password' onChange={handleInput} value={formData.password} placeholder='Enter-Password' />
        </Form.Group>

        <Button variant='dark' type='submit' className='w-100'>
          Login
        </Button>

      </Form>
    </div>
  )
}

export default Login
