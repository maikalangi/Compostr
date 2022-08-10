import "../style/nav.css"
import { useNavigate } from "react-router"



const BottomNav = (nav) =>{

    const navigate = useNavigate()
    const handleLogout = ()=> {
        localStorage.removeItem("token")
        window.location="/"
    }

    return nav.nav ? (
    <div className="bottomNav">
        <div className="navButt"><div className="navSearchIcon" onClick={()=>{navigate('/main')}}></div>Search</div>
        <div className="navButt"><div className="navCommIcon"></div>Community</div>
        <div className="navButt"><div className="navProfIcon" onClick={handleLogout}></div>Profile</div>
    </div>
    ) : null
}

export default BottomNav