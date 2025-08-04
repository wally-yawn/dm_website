import './PastShows.css';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

function PastShows({title, otherbands, location, date, time, cover, playlist}){
  
  const noEmbedsFlag = globalThis.Cypress?.env?.('TEST_DATA');
  
  return(
    <section className="past-show">
      <h2>{title}</h2>
      <div className="show-card">
        <div className="details">
          <p>Where: {location}</p>
          <p>When: {date} at {time}</p>
          {/* <p>Cover: {cover}</p> */}
          {/* {otherbands.length > 0 && (
            <p>With: {otherbands}</p> 
          )} */}
        </div>
        <div className="embed">
          {!noEmbedsFlag && playlist && (
            <YoutubeEmbed url={playlist}/>
          )}
        </div>
      </div>
    </section>
  );
}

export default PastShows;