const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let error = 404;
  let ok = 202;

  let option = random(0, 1)

  if (option === 1) {
    res.status(202).send('ERROR 202');
  } else {
    res.status(500).send('ERROR 404');
  }
})

function random(inferior, superior) {
  var possibilities = superior - inferior;
  var random = Math.random() * (possibilities + 1);
  random = Math.floor(random);
  return inferior + random;
}

app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`)
})