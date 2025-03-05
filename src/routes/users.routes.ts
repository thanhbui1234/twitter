import { Router, Response, Request } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers.ts'
import { loginValidator } from '~/middlewares/users.middlewares.ts'

const usersRouter = Router()

usersRouter.post('/login', loginValidator, loginController)
usersRouter.post('/register', registerController)

export default usersRouter
