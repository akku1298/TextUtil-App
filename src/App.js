
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode=()=>{
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
   <>
   <Router>

  <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert}></Alert>
  <div className="container my-3">
  <Routes>
  <Route exact path="/" element={<TextForm heading="Enter the text to analyze below"  showAlert={showAlert} mode={mode}></TextForm>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          
  </Routes>
 
 
 
  </div>
 </Router>
 
 
   </>
  );
}

export default App;
