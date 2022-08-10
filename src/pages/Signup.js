import React  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


function Signup() {
    const [data, setData]= useState({
        email:"",
        password:""
    })
    const [error,setError] = useState("")
    const navigate = useNavigate()

    const handleChange =({ currentTarget: input}) => {
        setData({...data,[input.name]:input.value})
    }

   const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			console.log(error.response.data)
		}
	};

    return (
        <div className='signup'>
            <h1> Welcome Back</h1>
            <Link to="/">
            <button type="button" className='button'>
                Sign In
            </button>
            </Link>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input
                    onChange={handleChange}
                    type="email"
                    placeholder='Email'
                    name="email"
                    value={data.email}
                    required
                />
                <input
                    onChange={handleChange}
                    type="password"
                    placeholder='password'
                    name="password"
                    value={data.password}
                    required
                />
                {error && <div>{error}</div>}
                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default Signup