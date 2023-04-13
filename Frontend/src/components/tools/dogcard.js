import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


  
var ratsa = {
    fontSize:"20px",
    color:"black",
    font:"Ubuntu-Bold",
}

var bio = {
    fontSize:"15px",
    color:"black",
    font:"Ubuntu-Bold",
}

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }


export function DogCard(name, breed, age, dogBio,images, username) {
  console.log(dogBio)
  const dog = {
    dogName: name,
    age: age,
    breed: breed,
    dogBio: dogBio,
  }

  var token = window.localStorage.getItem('token').replace(/["]/g,' ')

  function postData(){
    e.preventDefault();
    const res = fetch(`http://localhost:8080/pugme/report?username=` +  username,
    { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": 'Bearer'+token
        },
        body: JSON.stringify({parcel1: "Themistokli einai kakopoios o " + username}),
        //body: JSON.stringify({parcel2: input2.value})
    
    }).catch(err => console.log("Back End Error:" + err)).then(res => res.json()).then(data => {
  
    });
  }
  

  let urls = images.split(",");

  const slideImages = [
    {
      url: urls[0],
    },
    {
      url:  urls[1],
      caption: 'Slide 2'
    },
    {
      url: urls[2],
      caption: 'Slide 3'
    },
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
    return (
        <div class="kartela">
            <div class="slideshow-container"></div>

            {Slideshow()}
            
            <div class="Namedog"><div><h1 class="dogname">{dog.dogName}</h1></div><div class="dogname"><h1>{dog.age}<span onClick={postData}> &#9873; </span></h1></div></div>
            <div class="doginfo">
                <div class="ratsa" style={ratsa}>{dog.breed}</div>
                <div class="bio" style={bio}>{dog.dogBio}</div>
            </div>
        </div>
    );
}




// function calculateDogAge(age) {
//     let humanAge = 15 + (age / 3.25);
  
//     return (<div style={{fontSize:"15px"}}>(Age in owner years: {Math.round(humanAge)})</div>);
//   }