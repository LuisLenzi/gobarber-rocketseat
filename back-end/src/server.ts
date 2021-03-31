import express, { request } from 'express'

const app = express();
const port = 3333;

app.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Hello World'
  })
})

app.listen(port, () => {
  console.log(`\n [🚀] - Server is running on\n [💻] - http://localhost:${port}`)
})