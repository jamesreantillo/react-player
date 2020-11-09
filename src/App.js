import React, { useState } from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import chillHop from './util';

function App() {
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
