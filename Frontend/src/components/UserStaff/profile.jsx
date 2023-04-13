import {useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { menoudaki } from "../tools/menu";

export default function User() {

    var token = window.localStorage.getItem('token').replace(/["]/g,' ')

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dogName, setDogName] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);
    const [dogBio, setDogBio] = useState("");
    const [Loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        if (Loading == true){getData();}
      }, [Loading]);


    const postData = async(e) => {
        e.preventDefault()
        try {
            let res = await fetch(`http://localhost:8080/pugme/profile`, {
              headers: {
                  "Authorization": 'Bearer'+token,
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              method: "PUT",
              body: JSON.stringify({
                username: username,
                email: email,
                phoneNumber: phoneNumber,
                firstName: firstName,
                lastName: lastName,
                dogName: dogName,
                breed: breed,
                age: age,
                dogBio:dogBio
              }),
            });
              let resJson = await res.json();
              if (res.status === 200) {
                
              } else {
                  alert("Error")
              }
              } catch (err) {
              console.log(err);
              }
        setLoading(true);
      }

      var getData = () => {

        fetch(`http://localhost:8080/pugme/profile`, {
            headers: {
                "Authorization": 'Bearer'+token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"        
          }).then((res) => res.json())
          .then(page => {
            const {
                username,
                email,
                firstName,
                lastName,
                phoneNumber,
                breed,
                dogBio,
                age,
                dogName
            } = page;
            setLoading(false)
            setUsername(username)
            setEmail(email)
            setFirstName(firstName)
            setLastName(lastName)
            setPhoneNumber(phoneNumber)
            setBreed(breed)
            setDogBio(dogBio)
            setAge(age)
            setDogName(dogName)
          })
      }

    return(
        <>
        {menoudaki()}
        {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  :
        <form class="modal-content" >
                    <div class="container">
                      <h1>🤎Your Profile at <img src={require("../../img/pugmelogopng.png")} width="120" style={{verticalAlign: "middle"}} />❤️</h1>
                      <br></br>
                      <label for="firstName "><b>Username</b></label>
                      <input type="text" placeholder="Enter Username" id="username" value={username} required onChange={e=> setUsername(e.target.value)} />

                      <label for="firstName "><b>First Name</b></label>
                        <input type="text" placeholder="Enter First Name" id="firstName" value={firstName} required onChange={e=> setFirstName(e.target.value)} />
                    
                    <label for="lastName"><b>Last Name</b></label>
                        <input type="text" placeholder="Enter Last Name" id="lastName" value={lastName} required onChange={e => setLastName(e.target.value)}/>
                    <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" id="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                    <label for="phoneNumber"><b>Phone Number</b></label>
                        <input type="text" placeholder="Enter Phone Number" value={phoneNumber} id="phoneNumber" required onChange={e => setPhoneNumber(e.target.value)}/>
                    <label for="dogName"><b>Dog Name</b></label>
                        <input type="text" placeholder="Enter Dog Name" id="dogName" value={dogName} required onChange={e => setDogName(e.target.value)}/>
                    <label for="breed"><b>Breed</b></label>
                        <input type="text" placeholder="Enter Breed" id="breed" required value={breed} onChange={e => setBreed(e.target.value)}/>
                    <label for="age"><b>Age</b></label>
                        <input type="text" placeholder="Enter Age" id="age" required value={age} onChange={e => setAge(e.target.value)}/>
                    <label for="dogBio"><b>Dog Bio</b></label>
                        <br/>
                        <textarea type="text" rows="4" style={{width:'100%'}} placeholder="Enter Dog Bio" value={dogBio} id="dogBio" required onChange={e => setDogBio(e.target.value)}/>
                    <br></br>
                     
                        <button type="submit" class="signupbtn" style={{width:'100%'}} onClick={postData}>Edit</button>
      
                      </div>
                      </form>}

            <div class="footer" style={{color:"#ecdfd6"}}>
              Made By <a class="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a class="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
        </>
    )
}