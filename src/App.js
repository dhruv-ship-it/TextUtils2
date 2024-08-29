import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import  {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { useState } from 'react';


function App() {
  const[mode,setMode] = useState("light");
  
  const toggleMode = ()=>{

    if(mode==="light"){
      setMode("dark");

      document.body.style.backgroundColor="gray";
      document.body.style.color='white';
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color='black';
      
    }
  }

  

  const router=createBrowserRouter([

    {
      path: "/",
      element: <>
      <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} mode={mode} />
      
      <div className="container mt-5">
      <Textform heading="Enter Your Text To Analyze" mode={mode}/>
      </div>
      
      </>


    },

    {
      path: "/about",
      element: <>
      <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} mode={mode}/>
      
      
      <About mode={mode}/>
      
      </>


    }

  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
