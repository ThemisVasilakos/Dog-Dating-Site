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
        axios.get("  http://localhost:8080/pugme/reports", {
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

    //Check for available reports
    if (data.length==0){
        return (
            <>
            {menoudaki()}
            {<div className="lkartela"><div class="bone">No Reports yet</div></div>    }
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
                    <th scope="col">Report Id</th>
                    <th scope="col">Report From User</th>
                    <th scope="col">Reported User</th>
                </tr>

                </thead>


                <tbody>
                {
                    data.map(user => (
                        <tr >
                            <th>{user.reportId}</th>
                            <th>{user.fromUser}</th>
                            <th>{user.shownUser}</th>
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