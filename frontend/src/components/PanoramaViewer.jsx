// const PanoramaViewer = ({ imageUrl, alt = '360 panorama' }) => {
//   return (
//     <div style={styles.viewer}>
//       <img
//         src={imageUrl}
//         alt={alt}
//         style={styles.image}
//       />
//       <div style={styles.overlay}>360° Panorama Viewer</div>
//     </div>
//   )
// }

// const styles = {
//   viewer: {
//     position: 'relative',
//     width: '100%',
//     height: '500px',
//     overflow: 'hidden',
//     borderRadius: '12px',
//     background: '#111'
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover'
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 12,
//     left: 12,
//     background: 'rgba(0, 0, 0, 0.55)',
//     color: '#fff',
//     padding: '8px 12px',
//     borderRadius: '999px'
//   }
// }

// export default PanoramaViewer



// src/components/PanoramaViewer.jsx
import React, { useEffect, useState } from 'react';
import { Pannellum } from 'pannellum-react';
import Hotspots from './Hotspots';
import './PanoramaViewer.css';

const PanoramaViewer = ({ sceneId }) => {
  const [sceneData, setSceneData] = useState(null);
  const [hotspots, setHotspots] = useState([]);

  useEffect(() => {
    // Fetch scene data từ backend
    fetch(`/api/scenes/${sceneId}`)
      .then(res => res.json())
      .then(data => {
        setSceneData(data);
        setHotspots(data.hotspots || []);
      });
  }, [sceneId]);

  if (!sceneData) return <div>Đang tải...</div>;

  return (
    <div className="panorama-container">
      <Pannellum
        width="100%"
        height="600px"
        image={sceneData.imageUrl}
        pitch={10}
        yaw={0}
        hfov={110}
        autoLoad
        mouseZoom={true}
        showControls={true}
      >
        {/* Render hotspots */}
        {hotspots.map((hotspot, idx) => (
          <Hotspot
            key={idx}
            {...hotspot}
          />
        ))}
      </Pannellum>
      
      {/* Navigation menu */}
      <NavigationMenu onSceneChange={onSceneChange} />
    </div>
  );
};

export default PanoramaViewer;