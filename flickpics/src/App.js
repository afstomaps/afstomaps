// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VideoPage from './components/VideoPage';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchedVideos = [
      { id: '1', title: 'African History Video 1', videoId: 'ETnIsBnNRr0', thumbnail: 'https://img.youtube.com/vi/ETnIsBnNRr0/0.jpg' },
      { id: '2', title: 'African History Video 2', videoId: 'Srlf_xltWfc', thumbnail: 'https://img.youtube.com/vi/Srlf_xltWfc/0.jpg' },
      { id: '3', title: 'African History Video 3', videoId: 'L4EjZpIF71Y', thumbnail: 'https://img.youtube.com/vi/L4EjZpIF71Y/0.jpg' },
      { id: '4', title: 'African History Video 4', videoId: 'CwaP1kyAqqo', thumbnail: 'https://img.youtube.com/vi/CwaP1kyAqqo/0.jpg' },
      { id: '5', title: 'African History Video 5', videoId: 'A4OSEpexs_Q', thumbnail: 'https://img.youtube.com/vi/A4OSEpexs_Q/0.jpg' },
      { id: '6', title: 'African History Video 6', videoId: 'vCyQgTJ6WgA', thumbnail: 'https://img.youtube.com/vi/vCyQgTJ6WgA/0.jpg' },
      { id: '7', title: 'African History Video 7', videoId: 'VCKPyAHgX7U', thumbnail: 'https://img.youtube.com/vi/VCKPyAHgX7U/0.jpg' },
      { id: '8', title: 'African History Video 8', videoId: 'GlKSp2H0V0w', thumbnail: 'https://img.youtube.com/vi/GlKSp2H0V0w/0.jpg' },
      { id: '9', title: 'African History Video 9', videoId: 'tcF-e6RhLzU', thumbnail: 'https://img.youtube.com/vi/tcF-e6RhLzU/0.jpg' },
      { id: '10', title: 'African History Video 10', videoId: 'shEU4PQUxxA', thumbnail: 'https://img.youtube.com/vi/shEU4PQUxxA/0.jpg' },
      { id: '11', title: 'African History Video 11', videoId: '83tbMJGjndw', thumbnail: 'https://img.youtube.com/vi/83tbMJGjndw/0.jpg' },
      { id: '12', title: 'African History Video 12', videoId: '8hKeMgH6A34', thumbnail: 'https://img.youtube.com/vi/8hKeMgH6A34/0.jpg' },
      { id: '13', title: 'African History Video 13', videoId: 'GdSupLM4zAA', thumbnail: 'https://img.youtube.com/vi/GdSupLM4zAA/0.jpg' },
      { id: '14', title: 'African History Video 14', videoId: '_KKnpSnXRxo', thumbnail: 'https://img.youtube.com/vi/_KKnpSnXRxo/0.jpg' },
      { id: '15', title: 'African History Video 15', videoId: 'oyhjwXlKpAc', thumbnail: 'https://img.youtube.com/vi/oyhjwXlKpAc/0.jpg' },
      { id: '16', title: 'African History Video 16', videoId: 'ajI8lkYdmAk', thumbnail: 'https://img.youtube.com/vi/ajI8lkYdmAk/0.jpg' },
      { id: '17', title: 'African History Video 17', videoId: 'kyIUs8hJpy0', thumbnail: 'https://img.youtube.com/vi/kyIUs8hJpy0/0.jpg' },
      { id: '18', title: 'African History Video 18', videoId: 'fLL5xt2c-0I', thumbnail: 'https://img.youtube.com/vi/fLL5xt2c-0I/0.jpg' },
      { id: '19', title: 'African History Video 19', videoId: 'W0v_SwObQns', thumbnail: 'https://img.youtube.com/vi/W0v_SwObQns/0.jpg' },
      { id: '20', title: 'African History Video 20', videoId: 'tlwGz3BgUZM', thumbnail: 'https://img.youtube.com/vi/tlwGz3BgUZM/0.jpg' },
      { id: '21', title: 'African History Video 21', videoId: 'OkxsyzYPJkA', thumbnail: 'https://img.youtube.com/vi/OkxsyzYPJkA/0.jpg' },
    ].sort((a, b) => parseInt(a.id) - parseInt(b.id));
    setVideos(fetchedVideos);
  }, []);

  return (
    <Router basename="/flickpics">
      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="/video/:id" element={<VideoPage videos={videos} />} />
      </Routes>
    </Router>
  );
}

export default App;