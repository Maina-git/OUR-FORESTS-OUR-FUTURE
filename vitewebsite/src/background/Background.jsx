import React from 'react'
import "./Background.css";


function Background(props) {

const count=props.count

  if(count===0){
return (
    <img src="/images/road-1072821_1280.jpg  " className="background" alt="" />
  )
}
else if(count==1){
  return ( <img src="/images/fantasy-2049567_1280.jpg " className="background"  alt=""/>)    
}
else if(count===2){
  return (
    <img src="/images/forest-6765636_1280.jpg" className="background" alt=""/>
  )
}
  else if(count===3){
    return (
      <img src="/images/trees-3822149_1280.jpg  "  className="background" alt=""/>
    )
  }
}

export default Background
