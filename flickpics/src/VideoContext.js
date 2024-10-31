// src/VideoContext.js
import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Dummy data with publicly available YouTube video links
    const fetchedVideos = [
      { id: '1', title: 'Open Source Video 1', videoId: 'dQw4w9WgXcQ', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg', releaseDate: '2023-10-01', notes: 'Notes for video 1' },
      { id: '2', title: 'Open Source Video 2', videoId: '3JZ_D3ELwOQ', thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg', releaseDate: '2023-10-02', notes: 'Notes for video 2' },
    ];
    setVideos(fetchedVideos);
  }, []);

  const addVideo = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo }}>
      {children}
    </VideoContext.Provider>
  );
};