
import React from "react";


function Home(){
  
  let apiKey = process.env.YOUR_API_KEY
  let url = `https://www.google.com/maps/embed/v1/MAP_MODE?key=${apiKey}`
  // if(!isLoaded) return <div>Loading...</div>
  return(    
    <div className="App">
        <iframe style={{ width:"100%", height:"800px", cursor:"grab"}}  
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d229925.11535698533!2d-80.40449824573055!3d25.784435159782443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scomposting%20in%20miami!5e0!3m2!1sen!2sus!4v1660018638848!5m2!1sen!2sus"
          width="600"
          height="450"  
          allowfullscreen="true" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      <h1></h1>
    </div>
  )
}

export default Home
