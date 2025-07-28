import './Shows.css';

function Shows({title, otherbands, location, date, time, cover}){
  return(
    <div className="card">
      <h3>{title}</h3>
      <p>Where: {location}</p>
      <p>When: {date} at {time}</p>
      <p>Cover: {cover}</p>
      {/* make this conditional on if there is other bands */}
      <p>With: {otherbands}</p> 
    </div>
  );
}

export default Shows;