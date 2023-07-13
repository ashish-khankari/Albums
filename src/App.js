import Album from "./Components/Album";
import UniqueAlbum from "./Components/UniqueAlbum";
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* Added Routes */}
      <Routes>
        <Route path="/" element={<Album />}/>
        <Route path="/uniqueAlbum/:id" element= {<UniqueAlbum/>}/>
      </Routes>
    </div>
  );
}

export default App;
