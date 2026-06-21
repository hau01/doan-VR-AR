const sampleScenes = [
  {
    id: 1,
    title: 'Scene 1',
    description: 'Welcome to the first scene',
    imageUrl: '/images/360/scene-1.jpg'
  },
  {
    id: 2,
    title: 'Scene 2',
    description: 'Second stop in the tour',
    imageUrl: '/images/360/scene-2.jpg'
  }
]

export const getScenes = (req, res) => {
  res.json(sampleScenes)
}
