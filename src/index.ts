import express from 'express'
import usersRouter from '~/routes/users.routes.ts'
const app = express()

const port = 3000

// body sent data type json so we need to parse it express.json
app.use(express.json())

app.use('/user', usersRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
