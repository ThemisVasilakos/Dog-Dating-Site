import { menoudaki } from "../tools/menu";
import axios from 'axios';
import React, { useState, useEffect } from "react";


export default function Match() {
    //Token for user authentication
    var token = window.localStorage.getItem('token').replace(/["]/g,' ')
    //Matched Users
    const [data, setData] = useState([]);

    //Use Effect for fetching matched users
    useEffect(() => {
        axios.get(" http://localhost:8080/pugme/matches", {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer'+token
        }
        })
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
      }, []);
    
    //Function for displaying profile pic
    function imagoavatar(x){
        x = x.split(',')
        return (<img height="100px" width="100px" src={x[0]} style={{borderRadius:"1em"}}></img>)
    }

    function hrefis(x,y){
        return (x + y)
    }

    //Check for available matches
    if (data.length==0){
        return (
            <>
            {menoudaki()}
            {<div className="lkartela"><div class="bone">Keep trying💔</div></div>    }
            <div className="footer" style={{color:"#ecdfd6"}}>
                        Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
            </>
        )
    }else{
        return (
            <>
            {menoudaki()}
            
            <table>
                <thead >

                <tr>
                    <th >🐾</th>
                    <th >Dog Name</th>
                    <th >Age</th>
                    <th >Owner's Name</th>
                    <th >Phone Number</th>
                    <th >Email</th>
                </tr>

                </thead>


                <tbody>
                {
                    data.map(dog => (
                        <tr>
                            <th >{imagoavatar(dog.dogPhoto)}</th>
                            <th >{dog.dogName}</th>
                            <th>{dog.age}</th>
                            <th>{dog.firstName}</th>
                            <th><a style={{textDecoration:"none",color:"black"}} href={hrefis("tel:+30",dog.phoneNumber)}>{dog.phoneNumber}</a></th>
                            <th><a style={{textDecoration:"none",color:"black"}} href={hrefis("mailto:",dog.email)}>{dog.email}</a></th>
                        </tr>
                    ))
                }

                </tbody>
                <tr><th></th><th></th><th></th><th></th><th></th><th>🤎PUG ME❤️</th></tr>
               
            </table>

            <div className="footer" style={{color:"#ecdfd6"}}>
                        Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
            </>
    )}
}