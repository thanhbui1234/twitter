import express from 'express'
import usersRouter from '~/routes/users.routes.ts'
import databaseService from './services/database.services.ts'
const app = express()

const port = 3000

// body sent data type json so we need to parse it express.json
app.use(express.json())

app.use('/user', usersRouter)

databaseService.connect()

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
