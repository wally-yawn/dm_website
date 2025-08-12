import './Songs.css'
import spotifyLogo from '../assets/Spotify_Primary_Logo_RGB_Green.png'
import appleLogo from '../assets/Apple Music_Symbol_0.svg'
import amazonLogo from '../assets/ammusic.jpeg'
// import tidalLogo from '../assets/tidallogo.jpeg'
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed'

function Songs({title, img, spotify, apple, amazon, tidal, youtube}){
  
  const noEmbedsFlag = globalThis.Cypress?.env?.('TEST_DATA');
  
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul className="links">
        <li><a href = {spotify} target="blank" rel="noopener noreferrer"><img src={spotifyLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a></li>
        <li><a href = {apple} target="blank" rel="noopener noreferrer"><img src={appleLogo} alt="apple logo" aria-hidden="true" className="icon" /></a></li>
        <li><a href = {amazon} target="blank" rel="noopener noreferrer"><img src={amazonLogo} alt="amazon logo" aria-hidden="true" className="icon" /></a></li>
        {/* <li><a href = {tidal} target="blank" rel="noopener noreferrer"><img src={tidalLogo} alt="tidal logo" aria-hidden="true" className="icon" /></a></li> */}
      </ul>
      {!noEmbedsFlag && (
        <YoutubeEmbed url={youtube}/>
      )}
    </div>
  )
}

export default Songs;