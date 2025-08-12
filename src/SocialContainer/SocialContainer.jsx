import './SocialContainer.css'
import spotifyLogo from '../assets/Spotify_Primary_Logo_RGB_Green.png'
import appleLogo from '../assets/Apple Music_Symbol_0.svg'
import amazonLogo from '../assets/ammusic.jpeg'
import youtubeLogo from '../assets/youtube_icon.png'
import facebookLogo from '../assets/Facebook_Logo_Primary.png'
import igLogo from '../assets/Instagram_Glyph_Gradient.png'
// import tidalLogo from '../assets/tidallogo.jpeg'

function SocialContainer(){
  return (
    <section className="banner-socials">
      <a href = "https://www.instagram.com/thedeceitfulmind/" target="blank" rel="noopener noreferrer"><img src={igLogo} alt="instagram logo" aria-hidden="true" className="social-icon" /></a>
      <a href = "https://www.facebook.com/TheDeceitfulMind/" target="blank" rel="noopener noreferrer"><img src={facebookLogo} alt="facebook logo" aria-hidden="true" className="social-icon" /></a>
      <a href = "https://www.youtube.com/channel/UCDJiZDVS2wHexkZvj0kirgQ" target="blank" rel="noopener noreferrer"><img src={youtubeLogo} alt="youtube logo" aria-hidden="true" className="social-icon" /></a>
      <a href = "https://open.spotify.com/artist/1NRdg3EZ3RIQkrUS52eaI6" target="blank" rel="noopener noreferrer"><img src={spotifyLogo} alt="spotify logo" aria-hidden="true" className="social-icon" /></a>
      <a href = "https://music.apple.com/us/artist/the-deceitful-mind/1149643171" target="blank" rel="noopener noreferrer"><img src={appleLogo} alt="apple logo" aria-hidden="true" className="social-icon" /></a>
      <a href = "https://www.amazon.com/music/player/artists/B01LEGQGNI/the-deceitful-mind" target="blank" rel="noopener noreferrer"><img src={amazonLogo} alt="amazon logo" aria-hidden="true" className="social-icon" /></a>
    </section>
  )
}

export default SocialContainer