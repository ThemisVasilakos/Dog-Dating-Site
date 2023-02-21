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

  const slideImages = [
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Mops_oct09_cropped2.jpg/800px-Mops_oct09_cropped2.jpg',
    },
    {
      url: 'https://cdn.britannica.com/34/233234-050-1649BFA9/Pug-dog.jpg',
      caption: 'Slide 2'
    },
    {
      url: 'https://www.akc.org/wp-content/uploads/2017/11/Pug-puppy-standing-in-profile-on-a-white-background.jpg',
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

export function DogCard(dog){

    return (
        <div class="kartela">
            <div class="slideshow-container"></div>

            {Slideshow()}
            
            <div class="Namedog"><div><h1 class="dogname">{dog.dogName}</h1></div><div class="dogname"><h1>{dog.age}<br></br>{calculateDogAge(dog.breedtype,dog.age)}</h1></div></div>
            <div class="doginfo">
                <div class="ratsa" style={ratsa}>{dog.breed}</div>
                <div class="bio" style={bio}>{dog.dogBio}</div>
            </div>
        </div>
    );
}





function calculateDogAge(breed, age) {
    let humanAge;
  
    switch (breed.toLowerCase()) {
      case 'small':
        humanAge = 15 + (age / 4);
        break;
      case 'medium':
        humanAge = 15 + (age / 3.5);
        break;
      case 'large':
        humanAge = 15 + (age / 3);
        break;
      case 'giant':
        humanAge = 12 + (age / 2.5);
        break;
      default:
        humanAge = 15 + (age / 3.25);
    }
  
    return (<div style={{fontSize:"15px"}}>(Age in owner years: {humanAge})</div>);
  }