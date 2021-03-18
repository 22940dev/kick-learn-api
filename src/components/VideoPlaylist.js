const VideoPlaylist = ({handleChange, data, currentVidIndex}) => {

  // creates a list of clickable video thumbnails
  const thumbnails = data.map((item, i) => {
    // for some reason strict comparison doesn't work for 'checked' attr, even though these are the same type (number) >:{
    return (
      <label key={i} className="playlist__thumbnail">
        <input
          type="radio"
          name="thumbnail"
          value={i}
          checked={currentVidIndex == i}
          onChange={e => handleChange(e.target)}
          className="playlist__thumbnail-radio"
        />
        <img 
          src={item.thumbnail} 
          alt="" 
          className="playlist__thumbnail-img"
        />
        <span className="sr-only">Video</span>
      </label>
    )
  })

  return (
    <form className="playlist">
      <fieldset>
        {thumbnails}
      </fieldset>
    </form>
  )
}

export default VideoPlaylist;