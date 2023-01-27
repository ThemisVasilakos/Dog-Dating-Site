import {useNavigate } from "react-router-dom";

export default function Error() {

    return (
        <>
        <a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/d-o-assistant-362611.appspot.com/o/img%2Fportallogo.png?alt=media&token=4d15451e-8e79-46ba-8686-4b84b52e8518" className="menoudaki" alt="logo" width="70px"/></a>
        <div className="loginform" style={{color:"whitesmoke",backgroundColor: "transparent",border: "0px solid currentColor"}}>
            <div className="getc">
        <h1>404</h1>
        <h2>Page not found</h2>
        
        <h3>Click <a href="/">here</a> to go back</h3>
        </div>
        <img src="https://media.tenor.com/fl1ex5toUtIAAAAC/han-solo-shrug.gif" alt="404KENOBI" width="100%"/>
        </div>
        </>
    );
}