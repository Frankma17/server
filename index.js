const express = require('express')
const app = express()
const port = 3000

res.status(500).send('error saving');

app.get('/', (req, res) => {
  res.sendStatus(404);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})