
import './stylehome.css';
import videoSource from '../media/background.mp4';



export default function Home() {

  function handleClick() {
    window.location.href = '/Product';
  }
    return (
      <>
      
        <div className="content">
          <h1>Welcome to this Retail Shop</h1>
           <button className = 'shopbutton' onClick = {handleClick}>Shop Now</button> 
        </div>
        <div className="background-video">
          <video autoPlay muted loop>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </>
    );
  }