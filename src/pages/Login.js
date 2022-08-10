import '../style/Login.css';
import logo from '../img/logo.png';
import apple from '../img/apple.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



function Login() {
    const[data, setData] = useState({
        email:"",
        password:"",
    })


    const handleChange =({ currentTarget: input}) => {
        setData({...data,[input.name]:input.value})
    }

     const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:4000/api/auth";
            const {data:res} =await axios.post(url,data)
            localStorage.setItem("token", res.data)
            window.location="/main"
            console.log(res.message)
        } catch (error) {
            console.log(error.response.data)
        }
    }
    
      
   
    return (
    <div className="login">
        <img src={logo} alt="logo" />
        <br />
        compostr
        <br />
        Making your city greener one bag at a time
        <br />
        <form onSubmit={handleSubmit} >
            <input
                type="email" 
                placeholder="example@gmail.com"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
            />
            <br />
            <input 
                type="password"
                placeholder='Password'
                name='password'
                onChange={handleChange}
                value={data.password}
                required     
            />
            <br />
            Forgot Password?
            <br />
    
            <button type='submit'>Log In</button>
            <br />
            <Link to='/signup'>
            <button>Sign Up</button>
            </Link>
        </form>
        <br />
        or
        <br />
        <img src={apple} alt="apple" /> 
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={google} alt="google" />

    </div>
    )

}

export default Login