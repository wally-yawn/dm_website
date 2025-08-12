import spotifyLogo from '../assets/Spotify_Primary_Logo_RGB_Green.png'
import appleLogo from '../assets/Apple Music_Symbol_0.svg'
// import amazonLogo from '../assets/ammusic.jpeg'
// import tidalLogo from '../assets/tidallogo.jpeg'

function SocialContainer(){
  return (
    <ul className="banner-socials">
      <li><a href = "https://open.spotify.com/artist/1NRdg3EZ3RIQkrUS52eaI6" target="blank" rel="noopener noreferrer"><img src={spotifyLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a></li>
      <li><a href = "https://music.apple.com/us/artist/the-deceitful-mind/1149643171" target="blank" rel="noopener noreferrer"><img src={appleLogo} alt="spotify logo" aria-hidden="true" className="icon" /></a></li>
    </ul>
  )
}

export default SocialContainer