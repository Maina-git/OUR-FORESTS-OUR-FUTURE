import React from 'react'
import "./Center.css"


function Center({info}) {
    return (
        <div className="center">
       <nav>
    <h1>{info.text1}</h1>
    <p>{info.text2}</p>
    </nav>
</div>
)
}


export default Center;
