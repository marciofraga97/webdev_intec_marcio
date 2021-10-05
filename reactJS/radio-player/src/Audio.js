import React from 'react'
import AudioSpectrum from 'react-audio-spectrum'

const Audio = ({currentradio}) => (
    <div>

        <audio id="audio-element"
            src={currentradio.url}
            autoPlay
            crossOrigin='annonymous'
        ></audio>

        <AudioSpectrum
            id="audio-canvas"
            height={500}
            width={1064}
            audioId={'audio-element'}
            capColor={'white'}
            capHeight={2}
            meterWidth={5}
            meterCount={512}
            meterColor={[
                { stop: 0, color: 'yellow' },
                { stop: 0.5, color: 'magenta' },
                { stop: 1, color: 'cyan' }
            ]}
            gap={3}
        />
    </div>

)


export default Audio
