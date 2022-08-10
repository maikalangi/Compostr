import '../style/Login.css';
import logo from '../img/logo.png';
import apple from '../img/apple.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';
import { Link, useNavigate } from "react-router-dom";

const Login = () =>{

    // const history = BrowserRouter();
    // const map = () => history.push('/map');

    return (
    <div className="login">
        <div className='card'>
            <img className='logo' src={logo} alt="logo" />
            <p>compostr</p>
            Making your city greener one bag at a time
            <input className='email' type="email" placeholder="example@gmail.com"/>
            <input className='password' type="text" />
            <p>Forgot Password?</p>
            <Link to="/main">
                <button>Log In</button>
            </Link>
            <button>Sign Up</button>
            <p>or</p>
            <div className='signups'>
                <img src={apple} alt="apple" /> 
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={google} alt="google" />
            </div>
        </div>
    </div>
    )

}

export default Login