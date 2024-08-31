import React, {useState} from 'react'; 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import Showdata from './components/Show';
import TextForm from './components/TextForm';

function App() {
    const [mode, setMode] = useState('light');

    const toggleMode = () =>{
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042734'
        // document.body.style.color = 'white'

      }else{
        setMode( "light")
        document.body.style.backgroundColor = 'white'
        // document.body.style.color = '#212529'
      }
    }
  return (
    <>
      <Navbar title="TextUtils" home="Home" aboutText ="Utilstext" mode = {mode} toggleMode={toggleMode}/>
      <div className="container my-3 pt-xl-5 ">
      {/* <div className="container m-3 bg-success text-white d-flex flex-column  font-monospace"> */}
        <TextForm heading="Analyze below"  mode = {mode}/>
      <About mode={mode}/>
      </div>
    
    </>
  );
}

export default App;
