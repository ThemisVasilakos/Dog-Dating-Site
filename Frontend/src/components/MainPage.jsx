import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DogCard } from "./tools/dogcard";
import { menoudaki } from "./tools/menu";
import Popup from 'reactjs-popup';
import { error } from "jquery";

export default function Main() {

  var token = window.localStorage.getItem('token').replace(/["]/g,' ')
  
  //Check if a user is logged in
  useEffect( () =>{

    if(!window.localStorage.getItem('token')){
        navigate("/welcome")
    }
      
    },[])

  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //Dog info
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [dogBio, setBio] = useState("");
  const [shownUser, setShownUser] = useState("");
  const [images, setImages] = useState("");

  var Dog={};
  useEffect(() => {
    if (Loading == true){getData();}
  }, [Loading]);

  function postData(x){
    setLoading(true)
    const res = fetch(`http://localhost:8080/pugme/match?username=` +  shownUser + `&liked=` + x,
    { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer'+token
        },
        body: JSON.stringify({parcel1: x}),
        //body: JSON.stringify({parcel2: input2.value})
    
    }).catch(err => console.log("Back End Error:" + err)).then(res => res.json()).then(data => {

    });
  }
 

  var getData = () => {
    setLoading(true);
    let status = fetch(` http://localhost:8080/pugme/match`, {
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
                username
            } = page;
            setDogName(dogName)
            setBreed(breed)
            setAge(age)
            setBio(dogBio)
            setLoading(false);
            setShownUser(username)
            setImages(images)
            console.log(dogName)
          })
  }

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
      <div>{Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <>{DogCard(dogName,breed,age,dogBio,images, username)}</>  }</div>
      {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <><div class="kardoylopragma"><span className="karidia" style={{color:"#4c4345"}} onClick={() => {postData("no")}} >&#10084;</span><div onClick={() => {postData("yes")}} className="karidia" style={{color:"#dc80b1"}}>&#10084;</div></div></>  }
      <div className="footer" style={{color:"#ecdfd6"}}>
                    Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
        </div>
    </>
  );
}

}
