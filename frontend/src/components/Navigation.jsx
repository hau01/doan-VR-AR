import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/tour" style={styles.link}>Tour</Link>
      <Link to="/about" style={styles.link}>About</Link>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    gap: '16px',
    padding: '16px 0'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600
  }
}

export default Navigation
