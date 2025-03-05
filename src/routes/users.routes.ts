import { Router, Response, Request } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers.ts'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares.ts'
import { validate } from '~/utils/validation.ts'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)

/**
 * Description : Register user.
 * Path: /register
 * Method : Post
 * Body : { name : string , email: string , v.v}
 */
usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
