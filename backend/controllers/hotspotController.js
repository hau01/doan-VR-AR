const sampleHotspots = [
  {
    id: 1,
    sceneId: 1,
    label: 'Go to Scene 2',
    x: '50%',
    y: '30%'
  },
  {
    id: 2,
    sceneId: 1,
    label: 'Info Point',
    x: '70%',
    y: '60%'
  }
]

export const getHotspots = (req, res) => {
  res.json(sampleHotspots)
}
