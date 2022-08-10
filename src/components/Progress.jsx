import React from "react";

const Progress = ({prog}) =>{
    prog = prog*10

    const Daddydiv = {
        height: 20,
        width:'80%',
        backgroundColor: '#F3F6EB',
        borderRadius:20,
        marginLeft: 'auto',
        marginRight:'auto',

    }
    const LilDiv = {
        height: '100%',
        width: `${prog}%`,
        backgroundColor: '#447A51',
        borderRadius:20,
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
            <span style={progresstext}></span>
          </div>
        </div>
        )

}

export default Progress