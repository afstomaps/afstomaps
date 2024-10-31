// src/components/Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VideoContext } from '../VideoContext';

const Home = ({ videos }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.notes.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="row">
            {filteredVideos.map(video => (
              <div className="col-md-4 mb-3" key={video.id}>
                <Link to={`/video/${video.id}`}>
                  <img src={video.thumbnail} alt={video.title} className="img-fluid" />
                  <p>{video.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;