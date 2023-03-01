import { menoudaki } from "../tools/menu";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";

var key = require("./backkey.json");

export default function Profile() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    if(localStorage.getItem('token')){
        var token = JSON.parse(localStorage.getItem('token'))
        console.log('token exists')}
        else{
            navigate("/login")
        }
    
        useEffect(() => {
            getData();
          }, []);
    
        const getData = () => {
        axios.get(key + "profile", {
        headers: {
            'Content-Type': 'application/json',
            'Bypass-Tunnel-Reminder': 'true',
            "Authorization": 'Bearer'+token
        }
        })
        .then((res)=>{
            setData(res.data.test);
            console.log(res.data.test);
        })
        .catch((err)=>{
            console.log(err);
        })
        }
    
    return (
        // Username: username,
        // Password: password,
        //   Email: email,
        //   PhoneNumber: phoneNumber,
        //   FirstName: firstName,
        //   LastName: lastName,
        //   DogName: dogName,
        //   Breed: breed,
        //   Age: age,
        //   DogBio: dogBio
        <>
        <h1 style={{color:"#f5f5f5", textAlign:"center", fontSize:"3em"}}>Profile</h1>
        {menoudaki(navigate)}
        <div className="lkartela">
        <h3>{data.firstName}</h3>
        <h3>{data.lastName}</h3>
        <h3>{data.phoneNumber}</h3>
        <h3>{data.dogName}</h3>
        <h3>{data.breed}</h3>
        <h3>{data.age}</h3>
        <h3>{data.dogBio}</h3>
        <h3>{data.username}</h3>
        <h3>{data.email}</h3>

        </div>
        <div className="footer" style={{color:"#ecdfd6"}}>
                    Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
        </div>
        </>
    )
}