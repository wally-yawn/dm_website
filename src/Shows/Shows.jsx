import './Shows.css';

function Shows({location, date, time, cover}){
  return(
    <div className="card">
      <h3>This is a show</h3>
      <p>Where: {location}</p>
      <p>When: {date} at {time}</p>
      <p>Cover: {cover}</p>
    </div>
  );
}

export default Shows;