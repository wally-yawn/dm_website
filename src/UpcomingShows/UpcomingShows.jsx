import './UpcomingShows.css';

function UpcomingShows({title, otherbands, location, date, time, cover}){
  
  return(
    <section className="upcoming-show">
      <h2>{title}</h2>
        <div className="details">
          <p>Where: {location}</p>
          <p>When: {date} at {time}</p>
          <p>Cover: {cover}</p>
          {/* {otherbands.length > 0 && (
            <p>With: {otherbands}</p> 
          )} */}
        </div>
    </section>
  );
}

export default UpcomingShows;