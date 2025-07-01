import "./SongsContainer.css";
import songs from '../data/songs.json'
import Songs from '../Songs/Songs'
import { useState } from "react";

function SongsContainer(){

  const [allSongs, setAllSongs] = useState(songs)

  const allDMSongs = allSongs.map((song, index) => {
    return (
      <Songs
        id={index}
        key={index}
        title={song.title}
        img={song.img}
        spotify={song.spotify}
        apple={song.apple}
        amazon={song.amazon}
        tidal={song.tidal}
        youtube={song.youtube}
      />
    )
  })

  return(
    <section className="container">
      <h2>This is the songs container</h2>
      {allDMSongs}
    </section>
  )
}

export default SongsContainer;