import './Home.css'
import ShowsContainer from '../ShowsContainer/ShowsContainer';

function Home( {upcomingShows, youtubeEmbed} ){
  return (
    <section className="home-container">
      {console.log('upcomingShows: ', upcomingShows)}

      {upcomingShows.length < 1 ? (
        <p>No upcoming shows, check back soon!</p> 
      ) : (
      <section className="container shows-container">
        {<ShowsContainer shows={upcomingShows}/>}
      </section>)}
    </section>
  )
}

export default Home;