import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

export default function Login() {

    return (
        <>
            <span onclick="location.href='welcome.html'" class="close" title="Go Back">&times;</span>
                <form class="modal-content" action="/sing.php">
                  <div class="container">
                    <h1>🤎Log-in to <img src="img/pugmehorisontal.png" width="120" style="vertical-align: middle" />❤️</h1>
                    <br> </br>
                    <label for="firstName "><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" id="username" required />

                    <label for="lastName"><b>Password</b></label>
                    <input type="password" placeholder="It better not be DogLover123" id="password" required />
                    <div class="clearfix">
                      <button type="button" onclick="location.href='welcome.html'" class="cancelbtn">Cancel</button>
                      <button type="submit" class="signupbtn" onclick="login()">Login</button>
                    </div>
                    </div>
                    </form>

          <div class="footer" style="color: #ecdfd6;">
            Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
          </div>

        </>)

}