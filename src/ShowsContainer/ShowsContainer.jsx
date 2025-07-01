import './ShowsContainer.css';
import React, {useState, useEffect} from 'react';
import Shows from '../Shows/Shows';
import shows from '../data/shows.json';

function ShowsContainer(){

  let allDMShows = null;
  
  const today = new Date();
  
  const [allShows, setAllShows] = useState({
    shows: shows.filter(show => {
      const showDate = new Date(`${show.date} 00:00:00`);
      today.setHours(0,0,0,0);
      return showDate >= today;
    }).sort((a,b) => {
      const dateA = new Date(`${a.date} 00:00:00`);
      const dateB = new Date(`${b.date} 00:00:00`);
      return dateA - dateB;
    })
  })

  if (allShows?.shows?.length > 0){
    allDMShows = allShows.shows.map((show, index) => {
      return (
        <Shows
          id={index}
          title={show.title}
          key={index}
          location={show.location}
          date={show.date}
          time={show.time}
          cover={show.cover}
          otherbands={show.otherbands}
        />
      )
    })
  }

  return(
    <section className="container">
      <h2 className="sub-header">This is the shows container</h2>
      {allDMShows === null ? (
        <p>No upcoming shows, check back soon!</p> 
      ) : (
        <div className="show-cards">{allDMShows}</div>
      )}
    </section>
  )
}

export default ShowsContainer;