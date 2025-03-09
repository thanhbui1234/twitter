import { NextFunction, Request, Response } from 'express'
import User from '~/models/schemas/User.schema.ts'
import databaseService from '~/services/database.services.ts'
import userService from '~/services/user.services.ts'
import { ParamsDictionary } from 'express-serve-static-core'
import { registerRequestBody } from '~/models/requests/User.request.ts'
export const loginController = (req: Request, res: Response) => {
  console.log('vl')

  res.json({
    message: 'Login sucess'
  })
}

export const registerController = async (
  req: Request<ParamsDictionary, any, registerRequestBody>,
  res: any,
  next: NextFunction
): Promise<void> => {
  throw new Error('lỗi rồi')
  const result = await userService.registerUser(req.body)
  console.log('result', result)

  res.status(201).json({ message: 'User registered successfully', result })
}
