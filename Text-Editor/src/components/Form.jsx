import React from 'react'
import { useState } from 'react'


function Form(props) {

  let [text , setText] = useState(" ")
  const [bold , setBold] = useState(false)

const convertUppercase =(event)=>{

  console.log("Uppercase btn clicked" , +text)
  let newText = text.toUpperCase()
  // setText("You  have  clicked  on handleOnChange")
  setText(newText)

  // alert

  props.showAlert("Converted to Uppercase !" , "success ")

}



const handleOnChange =(event)=>{
  console.log("Handle Onchange Was clicked")
  setText(event.target.value)


}



const convertLowercase = ()=>{
  console.log("Lowercase btn clicked")
  let newText = text.toLowerCase()
  setText(newText)

  // alert

  props.showAlert("Converted to lowercase !" , "success ")


}



const clearAll = () =>{
  let clearText = ""
  setText(clearText)

  // alert

  props.showAlert("Cleared All text !" , "success ")

}


const boldText = ()=>{
  setBold(!bold)
    }


  {/* text = "Enter text 1" // this is invalid we can't change here directly for doing changes we need to use setText  -> show an error */}
  
  // setText = "Enter the text1"  // not throw an error 


    return (
    <>
       <div className="container" >
      <h1 >{props.heading}</h1>
        <div className="mb-3">

          <textarea  style={{  backgroundColor: props.mode === 'dark' ? '#0f053c' : 'light' , fontWeight: bold ? 'bold' : 'normal' , color: props.mode==='light' ? 'purple' :  'magenta' ,fontSize: '20px' ,fontFamily: 'cursive' }} 
            className="form-control" 
            value={text} 
            onChange={handleOnChange} 
            id="textarea" 
            rows="8" >
            </textarea>


        </div>
        <button  disabled= {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={convertUppercase}>
          Convert to Uppercase
        </button>
        <button  disabled= {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={convertLowercase}>
          Convert to Lowercase
        </button>
        <button  disabled= {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={clearAll}>
          Clear All
        </button>

        <button  disabled= {text.length ===0} className="btn btn-primary mx-1 my-1" onClick={boldText}>
         {bold ? 'UnBold' : 'Bold'}
        </button>
      </div>



      <div className="container m-3" >
        <h2>Your Text Summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p  style={{ fontWeight: bold ? 'bold' : 'normal' ,  color: props.mode==='light' ? 'purple' :  'magenta' ,fontSize: '20px' ,fontFamily: 'cursive' }}>{text} </p>
      </div>
    </>
  );
}

export default Form;