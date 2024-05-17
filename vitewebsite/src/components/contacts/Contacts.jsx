import React from 'react'
import "./Contacts.css"


function Contacts(){
    const numbers=[
{
id:1,
image:"/images/istockphoto-1496615764-612x612.jpg",
name:"Jessica",
origin:"Australia",
basicInfo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  ",
tell:"+98 634 243"
},
{
id:2,
image:"/images/image.jpg ",
name:"Alfred",
origin:"United States",
basicInfo:" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  ",
tell:"+ 78 345 2134"
},
];


  return (
    <div  className="contacts">
      <h1>Contacts</h1>
<div className="section">
{
    numbers.map((item)=><li className="contactItem" key={item.id}>
        <img src={item.image} alt="" />
        <h1>{item.name}</h1>
        <h2>{item.origin}</h2>
        <p>{item.basicInfo}</p>
        <h3>{item.tell}</h3>
    </li>)
}
</div>

    </div>
  )
}

export default Contacts;
