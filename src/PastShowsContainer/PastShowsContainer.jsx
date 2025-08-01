import './PastShowsContainer.css';
import React, {useState, useEffect} from 'react';
import PastShows from '../PastShows/PastShows';
import shows from '../data/shows.json';

function ShowsContainer( {shows} ){
  return(
    <section className="container shows-container">
      <div className="show-cards">
        {shows.map((show, index) => (
          <PastShows
            key={index}
            title={show.title}
            location={show.location}
            date={show.date}
            time={show.time}
            cover={show.cover}
            otherbands={show.otherbands}
            playlist={show.playlist}
          />
        ))}
      </div>
    </section>
  )
}

export default ShowsContainer;