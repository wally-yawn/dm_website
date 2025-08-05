import './UpcomingShowsContainer.css';
import UpcomingShows from '../UpcomingShows/UpcomingShows';

function UpcomingShowsContainer( {shows} ){
  return(
    <section className="container shows-container">
      <div className="show-cards">
        {shows.map((show, index) => (
          <UpcomingShows
            key={index}
            title={show.title}
            location={show.location}
            date={show.date}
            time={show.time}
            cover={show.cover}
            otherbands={show.otherbands}
          />
        ))}
      </div>
    </section>
  )
}

export default UpcomingShowsContainer;