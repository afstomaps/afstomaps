// src/components/VideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './VideoPage.css'; // Import custom CSS

const VideoPage = ({ videos }) => {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  if (!video) return <div>Video not found</div>;

  return (
    <div className="video-page">
      <div className="video-container">
        <iframe
          className="video-iframe"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          allowFullScreen
          title={video.title}
        ></iframe>
      </div>
      <div className="container mt-3">
        <ReactMarkdown>{video.notes}</ReactMarkdown>
      </div>
    </div>
  );
};

export default VideoPage;