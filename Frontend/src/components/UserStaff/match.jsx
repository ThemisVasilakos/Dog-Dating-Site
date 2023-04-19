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
        return (<img height="100px" width="100px" src={x[0]}></img>)
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
            
            <table className="matchTable">
                <thead >

                <tr>
                    <th scope="col">###</th>
                    <th scope="col">Dog Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Owner's Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                </tr>

                </thead>


                <tbody>
                {
                    data.map(dog => (
                        <tr >
                            <th scope="row">{imagoavatar(dog.dogPhoto)}</th>
                            <th scope="row">{dog.dogName}</th>
                            <th>{dog.age}</th>
                            <th>{dog.firstName}</th>
                            <th>{dog.phoneNumber}</th>
                            <th>{dog.email}</th>
                        </tr>
                    ))
                }

                </tbody>
               
            </table>

            <div className="footer" style={{color:"#ecdfd6"}}>
                        Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
            </>
    )}
}
