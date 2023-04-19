import { menoudaki } from "./tools/menu";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Popup from 'reactjs-popup';
import { DogCard } from "./tools/dogcard";


export default function Match() {
    var token = window.localStorage.getItem('token').replace(/["]/g,' ')
    const [user, setUser] = useState(undefined);
    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const namep = user;
    const navigate = useNavigate();

    // if(localStorage.getItem('token')){
    //     var token = JSON.parse(localStorage.getItem('token'))
    //     console.log('token exists')}
    //     else{
    //       navigate("/login")
    //     }

    useEffect(() => {
        getData();
      }, []);

    const getData = () => {
    setLoading(true);
    axios.get(" http://localhost:8080/pugme/matches", {
    headers: {
        'Content-Type': 'application/json',
        "Authorization": 'Bearer'+token
    }
    })
    .then((res)=>{
        setLoading(false);
        setData(res.data);
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    }
    
    function imagoavatar(x){
        x = x.split(',')
        return (<img height="100px" width="100px" src={x[0]}></img>)
    }
    function hrefis(x,y){
        return (x + y)
    }
    if (data.length==0){
        return (
            <>
            {/* <h1 style={{color:"#f5f5f5", textAlign:"center", fontSize:"3em"}}>Matches</h1> */}
            {menoudaki()}
            {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <div className="lkartela"><div class="bone">Keep trying💔</div></div>    }
            <div className="footer" style={{color:"#ecdfd6"}}>
                        Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
            </>
        )
    }else{

    
        return (
            <>
            {/* <h1 style={{color:"#f5f5f5", textAlign:"center", fontSize:"3em"}}>Matches</h1> */}
            {menoudaki()}
            {Loading ? <div className="lkartela"><div class="bone">Loading..</div></div>  : <table>
                <tr><th>🐾</th><th>Dog's Name</th><th>Dog's Age</th><th>Owner's Name</th><th>Phone</th><th>e-Mail</th></tr>
                {data.map((val, i) => (<tr key={i}><th><Popup trigger={<a>{imagoavatar(val.images)}</a>} position="right center"><>{DogCard(val.dogName,val.breed,val.age,val.dogBio,val.images, "user1")}</> </Popup></th><th>{val.dogName}</th> <th>{val.age}</th> <th>{val.ownerName}</th><th><a style={{textDecoration:"none",color:"black"}} href={hrefis("tel:+30",val.phoneNumber)}>{val.phoneNumber}</a></th><th><a style={{textDecoration:"none",color:"black"}} href={hrefis("mailto:",val.email)}>{val.email}</a></th></tr>))}
                <tr><th></th><th></th><th></th><th></th><th></th><th>🤎PUG ME❤️</th></tr>
                </table>    }
            <div className="footer" style={{color:"#ecdfd6"}}>
                        Made By <a className="names" href="https://github.com/ThemisVasilakos">ThemisVasilakos</a> and <a className="names" href="https://github.com/MikeTsak">MikeTsak</a>
            </div>
            </>
        )}
}
