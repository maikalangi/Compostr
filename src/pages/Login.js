const Login = () =>{

    return (
    <div className="login">
        <div>

        Login
        <svg height="100" width="100">
            <circle cx="50" cy="50" r="30" stroke="gray" stroke-width="1" fill="green" />
        </svg>
        Sign Up
        </div>
        <br />
        Continue with
        <br />
        <input type="email" placeholder="example@gmail.com"/>
        <br />
        <input type="text" />
        <br />
        <input type="checkbox" /> Remember Me Forgot Password?
        <br />
        <button>Login</button>
        <br />
        Don't Have an account? Sign Up here

    </div>
    )

}

export default Login