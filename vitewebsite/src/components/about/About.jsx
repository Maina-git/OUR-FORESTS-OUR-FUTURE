import React from 'react'
import "./About.css"
import { images } from '../../IMAGES';


function About() {
  return (
    <div className="about">
<h1>Our Events</h1> 
<p>
These slogans aim to reflect a sense of
environmental responsibility and commitment
to sustainable practices while also highlighting
the business's core services and vision
for the future.
</p>
<div className="items">
    {
    images.map((item)=><li className="listitem" key={item.id}>
<img src={item.image} alt="" />
<h1>{item.text}</h1>
    </li>)
}
</div>     
</div>
  )
}
export default About;
