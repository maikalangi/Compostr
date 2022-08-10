import "../style/nLogin.css"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import React  from 'react'

const NewLogin = ({setNavBool}) =>{

    //Login Logic

    const[data, setData] = useState({
        email:"",
        password:"",
    })


    const handleChange =({ currentTarget: input}) => {
        setData({...data,[input.name]:input.value})
    }

     const handleSubmitLogIn = async(e) => {
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

    // SIGNUP LOGIC

  
    const navigate = useNavigate()


   const handleSubmitSignUp = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			console.log(error.response.data)
		}
	};


    setNavBool(false)
    console.log()
    return (
        <div className="nLogin">
            <div className="loginBox">
                <div className="logoArea"></div>
                <div className="compName">compostr</div>
                <div className="slogan">Making your city greener one bag at a time</div>
                <form>
                <div className="emailBox"><div className="emailpng"/><input className="email" type="email" name="email" onChange={handleChange} value={data.email} required placeholder="Email ID"></input></div>
                <div className="passBox"><div className="passpng"/><input className="pass" type="password" name="password" onChange={handleChange} value={data.password} required placeholder="Password"></input></div>
                <div className="fPass">Forgot Password?</div>
                <div className="logButt" onClick={handleSubmitLogIn}>Log in</div>
                <div className="signButt" onClick={handleSubmitSignUp}>Sign up</div>
                </form>
                <div className="orLine">     OR</div>
                <div className="socialSign">
                    <div className="fb"/>
                    <div className="tw"/>
                    <div className="ig"/>
                    <div className="gg"/>
                </div>
            </div>
        </div>
    )
}
export default NewLogin