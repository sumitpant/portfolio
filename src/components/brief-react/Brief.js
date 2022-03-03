import React from 'react';
import Avatar from '@mui/material/Avatar';
import me from '../../img/me.jpg'
import './Brief.css'


const Brief = () => {

    return (
        <div className="brief" id ="brief__div">
            <div className="img">
                <Avatar alt="Remy Sharp" src={me}
                   sx={{ width: 350, height: 350 }}
                   alt="SP"
                />
            </div>
            <div className="intro">
                <div>
                    <h3 className="name">Sumit Pant ,</h3>
                    <h1 className="work">  web </h1>
                    <h1 className="work">  Developer</h1>
                    <p className="short"> I am a web developer ,with a demonstrated history of working with Information Technology and Services.
                     Strong Engineering professional with a Bachelor of Technology focused in
                    Computer Science and Engineering .
                    </p>  
                </div>
            </div>
        </div>
    )
}

export default Brief
