import React from 'react'
import "./Services.css"
import { SERVICES } from '../../SERVICE'

function Services() {

const members=[
    {
id:1,
image:"/images/1702321326472.jpeg",
name:"Anne  SA",
origin:"Nigeria",
tell:"+ 234 345 467"
},
{
id:1,
image:"/images/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAtam9iNTgzXzEucG5n.webp",
 name:"Jackson Rami",
origin:"Canada",
 tell:"+ 87 235 197"
 },

 {
id:1,
image:"/images/image.jpg",
name:"Alfred",
origin:"United States",
tell:"+78 345 2134"
},
{
id:1,
image:"/images/istockphoto-1496615764-612x612.jpg",
name:"Jessica",
origin:"Australia",
tell:"+98 634 243"
},

];
return (
    <div className="services">
      <h1>Services</h1>
      <h3>What we offer</h3>
<div className="offers">
{
    SERVICES.map((item)=><li className="serviceItem" key={item.id}>
        <img src={item.image} alt="" />
        <h2>{item.title}</h2>
        <p>{item.info}</p>
    </li>)
}
</div>
<h2>Our Team Members</h2>
<div className="ourTeam">
{
    members.map((item)=><li className="member" key={item.id}>
        <img src={item.image} alt="" />
        <nav>
        <h1>{item.name}</h1>
        <p>{item.origin}</p>
        <h3>{item.tell}</h3>
        </nav>
      
    </li>)
}
</div>
    </div>
  )
}

export default Services
