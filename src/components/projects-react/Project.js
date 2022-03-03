import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Project.css'
import { IconButton } from '@mui/material';
import {useStateValue} from '../../context/Theme'


const Project = () => {
   const [{theme},dispatch] = useStateValue();
    return (
        <div className="skills">
         <div className="skills__name">
                <p className="skill">Projects</p>
            </div>
            <div className="projects__num">
                <div className="project1">
                    <h3 className={!theme?"lighth3":"darkh3"}>Covid Tracker</h3>
                    <p className="project_desc"> An interactive React based application for consuming public Api's to display data in both graphical and tabular format.                        </p>
                </div>
                <div className="project1">
                    <h3 className= {!theme?"lighth3":"darkh3"}>Job Tracker</h3>
                    <p className="project_desc"> An MERN based application where job creator can create jobs and run jobs
                        and applicant can apply for the created jobs.
                        Full application supports CRUD functionality with api's created in express js 
                        with mongodb as database.
                        JWT is used for authentication.
                    </p>
                </div>
                <div className="project1">
                    <h3 className= {!theme?"lighth3":"darkh3"}>Amazon Clone</h3>
                    <p className="project_desc"> Amazon Clone implemented with React and Firebase. User can create account and login with gmail id,
                    With cart to add and remove items . Integrated Stripe for payment.
                    </p>
                </div>
                
                <div className="project1">
                <p className="project_desc" > 
                   And many more . Take a look...
                    </p>
                    
                   
                </div>
                
               
                <div className ="links">
              
                    
                        <IconButton href="https://github.com/sumitpant">
                            {theme?
                         <GitHubIcon style={{ color:"white"}} fontSize="large"/>: <GitHubIcon fontSize="large"/>}
                         </IconButton>

                         
                </div>


            </div>
            
        </div>
    )
}

export default Project
