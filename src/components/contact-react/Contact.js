import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import {useStateValue} from '../../context/Theme'
import './Contact.css'

const Contact = () => {
    const [{theme},dispatch] = useStateValue();
    return (
        <div >
            <div className="contact skill">
               <h3> Get in Touch </h3>  
            </div>
            
                <div className="logo">
                    <div>
                    <IconButton href="https://www.linkedin.com/in/sumit-pant-0719a519b/">
                    {theme?
                    <LinkedInIcon fontSize="large" style={{ color:"white"}}/> :<LinkedInIcon fontSize="large"/>}
                    </IconButton>
                    

                    </div>   
                    <div>
                        LinkedIn
                    </div>

                </div>

                
                
           
            
        </div>
    )
}

export default Contact
