import React, { useState, useEffect } from "react";
import { DogCard } from "./tools/dogcard";
import { menoudaki } from "./tools/menu";

export default function Main() {
  //Token for user authentication
  var token = window.localStorage.getItem('token').replace(/["]/g,' ')

  //Dog info
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [dogBio, setBio] = useState("");
  const [shownUser, setShownUser] = useState("");
  const [images, setImages] = useState("");
  const [refresh,setRefresh]=useState(0);

  // Use Effect for fetching new matches
  useEffect(() => {
    fetch(` http://localhost:8080/pugme/match`, {
            headers: {
                "Authorization": 'Bearer'+token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "GET"        
          }).then((res) => res.json())
          .then(page => {
            const {
                dogName,
                breed ,
                age,
                dogBio,
                username,
                dogPhoto
            } = page;
            setDogName(dogName)
            setBreed(breed)
            setAge(age)
            setBio(dogBio)
            setShownUser(username)
            setImages(dogPhoto)
          })
  
  }, [refresh]);

  //Like or Dislike fetched user
  const postData = async(e) =>{
    try {
      let res = await fetch(`http://localhost:8080/pugme/match?username=` +  shownUser + `&liked=` + e, {
        headers: {
            "Authorization": 'Bearer'+token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST"
      });
        let resJson = await res.json();
        if (res.status === 200) {
              setRefresh(refresh+1);
        } else {
            alert("Error")
        }
        } catch (err) {
        console.log(err);
        }
  }

  //Report User
  const reportUser = async(e)=>{
    
    const res = fetch(`http://localhost:8080/pugme/report?username=` +  shownUser,
    { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer'+token
        }
    
    }).catch(err => console.log("Back End Error:" + err)).then(res => res.json()).then(data => {
      postData("no")
    });
  }
 
  //Check if the user has available matches
  if(dogName==null){
    return (
      <>
      {menoudaki()}
      <div className="lkartela"><div class="bone">No Matches left..</div></div>
    </>
    )
  }
  else{
    return (
      <>
        {menoudaki()}
        <div><>{DogCard(dogName,breed,age,dogBio,images, shownUser)}</>  </div>
        {<><div class="kardoylopragma"><div className="tooltip"><span className="karidia" style={{color:"#4c4345"}} onClick={() => {postData("no")}} >&#10084;<span class="tooltiptext">Dislike</span></span></div><div className="tooltip"><span onClick={() => {postData("yes")}} className="karidia" style={{color:"#dc80b1"}}>&#10084;<span class="tooltiptext">Like</span></span></div></div></>  }
        
        {<div class="reportFlag"><h1 class="report"><span onClick={() => {reportUser()}}> &#9873;</span></h1></div>}
        
        <div className="footer" style={{color:"#ecdfd6"}}>
                      Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
          </div>
      </>
    );
  }

}
