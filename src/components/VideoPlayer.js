import { useEffect, useState } from 'react';
import ReactHlsPlayer from 'react-hls-player';



const VideoPlayer = ({ data }) => {
  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  // changes the video playing
  const handleChange = ({ value }) => {
    setCurrentVidIndex(value);
  }

  // creates a list of clickable video thumbnails
  const thumbnails = data.map((item, i) => {
    // for some reason strict comparison doesn't work for 'checked' attr, even though these are the same type (number) >:{
    return (
      <label key={i}>
        <input 
          type="radio"
          name="thumbnail"
          value={i}
          checked={currentVidIndex == i}
          onChange={e => handleChange(e.target)}  
        />
        <span className="sr-only">Video</span>
        <img src={item.thumbnail} alt="" />
      </label>
    )
  })

  return (
    <div className="video__container">
      <ReactHlsPlayer
        url={data[currentVidIndex].manifest_url}
        autoplay={false}
        controls={true}
        width="100%"
        height="auto"
        className="video__player"
      />

      <form className="video__playlist">
        <fieldset>
          {thumbnails}
        </fieldset>
      </form>
    </div>
  )
}

export default VideoPlayer;
