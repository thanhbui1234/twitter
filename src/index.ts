import express, { NextFunction, Request, Response } from 'express'
import usersRouter from '~/routes/users.routes.ts'
import databaseService from './services/database.services.ts'
const app = express()

const port = 3000

// body sent data type json so we need to parse it express.json
app.use(express.json())

app.use('/user', usersRouter)

databaseService.connect()

app.use((err: any, req: any, res: any, next: any) => {
  console.log('lỗi ', err.message)
  res.status(404).json({
    err: err.message
  })
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
