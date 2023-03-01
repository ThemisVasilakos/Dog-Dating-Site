import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios';
var key = require("./backkey.json");

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

      if(localStorage.getItem('token')){
      var token = JSON.parse(localStorage.getItem('token'))
      console.log('token exists')
      navigate("/")}
      else{
      const postData = () => {
        let body = {
          Username: username,
          Password: password
        }
        axios.post(key + "login", body, {
        headers: {
          'Content-Type': 'application/json',
        }
        })
        .then((res)=>{
          var token = res.data.token
          localStorage.setItem("token",JSON.stringify(token))
          console.log('token created')
          navigate("/")
        })
        .catch((err)=>{
          console.log(err);
          alert(err)
        })
      }

      function join() {
          navigate("../join")
      }

      return (
          <>
              {/* <span onclick="location.href='welcome.html'" class="close" title="Go Back">&times;</span> */}
                  <form class="modal-content" >
                    <div class="container">
                      <h1>🤎Log-in to <img src={require("../components/img/pugmelogopng.png")} width="120" style={{verticalAlign: "middle"}} />❤️</h1>
                      <br></br>
                      <label for="firstName "><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" id="username" required onChange={e=> setUsername(e.target.value)} />

                      <label for="lastName"><b>Password</b></label>
                      <input type="password" placeholder="It better not be DogLover123" id="password" required onChange={e => setPassword(e.target.value)}/>
                        <button type="submit" class="signupbtn" onclick={postData}>Login</button>
      
                      </div>
                      </form>

            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>

          </>)
  }
}