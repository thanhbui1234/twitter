import { Router, Response, Request } from 'express'
import { loginController } from '~/controllers/login.controllers.ts'
import { loginValidator } from '~/middlewares/users.middlewares.ts'

const usersRouter = Router()

usersRouter.get('/tweets', loginValidator, loginController)

export default usersRouter
