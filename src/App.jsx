// import { useState } from 'react'
import './App.css'
import MainPage from './MainPage/MainPage'
import { Routes, Route, NavLink} from 'react-router-dom';
import BandContainer from './BandContainer/BandContainer';
import SongsContainer from './SongsContainer/SongsContainer';
import ShowsContainer from './ShowsContainer/ShowsContainer';

function App() {

  return (
    <>
      <header>
        <h1>The Deceitful Mind</h1>
      </header>
      <nav className='nav_bar'>
        <NavLink to="/shows" className="nav-element">SHOWS</NavLink>
        <NavLink to="/theband" className="nav-element">THE BAND</NavLink>
        <NavLink to="/songs" className="nav-element">SONGS</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<ShowsContainer />}/>
          <Route path="/theband" element={<BandContainer />}/>
          <Route path="/songs" element={<SongsContainer />}/>
          <Route path="/shows" element={<ShowsContainer />}/>
        </Routes>
      </main>
    </>
  )
}

export default App;