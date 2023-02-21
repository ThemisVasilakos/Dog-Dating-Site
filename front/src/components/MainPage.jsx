import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DogCard } from "./dogtag/dogcard";
import { menoudaki } from "../tools/menu";
import axios from 'axios';
import Popup from 'reactjs-popup';


var key = require("./backkey.json");

export default function Main() {
  const [user, setUser] = useState(undefined);
  const [Loading, setLoading] = useState(true);
  const [Dog, setDog] = useState(undefined);
  const namep = user;
  const navigate = useNavigate();

  useEffect(() => {
    if (Loading == true){getData();}
  }, []);

  function postData(x){
    setLoading(true);
    const res = fetch(key + "mutch?username=" +  Dog.username + "&liked=" + x,
    { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Bypass-Tunnel-Reminder': 'true',
          'key': 'pugme'
        },
        body: JSON.stringify({parcel1: x}),
        //body: JSON.stringify({parcel2: input2.value})
    
    }).catch(err => console.log("Back End Error:" + err)).then(res => res.json()).then(data => {
        if (data.what == "Match"){
          return (
            <Popup trigger={<button> Trigger</button>} position="right center">
              <div><h1>It's a Match</h1></div>
              <div style={{display:"flex"}}>
              <button onClick={navigate('mutch')}>Go to Mutch</button>
              <button>Contenue Mutching</button>
              </div>
            </Popup>
          )
          
        }

    });
  }

  var getData = () => {
    setLoading(true);
    axios.get(key + "mutch/" + namep,{
    headers: {
      'Content-Type': 'application/json',
      'Bypass-Tunnel-Reminder': 'true',
      'key': 'pugme'
    }
    })
    .then((res)=>{
      setLoading(false);
      // console.log(res.data);
      if (res.data == "Error")navigate("/*")
      else setDog(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  // navigate("/*");
  // const defineCustomElements(window);

  // onAuthStateChanged(firebaseAuth, (currentUser) => {
  //   if (currentUser) setUser(currentUser);
  //   else navigate("/login");
  // });
  // const dog = {
  //   dogName: "Bobby",
  //   age: 3,
  //   breed: "Pug",
  //   breedtype: "small",
  //   dogBio: "I am a very cute dog who faugth in WW2😎",
  // }

  return (
    <>
      {menoudaki(user, navigate)}
      <div>{Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <>{DogCard(Dog)}</>  }</div>
      {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <><div class="kardoylopragma"><span className="karidia" style={{color:"#4c4345"}} onClick={() => {postData("no")}} >&#10084;</span><div onClick={() => {postData("yes")}} className="karidia" style={{color:"#dc80b1"}}>&#10084;</div></div></>  }
      {/* {DogCard(dog)} */}
      <div className="footer" style={{color:"#ecdfd6"}}>
                    Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
        </div>
    </>
  );
}
