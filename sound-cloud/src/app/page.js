"use client"
import Link from 'next/link.js';
import Script from 'next/script';
import Topbar from '@/components/top-bar';
import Sidebar from '@/components/side-bar';
import Preview from '@/components/preview';
import Audioplayer1 from "../components/audio-player.js"
import React, { useState } from 'react';

const Home = () => {
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const handleButtonClick = () => {
    setShowAudioPlayer(!showAudioPlayer);
  };
  return (
    <div>
     <Script
       src="https://kit.fontawesome.com/23cecef777.js"
       crossOrigin="anonymous"
     />
<Sidebar></Sidebar>

<div className="main-container">
<Topbar></Topbar>
  <div className="spotify-playlists">
    <h2>Spotify Playlists</h2>

    <div className="list">
      <div className="item">
        <img src="https://i.scdn.co/image/ab67616d0000b2733b5e11ca1b063583df9492db" />
        <div className="play">
          <span  onClick={handleButtonClick} className="fa fa-play">
        {showAudioPlayer} </span>
        </div>
        <h4>Today's Top Hits</h4>
        <p>Rema & Selena Gomez are on top of the...</p>
      </div>

  </div>
  </div>

  <div className="spotify-playlists">
    <h2>Focus</h2>
   
    
  </div>

  <div className="spotify-playlists">
    <h2>Mood</h2>
  
    </div>
    <div className='fixed-bottom'>
    {showAudioPlayer && <Audioplayer1 />}
      
    </div>
   {/* <Preview></Preview> */}
  </div>




 
</div>


  );
};

export default Home;