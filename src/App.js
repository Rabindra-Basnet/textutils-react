
import './App.css';
import Navbar from './components/Navbar';
// import Showdata from './components/Show';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" aboutText ="Utilstext"/>
      {/* <div className="container my-3 p-0"> */}
      <div className="container m-3 bg-success text-white d-flex flex-column  font-monospace">
        <TextForm heading="Analyze below"/>
      </div>
      

      


    </>
  );
}

export default App;
