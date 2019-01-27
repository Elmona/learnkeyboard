const letters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y',
  'Z', 'Å', 'Ä', 'Ö',
]

const getRandomLetter = () =>
  letters[Math.floor(Math.random() * letters.length)]

export default getRandomLetter