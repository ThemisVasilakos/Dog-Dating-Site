import {useNavigate } from "react-router-dom";

export default function Error() {

    return (
        <>
        <div className="container2" style={{color:"whitesmoke",backgroundColor: "transparent",border: "0px solid currentColor"}}>
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