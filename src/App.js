import React,{useEffect ,useState } from 'react';
import './App.css';
import Brief from './components/brief-react/Brief';
import Load from './components/loader-react/Load';
import Navbar from './components/nav-react/Navbar';
import Project from './components/projects-react/Project';
import Skills from './components/skills-react/Skills';
import {useWindowSize} from './custom/useWindow';
import { useStateValue} from './context/Theme'
import Contact from './components/contact-react/Contact';
function App() {
 
  const [width, height] = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [win, setWin] = useState(width);
  const [{theme},dispatch] =useStateValue();

  useEffect(() => {
    setTimeout(()=>{
       setLoading(true)
    },2000)
  }, [win,theme])


  return ( loading?
    <div  className= { theme ? "App_light": "App"}>
      
      <Navbar/>
      <div className="brief__div" id= "brief__div">
      <Brief/>
      </div>
    
      <div className=  {theme ?"projects__div_light":"projects__div"} id ="projects">
        <Project/>

      </div>
      <div className={ theme ?"skills__div_light" :"skills__div"}  id ="skills" >
        <Skills/>
      </div>
      <div className={ theme ?"skills__div_light" :"skills__div"}  id ="contact" >
        <Contact/>
      </div>

      <p className={ theme ?"darkend":"lightend"}>This page is built with React and Material Ui</p>
 
    </div>
  :<Load/>)
}

export default App;
