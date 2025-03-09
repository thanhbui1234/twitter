import User from '~/models/schemas/User.schema.ts'
import databaseService from './database.services.ts'
import { registerRequestBody } from '~/models/requests/User.request.ts'
import { hashPassword } from '~/utils/crypto.ts'
import { signToken } from '~/utils/jwt.ts'
import { TokenType } from '~/constants/enum.ts'
import { StringValue } from '~/utils/type.ts'

class UserService {
  private signAccessToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.AccessToken
      },
      options: {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN as StringValue
      }
    })
  }

  private signRefreshToken(user_id: string) {
    return signToken({
      payload: {
        user_id,
        token_type: TokenType.RefreshToken
      },
      options: {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN as StringValue
      }
    })
  }

  async registerUser(payload: registerRequestBody) {
    const result = await databaseService.users.insertOne(
      new User({ ...payload, date_of_birth: new Date(payload.date_of_birth), password: hashPassword(payload.password) })
    )
    const user_id = result.insertedId.toString()
    const [access_token, refresh_token] = await Promise.all([
      this.signAccessToken(user_id),
      this.signRefreshToken(user_id)
    ])

    return {
      access_token,
      refresh_token
    }
  }

  async checkEmailExit(email: string) {
    const user = await databaseService.users.findOne({ email })
    return Boolean(user)
  }
}
const userService = new UserService()
export default userService
