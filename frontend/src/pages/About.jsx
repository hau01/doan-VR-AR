import Navigation from '../components/Navigation'

const About = () => {
  return (
    <main style={styles.page}>
      <Navigation />
      <section style={styles.content}>
        <h1>About This Project</h1>
        <p>
          This project is a starter template for building a VR/AR tour experience
          with a React frontend and an Express backend.
        </p>
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
  content: {
    maxWidth: '900px',
    margin: '40px auto'
  }
}

export default About
