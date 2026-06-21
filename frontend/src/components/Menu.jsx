const Menu = ({ items = [] }) => {
  return (
    <aside style={styles.menu}>
      <h3 style={styles.title}>Menu</h3>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item} style={styles.item}>{item}</li>
        ))}
      </ul>
    </aside>
  )
}

const styles = {
  menu: {
    width: '240px',
    background: '#f5f5f5',
    padding: '16px',
    borderRadius: '12px'
  },
  title: {
    margin: '0 0 12px'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  item: {
    padding: '8px 0'
  }
}

export default Menu
