import '../style/Login.css';
import logo from '../img/logo.png';
import apple from '../img/apple.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';

const Login = () =>{

    return (
    <div className="login">
        <img src={logo} alt="logo" />
        <br />
        compostr
        <br />
        Making your city greener one bag at a time
        <br />
        <input type="email" placeholder="example@gmail.com"/>
        <br />
        <input type="text" />
        <br />
        Forgot Password?
        <br />
        <button>Log In</button>
        <br />
        <button>Sign Up</button>
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