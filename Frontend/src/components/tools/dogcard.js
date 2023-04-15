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
  
  const dog = {
    dogName: name,
    age: age,
    breed: breed,
    dogBio: dogBio,
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
    }
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

            <div class="doginfo">
              <br></br>
                <div class="ratsa" style={ratsa}><b>{dog.dogName} || {dog.breed} || {dog.age}</b> </div>
                <br></br>
                <div class="bio" style={bio}>{dog.dogBio}</div>
            </div>
        </div>
    );
}