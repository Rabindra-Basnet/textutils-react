import React, { useState } from 'react';

import './App.css';


import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {

  RouterProvider as Switch,
  Route,
  Router,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042734'
      // document.body.style.color = 'white'
      showAlert("Dark mode has enabled", "success")
      document.title = "TextUtils - DarkMode"
      // blinking text
      // setInterval(() => {
      //   document.title = "TextUtils manipulates text"
      // }, 200);
      // setInterval(() => {
      //   document.title = "TextUtils helps to make format"
      // }, 150);

    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = '#212529'
      showAlert("Light mode has enabled", "success")
      document.title = "TextUtils - LightMode"

    }
  }
  return (
    <>
      <Navbar title="TextUtils" home="Home" aboutText="Utilstext" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} className='my-5' />
      <div className="container my-3 pt-xl-5 ">
        <Router>
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Analyze below" mode={mode} />
            </Route>
          </Switch>
        </Router>
        {/* <Showdata /> */}
      </div>

    </>
  );
}

export default App;
