import { slide as Menu } from 'react-burger-menu'
import { Logo } from '../../img/logo'


var styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47'
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        },

      }

var meny = {
        color: 'whitesmoke',
        textDecoration:"none",
        fontFamily: 'Ubuntu, sans-serif',
        fontSize:"2em",

}

const getReports = (e) => {
  if(window.localStorage.getItem('role')==1){
      return <a href={`/reports`}style={meny}>Reports</a>
  }

}


export function menoudaki(){
    return(
        <>
        <Menu styles={ styles }>
            <Logo/> 
            <br></br>
            <a id="home" style={meny} href="/">Home</a>
            <br></br>
            <a id="about" style={meny} href="/Profile">Profile</a>
            <br></br>
            <a id="contact" style={meny} href="/matches">Matches</a>
            <br></br>
            {getReports()}
            <br></br>
            <span onClick={ () => {    
                var token = ''
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                window.open("login","_self")
              }} className="close" style={{position:"absolute",bottom:"10%",textDecoration:"none",fontSize:"30px"}}>&#10162;</span>
        </Menu>
        </>)
}