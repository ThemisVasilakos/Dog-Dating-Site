import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

      if(localStorage.getItem('token')){
      console.log('token exists')
      navigate("/")}
     
      const postData = async (e) => {
        e.preventDefault()
        let body = {
          username: username,
          password: password
        }
        axios.post(" http://localhost:8080/pugme/login", body, {
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
                      <h1>🤎Log-in to <img src={require("../../img/pugmelogopng.png")} width="120" style={{verticalAlign: "middle"}} />❤️</h1>
                      <br></br>
                      <label for="firstName "><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" id="username"  required onChange={e=> setUsername(e.target.value)} />

                      <label for="lastName"><b>Password</b></label>
                      <input type="password" placeholder="It better not be DogLover123" id="password"  required onChange={e => setPassword(e.target.value)}/>
                      <input type="checkbox" onClick={showpass}/>Show Password
                      <br />
                      
                      <a href="join" style={{textDecoration: "none",color:"fff"}}><u>Sign up here!</u></a>
                      <br></br>
                        <button type="submit" class="signupbtn" onClick={postData}>Login</button>

                        
                      </div>
                      
                      </form>
                      
            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>

          </>)
  
}

function showpass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}