import { Request, Response } from 'express'
import User from '~/models/schemas/User.schema.ts'
import databaseService from '~/services/database.services.ts'

export const loginController = (req: Request, res: Response) => {
  console.log('vl')

  res.json({
    message: 'Login sucess'
  })
}

export const registerController = async (req: Request, res: Response) => {
  const { email, password } = req.body
  try {
    const result = await databaseService.users.insertOne(
      new User({
        email,
        password
      })
    )
    console.log('result', result)

    res.json({
      mesage: 'REGISTER SUCCESS'
    })
  } catch (error) {
    res.status(400).json({
      error: 'register filed'
    })
  }
}
