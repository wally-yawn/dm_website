import './ShowsContainer.css';
import React, {useState, useEffect} from 'react';
import Shows from "../Shows/Shows";

function ShowsContainer(){

  const show1 = {
    location: "Fraco's",
    date: "June 12",
    time: "9pm",
    cover: "None"
  }

  let allDMShows = null;

  const [allShows, setAllShows] = useState({
    shows: [show1]
  })

  if (allShows?.shows?.length > 0){
    allDMShows = allShows.shows.map((show, index) => {
      return (
        <Shows
          id={index}
          key={index}
          location={show.location}
          date={show.date}
          time={show.time}
          cover={show.cover}
        />
      )
    })
  }

  return(
    <section className="shows-container">
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