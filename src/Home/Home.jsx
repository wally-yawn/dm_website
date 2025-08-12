import './Home.css';
import UpcomingShowsContainer from '../UpcomingShowsContainer/UpcomingShowsContainer';

function Home({ upcomingShows, youtubeEmbed }) {
  return (
    <section className="home-container">
      <section className="upcoming-shows">
        <h2>Upcoming Shows</h2>
        {upcomingShows.length < 1 ? (
          <p>
            No upcoming shows, check back soon! In the meantime check out some videos from our <a href="/pastshows">past shows</a> and our <a href="/songs">released music!</a>
          </p>
        ) : (
          <section className="container shows-container">
            <UpcomingShowsContainer shows={upcomingShows} />
          </section>
        )}
      </section>
      <section className="news">
        <h2>News</h2>
        <section className="card">
          <p>We're hard at work recording new music! Release date announcements coming soon!</p>
          <img className="news-img" src='../assets/jess_recording.png'></img>
        </section>
      </section>
    </section>
  );
}

export default Home;