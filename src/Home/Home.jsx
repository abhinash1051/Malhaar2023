import {React, useEffect} from 'react'
import Background from '../assests/Background.png'
import './Home.css'
import Malhaar from '../assests/Malhaar.png'
import Timer from '../Timer/Timer';

export default function Home() {
     // Empty dependency array means useEffect runs once after the initial render
      return (
        <div className='home'>
          <div className='centerlogo'>
            <img src={Malhaar} alt="Malhaar" />
          </div>
         <Timer/>
            <button className='passbtn'>Get Your Passes!!</button>
        </div>
      );
    }
