// const Hotspots = ({ hotspots = [] }) => {
//   return (
//     <div style={styles.container}>
//       {hotspots.map((spot) => (
//         <button
//           key={spot.id}
//           style={{
//             ...styles.hotspot,
//             top: spot.y || '50%',
//             left: spot.x || '50%'
//           }}
//         >
//           {spot.label}
//         </button>
//       ))}
//     </div>
//   )
// }

// const styles = {
//   container: {
//     position: 'relative',
//     width: '100%',
//     height: '100%'
//   },
//   hotspot: {
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//     background: '#ff6b35',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '999px',
//     padding: '6px 10px',
//     cursor: 'pointer'
//   }
// }

// export default Hotspots


// src/components/Hotspots.jsx
import React, { useState } from 'react';
import './Hotspots.css';

const Hotspot = ({ pitch, yaw, title, description, mediaUrl, type }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="hotspot"
      pitch={pitch}
      yaw={yaw}
      onClick={() => setShowInfo(!showInfo)}
    >
      <div className="hotspot-icon">📍</div>
      
      {showInfo && (
        <div className="hotspot-popup">
          <h4>{title}</h4>
          <p>{description}</p>
          
          {/* Hiển thị media tuỳ theo loại */}
          {type === 'image' && <img src={mediaUrl} alt={title} />}
          {type === 'video' && <video controls src={mediaUrl} />}
          {type === 'audio' && <audio controls src={mediaUrl} />}
        </div>
      )}
    </div>
  );
};

export default Hotspot;