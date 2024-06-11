import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar'
import Form from './components/Form'
import About from './components/About'
import Alert from './components/Alert'

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
          //  document.title = 'TextUtils - Dark mode'
        break;
      case 'light':
        backgroundColor = 'white'
        message = 'Light mode has been enabled'
        document.body.style.color = 'black'
          //  document.title = 'TextUtils - light mode'

        break;
      case 'light blue':
        backgroundColor = '#c6fcff'
        message = 'Light blue mode has been enabled'
        document.body.style.color = 'purple'
          //  document.title = 'TextUtils - light blue mode'

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

  
   <Router>
        <Navbar mode={mode} toggleMode={toggleMode} toggleModes={toggleModes} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route  exact path="/about" element={<About mode={mode}  />} />
            
            {/* check for the exact matching */}
            <Route  exact path="/"
             element={<Form showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}



{/* <Form     showAlert={showAlert} heading= "Enter the text to analyze */}

export default App
