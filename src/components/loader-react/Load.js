import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './Load.css'
const Load =()=>{
    return (
    <div className="loader">
     <Loader
        type="ThreeDots"
        color="white"
        height={100}
        width={100}
        timeout={3000} 
      />

    </div>

    );
}

 export default Load;