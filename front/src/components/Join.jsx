import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Join() {
    const navigate = useNavigate();

    return (
        <>
        <div className="content">
          <div className="getc">
              <img id="image" style={{height:"300px"}} src={require("./img/pugmelogopng.png")} onclick="changeImage()"/>
              <h1 className="title"><b>Welcome to <img src={require("./img/pugmehorisontal.png")} width="120" style={{verticalAlign:"middle"}}/></b> </h1>
              <h2 className="morestaff">
                <p><b>The fastest growing Dog Dating Site on the web! 🌐</b></p>
                <p><b>Handreds of dogs from all around Athens! Ready to meet your own dog!🐕</b></p>
                <br></br>
                <div className="wrapper">
                    <a className="okok" href="#"><span>🤎Join Now!❤️</span></a>
                </div>
                <div>
                    <a className="login" onClick={navigate("/login")} href="#"><u>Already a User, Loging here and date away!</u></a>
                </div>



                <div className="footer" style={{color:"#ecdfd6"}}>
                    Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
                </div>
                </h2>
        
            </div>
          </div>
        </>)
}