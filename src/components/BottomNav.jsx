import "../style/nav.css"
import { useNavigate } from "react-router"



const BottomNav = (nav) =>{

    const navigate = useNavigate()

    return nav.nav ? (
    <div className="bottomNav">
        <div className="navButt"><div className="navSearchIcon" onClick={()=>{navigate('/main')}}></div>Search</div>
        <div className="navButt"><div className="navCommIcon"></div>Community</div>
        <div className="navButt"><div className="navProfIcon"></div>Profile</div>
    </div>
    ) : null
}

export default BottomNav