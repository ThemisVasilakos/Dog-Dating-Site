import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Join() {

    return (
        <>
        <div class="content">
          <div class="getc">
              <img id="image" style="height: 300px;" src="img/pugmelogopng.png" onclick="changeImage()"/>
              <h1 class="title"><b>Welcome to <img src="img/pugmehorisontal.png" width="120" style="vertical-align: middle"/></b> </h1>
              <h2 class="morestaff">
                <p><b>The fastest growing Dog Dating Site on the web! 🌐</b></p>
                <p><b>Handreds of dogs from all around Athens! Ready to meet your own dog!🐕</b></p>
                <br></br>
                <div class="wrapper">
                    <a class="okok" href="#" onclick="document.getElementById('id01').style.display='block'"><span>🤎Join Now!❤️</span></a>
                </div>
                <div>
                    <a class="login" href="login.html"><u>Already a User, Loging here and date away!</u></a>
                </div>
                <div class="footer" style="color: #ecdfd6;">
                    Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
                </div>
                </h2>
        
            </div>
          </div>
        </>)
}