import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDisplay() {
  const { videoUrl } = useParams();

  return (
    <div style={styles.container}>
      <h1>Video Display Page</h1>
      <div style={styles.videoContainer}>
        <video controls autoPlay style={styles.video}>
          <source src={decodeURIComponent(videoUrl)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', 
  },
  videoContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px', 
  },
  video: {
    width: '100%',
    height: 'auto',
  },
};

export default VideoDisplay;
