import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
// import { ImgurClient } from 'imgur'; //https://www.npmjs.com/package/imgur

// const client = new ImgurClient({
//     clientId:"d214bb7c72bbb69",
//     clientSecret: "1010e37a33598b9d5db1076441d31aa05411bbc8",
//     refreshToken: process.env.REFRESH_TOKEN,
//   });


import { Uploader } from "uploader";
import { UploadButton } from "react-uploader"; //https://upload.io/dashboard/files

// Initialize once (at the start of your app).
const uploader = Uploader({ apiKey: "public_kW15bDiDndfa2nThQuZWRpbA7KUu" }); // Your real API key.

export default function Test() {
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [file, setFile] = useState();

    const navigate = useNavigate();


    return(
        <>
        <form class="modal-content" >
                    <div class="container">
                      <h1>🤎Join <img src={require("../components/img/pugmelogopng.png")} width="120" style={{verticalAlign: "middle"}} />❤️</h1>
                      <br></br>
                      <label for="firstName "><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" id="username" required onChange={e=> setUsername(e.target.value)} />

                      <label for="lastName"><b>Password</b></label>
                      <input type="password" placeholder="It better not be DogLover123" id="password" required onChange={e => setPassword(e.target.value)}/>


                      <UploadButton uploader={uploader}
                options={{ multi: true }}
                onComplete={files => setFile(files.map(x => x.fileUrl).join(","))}>
    {({onClick}) =>
      <button onClick={onClick}>
        Upload a file...
      </button>

    }
  </UploadButton>
  <button onClick={console.log(file)}>log</button>
                     
                      </div>
                      </form>

            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
        </>
    )
}