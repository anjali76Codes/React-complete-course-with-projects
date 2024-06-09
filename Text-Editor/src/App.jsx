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
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success ")


    }
  };




  const toggleModes = (mode) => {
    setMode(mode);
    let backgroundColor;
    let message;

    switch (mode) {
      case 'dark':
        backgroundColor = '#0f053c'
        message = 'Dark mode has been enabled'
        document.body.style.color = 'white'
        break;
      case 'light':
        backgroundColor = 'white'
        message = 'Light mode has been enabled'
        document.body.style.color = 'black'

        break;
      case 'light blue':
        backgroundColor = '#c6fcff'
        message = 'Light blue mode has been enabled'
        document.body.style.color = 'purple'

        break;
      default:

        backgroundColor = 'white'
        message = 'Light mode has been enabled'
        document.body.style.color = 'black'

    }


    // this set the color as a whole background color
    document.body.style.backgroundColor = backgroundColor
    showAlert(message, 'success')

  }





  return (
   <>
   {/* like this We can pass the props and do changes in the component element  */}
   {/* <Navbar  titleHead = "ANJALI"  title = "Anjali Gupta" />  */}
   <Navbar mode={mode} toggleMode ={toggleMode}  toggleModes = {toggleModes}/>
   <Alert alert={alert}/>
   <div className="container my-3 " >
   {/* <About/> */}
   <Form     showAlert={showAlert} heading= "Enter the text to analyze"/>
   </div>

   </>
  )
}

export default App
