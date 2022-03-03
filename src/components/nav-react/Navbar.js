import React,{ useState,useLayoutEffect} from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStateValue } from '../../context/Theme';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Tooltip from '@mui/material/Tooltip';
import { changeTheme} from '../../context/action'
const Navbar = () => {
    const [{theme} , dispatch] = useStateValue();
    const[width, setWidth] = useState();
    const [icon, setIcon] = useState(true);
    

 

useLayoutEffect(()=>{
    setWidth(window.innerWidth);
   
    if(width<=776){
        
        document.getElementById("name").style.display="none"
        
    }else{
      document.getElementById("name").style.display="inline"
       document.getElementById("navbar").style.display="block"
  
    }

},[window.innerWidth])
    

    const open=()=>{
     
        if(icon ){
            document.getElementById("nav__items").style.display="block";
            document.getElementById("navbar").style.width="45%";
            setIcon(false);
        }
        else{
            document.getElementById("nav__items").style.display="none";
            document.getElementById("navbar").style.width=0;
            
            setIcon(true);
        }
       
    }
    const opensideBar =()=>{
        if(window.innerWidth <=767 ){
            document.getElementById("nav__items").style.display="none";
            document.getElementById("navbar").style.width=0;
            
            setIcon(true);
        }else{

        }

    }
    const change =()=>{
        
        dispatch(changeTheme());
        opensideBar();

    }
    return (
        <div className="navbar" id ="navbar">
            <div className="navbar__items">
                <div className ="logo">
                    <p className="name" id="name"> SP</p>

                </div>
                  <ul className="nav__items" id ="nav__items">
                    <li className={ !theme ?"list_light" : "list_dark"} onClick ={opensideBar} > <a href ="#projects">Projects</a> </li>
                    <li className={ !theme ?"list_light" : "list_dark"} onClick ={opensideBar} > <a href ="#skills">About</a> </li>
                    <li className={ !theme ?"list_light" : "list_dark"} onClick ={opensideBar} ><a href ="#contact">Contact</a></li>
                    <Tooltip title = { theme? 'Switch to Light Mode' : 'Switch to dark Mode'}>
                    <IconButton onClick ={change} >
                        {theme?<LightModeIcon style ={{ color :'white'}}/> : <NightlightIcon/>}
                    </IconButton>
                    </Tooltip>
                  </ul>
                  <div className="expand">

                  <IconButton onClick={open} >
                      {icon?<MenuIcon/> : <CloseIcon/> }
                  </IconButton>
                  </div>

            </div>
            
        </div>
    )
}

export default Navbar
