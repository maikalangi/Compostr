import "../style/nLogin.css"

const NewLogin = ({setNavBool}) =>{
    setNavBool(false)
    console.log()
    return (
        <div className="nLogin">
            <div className="loginBox">
                <div className="logoArea"></div>
                <div className="compName">compostr</div>
                <div className="slogan">Making your city greener one bag at a time</div>
                <div className="emailBox"><div className="emailpng"/><input className="email" placeholder="Email ID"></input></div>
                <div className="passBox"><div className="passpng"/><input className="pass" placeholder="Password"></input></div>
                <div className="fPass">Forgot Password?</div>
                <div className="logButt">Log in</div>
                <div className="signButt">Sign up</div>
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