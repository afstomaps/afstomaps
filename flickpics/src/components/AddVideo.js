// src/components/AddVideo.js
import React, { useState, useContext } from 'react';
import { VideoContext } from '../VideoContext';

const AddVideo = () => {
  const { addVideo } = useContext(VideoContext);
  const [videoUrl, setVideoUrl] = useState('');
  const [notes, setNotes] = useState('');

  const extractVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
      } else if (urlObj.hostname === 'www.youtube.com' || urlObj.hostname === 'youtube.com') {
        return urlObj.searchParams.get('v');
      }
    } catch (error) {
      return null;
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
      const newVideo = {
        id: videoId,
        title: `Video ${videoId}`,
        videoId: videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
        releaseDate: new Date().toISOString(),
        notes: notes,
      };
      addVideo(newVideo);
      alert('Video added successfully!');
      setVideoUrl('');
      setNotes('');
    } else {
      alert('Invalid YouTube URL');
    }
  };

  return (
    <div className="add-video">
      <h2>Add a New Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="videoUrl">YouTube URL:</label>
          <input
            type="text"
            id="videoUrl"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
};

export default AddVideo;