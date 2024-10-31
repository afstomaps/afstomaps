// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ videos }) => {
  console.log('Sidebar component videos:', videos);
  return (
    <div className="sidebar">
      <h2>Released Videos</h2>
      <ul>
        {videos.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)).map(video => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>{video.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;