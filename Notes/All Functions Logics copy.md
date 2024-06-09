 State variables :

let [text , setText] = useState(" ")
const [bold , setBold] = useState(false)
const [btnText , setBtnText] =  useState('Enable Light Mode')
 
 
 1. convert to uppercase :

 const convertUppercase =(event)=>{
  console.log("Uppercase btn clicked" , +text)
  let newText = text.toUpperCase()
  props.showAlert("Converted to Uppercase !" , "success ")

}

2. convert to lowercase :

const convertLowercase = ()=>{
  console.log("Lowercase btn clicked")
  let newText = text.toLowerCase()
  setText(newText)
  props.showAlert("Converted to lowercase !" , "success ")

}


3. Clear All :
const clearAll = () =>{
  let clearText = ""
  setText(clearText)
  props.showAlert("Cleared All text !" , "success ")

}


4. Bold Text : 

const boldText = ()=>{
  setBold(!bold) 
  
   }


 5. Handle the event : 

 const handleOnChange =(event)=>{
  console.log("Handle OnChange Was clicked")
  setText(event.target.value)

}


Logics ::
 to calculate the total words -->
{text.split(' ').length}

to calculate the total no . of characters -->
 {text.length}


7. to capitalize first letter :

const capitalize = (word)=>{
 const lower = word.toLowerCase()
 return lower.charAt(0).toUpperCase()  +  lower.slice(1) 
 
}



8. Enable dark or light mode :

const  enableDarkMode = ()=>{
 if(myStyle.color == 'white'){
    setMyStyle({
        color : 'black',
        backgroundColor : 'white',
    })
    setBtnText("Enable  Dark Mode")
 }
 
 else {
    setMyStyle({
        color : 'white',
        backgroundColor : 'black'
    })
    setBtnText("Enable Light Mode")
 }
}




9. Enable modes selection :

const toggleModes = (mode) => {
    setMode(mode);
    let backgroundColor;
    let message;

    switch (mode) {
      case 'dark':
        backgroundColor = '#0f053c';
        message = 'Dark mode has been enabled';
        document.body.style.color = 'white'
        break;
      case 'light':
        backgroundColor = 'white';
        message = 'Light mode has been enabled';
        document.body.style.color = 'black'

        break;
      case 'light blue':
        backgroundColor = '#c6fcff';
        message = 'Light blue mode has been enabled';
        document.body.style.color = 'black'

        break;
      default:

        backgroundColor = 'white';
        message = 'Light mode has been enabled';
        document.body.style.color = 'black'

    }

    // this set the color as a whole background color
    document.body.style.backgroundColor = backgroundColor;
    showAlert(message, 'success');

  }




  10 . Alert and Timeout for that :

  
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