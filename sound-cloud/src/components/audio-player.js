"use client"
import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MyAudioPlayer = () => {
  return (
    <div className="container">
      <AudioPlayer
      autoPlay
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        volume={0.5}
      />

    </div>
  );
};

export default MyAudioPlayer;
