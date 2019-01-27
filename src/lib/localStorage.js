const listName = 'highScore'

const getHighScore = () => {
  const highScore = localStorage.getItem(listName)

  return highScore === null ? [] : JSON.parse(highScore)
}

const setHighScore = (name, time) => {
  let highScore = getHighScore()

  highScore.push({ name: name, time: time })
  highScore = highScore
    .sort((a, b) => a.time - b.time)
    .slice(0, 10)

  localStorage.setItem(listName, JSON.stringify(highScore))
}

const madeItToTheList = time => {
  const highScore = getHighScore()

  if (highScore.length < 10)
    return true

  return Math.max(...highScore.map(a => a.time)) > time
}

export {
  getHighScore,
  setHighScore,
  madeItToTheList,
}