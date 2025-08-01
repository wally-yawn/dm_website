import './PastShowsContainer.css';
import React, {useState, useEffect} from 'react';
import PastShows from '../PastShows/PastShows';
import shows from '../data/shows.json';

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