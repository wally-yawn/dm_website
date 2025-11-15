import './Home.css';
import UpcomingShowsContainer from '../UpcomingShowsContainer/UpcomingShowsContainer';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';

function Home({ upcomingShows, youtubeEmbed }) {
  return (
    <section className="home-container">
      <section className="upcoming-shows">
        <h2>Upcoming Shows</h2>
        {upcomingShows.length < 1 ? (
          <section className="card">
            <p>
              No upcoming shows, check back soon! In the meantime check out some videos from our <a href="/pastshows">past shows</a> and our <a href="/songs">released music!</a>
            </p>
        </section>

        ) : (
          <section className="container shows-container">
            <UpcomingShowsContainer shows={upcomingShows} />
          </section>
        )}
      </section>
      <section className="news">
        <h2>News</h2>
        <section className="card">
          <p>We'll soon be announcing a release date for our song Tomorrow! For now, check out our live recording!</p>
          <YoutubeEmbed url="https://www.youtube.com/embed/3NXcJH_QYBM?si=zCWfqTC4_isliXfn"></YoutubeEmbed>
        </section>
      </section>
    </section>
  );
}

export default Home;