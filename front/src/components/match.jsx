import { menoudaki } from "../tools/menu";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";


var key = require("./backkey.json");

export default function Match() {
    const [user, setUser] = useState(undefined);
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const namep = user;
    const navigate = useNavigate();

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
    setLoading(true);
    axios.get(key + "match", {
    headers: {
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'true',
        "Authorization": 'Bearer'+token
    }
    })
    .then((res)=>{
        setLoading(false);
        setData(res.data.test);
        console.log(res.data.test);
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    
    return (
        <>
        <h1 style={{color:"#f5f5f5", textAlign:"center", fontSize:"3em"}}>Matches</h1>
        {menoudaki(user, navigate)}
        {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <>{data.map((val, i) => (<p key={i}>{val.Name} {val.Age}</p>))}</>    }
        <div className="footer" style={{color:"#ecdfd6"}}>
                    Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
        </div>
        </>
    )
}