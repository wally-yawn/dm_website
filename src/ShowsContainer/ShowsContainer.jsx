import './ShowsContainer.css';
import React, {useState, useEffect} from 'react';
import Shows from '../Shows/Shows';
import shows from '../data/shows.json';

function ShowsContainer( {shows} ){
  return(
    <section className="container shows-container">
      <div className="show-cards">
        {shows.map((show, index) => (
          <Shows
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

export default ShowsContainer;