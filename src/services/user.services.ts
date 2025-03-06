import User from '~/models/schemas/User.schema.ts'
import databaseService from './database.services.ts'

class UserService {
  async registerUser(payload: { email: string; password: string }) {
    const { email, password } = payload
    const result = await databaseService.users.insertOne(new User({ email, password }))
    return result
  }

  async checkEmailExit(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
}
const userService = new UserService()
export default userService
