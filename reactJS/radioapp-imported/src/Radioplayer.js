import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({ currentradio }) => (
  <div>

    {/* Radio name <span className="badge badge-warning">
        is playing...</span> */}
    {
      currentradio.id === undefined  ?
        ''
        :

        <h4 className="text-center text-light"> {currentradio.radio_name} <span className="badge badge-warning"> is playing...</span></h4>
    }

    {console.log(currentradio)}
    <AudioPlayer
      autoPlay
      src={currentradio.streaming_url}
      onPlay={e => console.log("onPlay")}
    // other props here
    />
  </div>

);

export default Player
