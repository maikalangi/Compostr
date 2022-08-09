import React from "react";

const Progress = ({prog}) =>{

    const Daddydiv = {
        height: 10,
        width:'80%',
        backgroundColor: 'whitesmoke',
        borderRadius:40,
        marginLeft:0,
        marginRight:0,

    }
    const LilDiv = {
        height: '100%',
        width: `${prog}%`,
        backgroundColor: '#44692B',
       borderRadius:40,
        textAlign: 'right'
      }
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
      return (
        <div style={Daddydiv}>
          <div style={LilDiv}>
            <span style={progresstext}>{`${prog}%`}</span>
          </div>
        </div>
        )

}

export default Progress