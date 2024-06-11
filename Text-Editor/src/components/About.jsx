import { useState } from 'react'
import React from 'react'

function About(props) {

// const [myStyle , setMyStyle] = useState({
//     color : 'white',
//     backgroundColor : 'black',
// })

// const [btnText , setBtnText] =  useState('Enable Light Mode')


//  const  enableDarkMode = ()=>{
//  if(myStyle.color == 'white'){
//     setMyStyle({
//         color : 'black',
//         backgroundColor : 'white',
//     })
//     setBtnText("Enable  Dark Mode")
//  }
 

//  else {
//     setMyStyle({
//         color : 'white',
//         backgroundColor : 'black'

//     })

//     setBtnText("Enable Light Mode")
//  }
// }



let myStyle ={
   color : props.mode ==='dark'? 'white' : '#042743',
   backgroundColor : props.mode ==='dark'?  '#042743': 'white',
   border : '0.2px solid',
   borderColor :  props.mode ==='dark'?  'magenta': 'blue',
   fontSize : '18px',
   boxShadow : '3px 0px 7px 2px #ccc'
  
}



  return (
    <div className="container" style={myStyle}>
    <h1>About Us</h1>
    <div className="my-3">
    <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle} >
    <div className="accordion-item" style={myStyle}  >
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  style={myStyle}data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
         <strong> Content</strong>
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item" style={myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Description</strong>
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item" style = {myStyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button"  style={myStyle}data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
         <strong>More Info</strong>
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    </div>
    </div>
  
  </div>


  )
}

export default About