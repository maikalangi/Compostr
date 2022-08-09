import '../style/Login.css';
import logo from '../img/logo.png';

const Login = () =>{

    return (
    <div className="login">
        <img src={logo} alt="" />
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
        Don't Have an account? Sign Up here

    </div>
    )

}

export default Login