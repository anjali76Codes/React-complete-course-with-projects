import React, { useState } from 'react'
import Navbar from './Navbar'
import Form from './Form'
import About from './About'
import Alert from './Alert'

function App() {
  const [mode, setMode] = useState('light')

  const [alert , setAlert]  = useState(null)


  const showAlert = (message,type) =>{
    setAlert({
      msg : message ,
      type: type
    })

// set the duration of the alert display

setTimeout(()=>{
  setAlert(null)
},1500)

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // '#0f053c'
      document.body.style.backgroundColor = '#0f053c'
      showAlert("Dark mode has been enabled" , "success ")

    }
    
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success ")


    }
  };



  return (
   <>
   {/* like this We can pass the props and do changes in the component element  */}
   {/* <Navbar  titleHead = "ANJALI"  title = "Anjali Gupta" />  */}
   <Navbar mode={mode} toggleMode ={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3 " >
   {/* <About/> */}
   <Form     showAlert={showAlert} heading= "Enter the text to analyze"/>
   </div>

   

   </>
  )
}

export default App
