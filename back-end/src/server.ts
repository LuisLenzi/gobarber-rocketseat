import express from 'express'
import routes from './routes/index'

const app = express();
const port = 3333;

app.use(express.json())
app.use(routes);

app.listen(port, () => {
  console.log(`\n [🚀] - Server is running\n [💻] - http://localhost:${port}`)
})
