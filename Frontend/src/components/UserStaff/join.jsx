import {useNavigate } from "react-router-dom";
import { useState } from "react";
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader"; //https://upload.io/dashboard/files

export default function Join() {
    const [username, setUsername] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [phoneNumber, setPhoneNumber] = useState(undefined);
    const [firstName, setFirstName] = useState(undefined);
    const [lastName, setLastName] = useState(undefined);
    const [dogName, setDogName] = useState(undefined);
    const [breed, setBreed] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [dogBio, setDogBio] = useState(undefined);
    const [images, setImages] = useState(undefined);
    const [role, setRole] = useState("ROLE_USER");

    const navigate = useNavigate();
    const uploader = Uploader({ apiKey: "public_kW15bDiDndfa2nThQuZWRpbA7KUu" });


    const postData = async (e) =>{
      e.preventDefault();
      var UserOption  = document.getElementById('sex').value;
      //setDogSex(UserOption)
      console.log(images)
      try {
        let res = await fetch("http://localhost:8080/pugme/register", {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
              username: username,
              password: password,
              email: email,
              phoneNumber:phoneNumber,
              role:role,
              firstName:firstName,
              lastName:lastName,
              dogName,dogName,
              breed:breed,
              age:age,
              dogSex:UserOption,
              dogBio:dogBio,
              dogPhoto:images

          }),
        });
        if (res.status === 200) {
          alert("User created")
          navigate('/login');
        } else {
          alert("Error")
        }
      } catch (err) {
        console.log(err);
      }
  }

    return(
        <>
        <form class="modal-content" >
                    <div class="container">
                      <h1>🤎Join <img src={require("../../img/pugmelogopng.png")} width="120" style={{verticalAlign: "middle"}} />❤️</h1>
                      <br></br>
                      <label for="firstName "><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" id="username" required onChange={e=> setUsername(e.target.value)} /><br></br>

                      <label for="lastName"><b>Password</b></label>
                      <input type="password" placeholder="It better not be DogLover123" id="password" required className="passimp" onChange={e => setPassword(e.target.value)}/>
                      <input type="checkbox" onClick={showpass}/>Show Password
                      <br />
                      <label for="firstName "><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" id="firstName" required onChange={e=> setFirstName(e.target.value)} />
                    
                    <label for="lastName"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" id="lastName" required onChange={e => setLastName(e.target.value)}/>
                    <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" id="email" required onChange={e => setEmail(e.target.value)}/>
                    <label for="phoneNumber"><b>Phone Number</b></label>
                        <input type="text" placeholder="Enter Phone Number" id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)}/>
                    <label for="dogName"><b>Dog Name</b></label>
                        <input type="text" placeholder="Enter Dog Name" id="dogName" required onChange={e => setDogName(e.target.value)}/>
                    <label for="breed"><b>Breed</b></label>
                        <input type="text" placeholder="Enter Breed" id="breed" required onChange={e => setBreed(e.target.value)}/>
                    <label for="age"><b>Age</b></label>
                        <input type="text" placeholder="Enter Age" id="age" required onChange={e => setAge(e.target.value)}/>
                  
                  <label for="sex"><b>Dog Sex: </b></label>

                    <select name="sex" id="sex" >
                      <option value="male">Male &#9794;</option>
                      <option value="female">Female &#9792;</option>
                    </select>

                    <br></br>

                    <label for="dogBio"><b>Dog Bio:</b></label>
                        <br/>
                        <textarea type="text" rows="4" style={{width:'100%'}} placeholder="Enter Dog Bio" id="dogBio" required onChange={e => setDogBio(e.target.value)}/>
                    <br></br>
                    <UploadButton uploader={uploader}
                        options={{ multi: true }}
                        onComplete={files => setImages(files.map(x => x.fileUrl).join(","))}>
                        {({onClick}) =>
                          <span className="custom-file-input" onClick={onClick}>
                            {/* Upload 3 images of your dog... */}
                          </span>

                        }
                    </UploadButton>
                    <br></br>
                    <a href="login" style={{textDecoration: "none",color:"fff"}}><u>Login here!</u></a>
                      <br></br>
                        <button type="submit" class="signupbtn" style={{width:'100%'}} onClick={postData}>Join</button>
               
                      </div>
                      </form>

            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
        </>
    )
}

function showpass() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}