import React, { useRef, useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { GrVolume, GrVolumeMute } from "react-icons/gr"
import { BsPlayFill, BsFillPauseFill } from "react-icons/bs"

const Player = ({ currentradio }) => {

  const audioRef = useRef()

  useEffect(() => {
    console.log(audioRef.current.audio.current.id)
    audioRef.current.audio.current.id = "audio-element"
  }, [])

  return (
    <div>
  
      {console.log(currentradio)}
      <AudioPlayer muted={true}
        ref={audioRef}
        src={currentradio.url}
        showJumpControls={false}
        customAdditionalControls={[]}
        customProgressBarSection={[]}
        layout="horizontal-reverse"
        onPlay={e => console.log("onPlay")}
        customIcons={{
          play: <BsPlayFill style={{ "color": "black" }} />,
          pause: <BsFillPauseFill style={{ "color": "black" }} />,
          volume: <GrVolume />,
          volumeMute: <GrVolumeMute />
        }
        }
  
      />
    </div>
  )

}

export default Player