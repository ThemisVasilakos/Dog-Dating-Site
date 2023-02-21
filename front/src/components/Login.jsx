import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

let token;

const baseurl = "http://localhost:8080/pugme/";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () =>{

    if(window.localStorage.getItem('token')){
        token = JSON.parse(window.localStorage.getItem('token'))
        console.log('token exists')
    }else{
        const user = {
            username: username.value,
            password: password.value
        }
        const response = await fetch(baseurl + 'login',{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }

    })

    const newtoken = await response.json()
    console.log(newtoken.token)
    token = newtoken
    window.localStorage.setItem("token",JSON.stringify(token.token))
    console.log('token created')
    window.open("mainpage.html","_self")
    }

    
}
  

  return (
    <>
    <div>
    <a onClick={navigate("/join")} className="close" title="Go Back">&times;</a>
                <form className="modal-content" action="/sing.php">
                  <div className="container">
                    <h1>🤎Log-in to <img src={require("./img/pugmelogopng.png")} width="120" style={{verticalAlign:"middle"}}/>❤️</h1>
                    <br />
                    <label for="Username"><b>Username</b></label>
                    <br />
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Email"
                    />
                    <br />

                    <label for="Password"><b>Password</b></label>
                    <br />
                    <input
                      type="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    <div className="clearfix">
                      <button type="button" onClick={navigate("/join")} className="cancelbtn">Cancel</button>
                      <button type="submit" className="signupbtn" onClick={login}>Login</button>
                    </div>
                </div>
                </form>
    </div>
    <div className="footer" style={{color:"#ecdfd6;"}}>
            Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
          </div>
      </>
  );
}
