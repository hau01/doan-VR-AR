import Navigation from '../components/Navigation'

const Home = () => {
  return (
    <main style={styles.page}>
      <Navigation />
      <section style={styles.hero}>
        <h1>Welcome to VR/AR Experience</h1>
        <p>Explore immersive scenes and interactive hotspots.</p>
      </section>
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
  hero: {
    display: 'grid',
    placeItems: 'center',
    minHeight: '70vh',
    textAlign: 'center'
  }
}

export default Home
