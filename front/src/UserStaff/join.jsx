import {useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

var key = require("./backkey.json");

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

    const navigate = useNavigate();


    const postData = () => {
        let body = {
          Username: username,
          Password: password,
            Email: email,
            PhoneNumber: phoneNumber,
            FirstName: firstName,
            LastName: lastName,
            DogName: dogName,
            Breed: breed,
            Age: age,
            DogBio: dogBio
        }
        console.log(body)
        axios.post(key + "join", body, {
        headers: {
          'Content-Type': 'application/json',
        }
        })
        .then((res)=>{
            console.log(res)
          navigate("/")
        })
        .catch((err)=>{
          console.log(err);
          alert(err)
        })
      }

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
                    <label for="dogBio"><b>Dog Bio</b></label>
                        <br/>
                        <textarea type="text" rows="4" cols="200" placeholder="Enter Dog Bio" id="dogBio" required onChange={e => setDogBio(e.target.value)}/>
                    <br></br>
                     
                        <button type="submit" class="signupbtn" onclick={postData}>Join</button>
                    

                    
      
                      </div>
                      </form>

            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
        </>
    )
}