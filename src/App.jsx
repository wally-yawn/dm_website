import { useState } from 'react'
import './App.css'
import { Routes, Route, NavLink} from 'react-router-dom';
// import BandContainer from './BandContainer/BandContainer';
import SongsContainer from './SongsContainer/SongsContainer';
import ShowsContainer from './ShowsContainer/ShowsContainer';
import shows from './data/shows.json';
import testShows from './data/testShows.json';
import Home from './Home/Home';

function App() {

  const isTest = globalThis.Cypress?.env?.('TEST_DATA');
  const data = !isTest ? shows : testShows;

  const today = new Date();
  today.setHours(0,0,0,0);

  const [upcomingShows, setUpcomingShows] = useState({
    shows: data.filter(show => {
      const showDate = new Date(`${show.date} 00:00:00`);
      return showDate >= today;
    }).sort((a, b) => {
      const dateA = new Date(`${a.date} 00:00:00`);
      const dateB = new Date(`${b.date} 00:00:00`);
      return dateA - dateB;
    })
  });

  const [pastShows, setPastShows] = useState({
    shows: data.filter(show => {
      const showDate = new Date(`${show.date} 00:00:00`);
      return showDate < today;
    }).sort((b,a) => {
      const dateA = new Date(`${a.date} 00:00:00`);
      const dateB = new Date(`${b.date} 00:00:00`);
      return dateA - dateB;
    })
  })

  return (
    <>
      <header className='banner'>
      </header>
      <nav className='nav_bar'>
        <NavLink to="/" className="nav-element">HOME</NavLink>
        <NavLink to="/pastshows" className="nav-element">PAST SHOWS</NavLink>
        {/* <NavLink to="/theband" className="nav-element">THE BAND</NavLink> */}
        <NavLink to="/songs" className="nav-element">SONGS</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home upcomingShows={upcomingShows.shows}/>}/>
          {/* <Route path="/theband" element={<BandContainer />}/> */}
          <Route path="/songs" element={<SongsContainer />}/>
          <Route path="/pastshows" element={<ShowsContainer shows={pastShows.shows}/>}/>
        </Routes>
      </main>
    </>
  )
}

export default App;