```javascript
// State Variables
let [text , setText] = useState(" ");
const [bold , setBold] = useState(false);
const [btnText , setBtnText] =  useState('Enable Light Mode');



// Functions

// 1. Convert to Uppercase
const convertUppercase = (event) => {
  console.log("Uppercase btn clicked", text);
  let newText = text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase !", "success");
};



// 2. Convert to Lowercase
const convertLowercase = () => {
  console.log("Lowercase btn clicked");
  let newText = text.toLowerCase();

  props.showAlert("Converted to lowercase !", "success");
};




// 3. Clear All
const clearAll = () => {
  let clearText = "";
  setText(clearText);
  props.showAlert("Cleared All text !", "success");
};



// 4. Toggle Bold Text
const boldText = () => {
  setBold(!bold);
};




// 5. Handle Input Change
const handleOnChange = (event) => {
  console.log("Handle OnChange Was clicked");
  setText(event.target.value);
};



Logics ::
 to calculate the total words -->
{text.split(' ').length}

to calculate the total no . of characters -->
 {text.length}




// 7. Capitalize First Letter
const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};




// 8. Enable Dark or Light Mode
const enableDarkMode = () => {
  if (myStyle.color == 'white') {
    setMyStyle({
      color: 'black',
      backgroundColor: 'white',
    });
    setBtnText("Enable  Dark Mode");
  } else {
    setMyStyle({
      color: 'white',
      backgroundColor: 'black'
    });
    setBtnText("Enable Light Mode");
  }
};






// 9. Toggle Modes Selection
const toggleModes = (mode) => {
  setMode(mode);
  let backgroundColor;
  let message;

  switch (mode) {
    case 'dark':
      backgroundColor = '#0f053c';
      message = 'Dark mode has been enabled';
      document.body.style.color = 'white';
      break;
    case 'light':
      backgroundColor = 'white';
      message = 'Light mode has been enabled';
      document.body.style.color = 'black';
      break;
    case 'light blue':
      backgroundColor = '#c6fcff';
      message = 'Light blue mode has been enabled';
      document.body.style.color = 'black';
      break;
    default:
      backgroundColor = 'white';
      message = 'Light mode has been enabled';
      document.body.style.color = 'black';
  }

  document.body.style.backgroundColor = backgroundColor;
  showAlert(message, 'success');
};





// 10. Alert with Timeout
const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setAlert(null);
  }, 1500);
};
