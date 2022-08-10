import "../style/nav.css"

const BottomNav = (nav) =>{
    return nav.nav ? (
    <div className="bottomNav">
        <div className="navButt"><div className="navSearchIcon"></div>Search</div>
        <div className="navButt"><div className="navCommIcon"></div>Community</div>
        <div className="navButt"><div className="navProfIcon"></div>Profile</div>
    </div>
    ) : null
}

export default BottomNav