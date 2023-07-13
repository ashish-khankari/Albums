import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Album.css';

export default function Album() {
  const navigate = useNavigate();

  // dynamic routing with index values
  function handleAlbums(item, index) {
    navigate(`/uniqueAlbum/${index + 1}`);
  }

  // Arr Album with differnt categories
  const albumArr = [
    'Songs',
    'Podcast',
    'Movies',
    'Photos',
    'Live Events',
    'New Releases',
    'Made for You',
    'Love',
    'Mood',
    'Party',
  ];
  
  return (
    <div>
      <div className="container">
        {albumArr.map((item, index) => (
          <div className="albumCard" onClick={() => handleAlbums(item, index)} key={item}>
            {/* mapping of Album Categories */}
            <p className="albums">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
