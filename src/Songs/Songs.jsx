import './Songs.css'
import spotifyLogo from '../assets/Spotify_Primary_Logo_RGB_Green.png'
import appleLogo from '../assets/Apple Music_Symbol_0.svg'
import amazonLogo from '../assets/ammusic.jpeg'
import tidalLogo from '../assets/tidallogo.jpeg'

function Songs({title, img, spotify, apple, amazon, tidal, youtube}){
  
  // remove the embedded youtube during tests
  const noEmbedsFlag =
    globalThis.Cypress?.env?.('NO_EMBEDS') ||
    import.meta.env.VITE_NO_EMBEDS === 'true';

  const isTest = import.meta.env.MODE === 'test' || noEmbedsFlag;
  
  return (
    <div className="card">
      <h2>{title}</h2>
      <ul className="links">
        <li><a href = {spotify} target="blank" rel="noopener noreferrer"><img src={spotifyLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a></li>
        <li><a href = {apple} target="blank" rel="noopener noreferrer"><img src={appleLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a></li>
        {/* <li><a href = {amazon} target="blank" rel="noopener noreferrer"><img src={amazonLogo} alt="amazon logo" aria-hidden="true" className="icon" /></a></li> */}
        {/* <li><a href = {tidal} target="blank" rel="noopener noreferrer"><img src={tidalLogo} alt="tidal logo" aria-hidden="true" className="icon" /></a></li> */}
      </ul>
      {!isTest && (
        <div className="video">
          <iframe src= {youtube} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      )}
    </div>
  )
}

export default Songs;