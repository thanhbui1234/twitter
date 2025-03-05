import { NextFunction, Request, Response } from 'express'
import User from '~/models/schemas/User.schema.ts'
import databaseService from '~/services/database.services.ts'

export const loginController = (req: Request, res: Response) => {
  console.log('vl')

  res.json({
    message: 'Login sucess'
  })
}

export const registerController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    next(error)
  }
}
