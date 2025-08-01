import './ShowsContainer.css';
import React, {useState, useEffect} from 'react';
import Shows from '../Shows/Shows';
import shows from '../data/shows.json';

function ShowsContainer(){

  let upcomingDMShows = null;
  let pastDMShows = null;
  
  const today = new Date();
  
  const [upcomingShows, setUpcomingShows] = useState({
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

  const [pastShows, setPastShows] = useState({
    shows: shows.filter(show => {
      const showDate = new Date(`${show.date} 00:00:00`);
      today.setHours(0,0,0,0);
      return showDate <= today;
    }).sort((a,b) => {
      const dateA = new Date(`${a.date} 00:00:00`);
      const dateB = new Date(`${b.date} 00:00:00`);
      return dateA - dateB;
    })
  })

  if (upcomingShows?.shows?.length > 0){
    upcomingDMShows = upcomingShows.shows.map((show, index) => {
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

    if (pastShows?.shows?.length > 0){
    pastDMShows = pastShows.shows.map((show, index) => {
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
    <section className="container shows-container">
      {upcomingDMShows === null ? (
        <p>No upcoming shows, check back soon and check out previous show videos below!</p> 
      ) : (
        <div className="show-cards">{upcomingDMShows}</div>
      )}
      <h2>Past Shows!</h2>
      {console.log(`past shows: `, pastShows)}
      {console.log(`past DMshows: `, pastDMShows)}
      <div className="show-cards">{pastDMShows}</div>
    </section>
  )
}

export default ShowsContainer;