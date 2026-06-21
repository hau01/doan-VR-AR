import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Menu from '../components/Menu'
import PanoramaViewer from '../components/PanoramaViewer'
import Hotspots from '../components/Hotspots'
import { fetchScenes } from '../services/api'

const Tour = () => {
  const [scenes, setScenes] = useState([])

  useEffect(() => {
    fetchScenes()
      .then((data) => setScenes(data))
      .catch((err) => console.error('Failed to fetch scenes:', err))
  }, [])

  return (
    <main style={styles.page}>
      <Navigation />
      <div style={styles.layout}>
        <Menu items={['Scene 1', 'Scene 2', 'Scene 3']} />
        <section style={styles.viewerSection}>
          <PanoramaViewer imageUrl="/images/360/scene-1.jpg" />
          <div style={styles.hotspotLayer}>
            <Hotspots hotspots={[
              { id: 1, label: 'Next', x: '60%', y: '40%' }
            ]} />
          </div>
        </section>
      </div>
      <div>
        <h3>Scenes loaded: {scenes.length}</h3>
      </div>
    </main>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: '#0f172a',
    color: '#fff',
    padding: '24px'
  },
  layout: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start'
  },
  viewerSection: {
    flex: 1,
    position: 'relative'
  },
  hotspotLayer: {
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none'
  }
}

export default Tour
