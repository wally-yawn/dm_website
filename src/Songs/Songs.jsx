import './Songs.css'
import spotifyLogo from '../assets/Spotify_Primary_Logo_RGB_Green.png'

function Songs({title, img, spotify, apple, amazon, tidal, youtube}){
  return (
    <div className="card">
      <h3>{title}</h3>
      <span className="links">
        <a href = {spotify} target="blank" rel="noopener noreferrer"><img src={spotifyLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a>
      </span>
      <iframe width="560" height="315" src= {youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Songs;