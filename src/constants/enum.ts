export enum StatusVerify {
  Unverifield, // have not verify email , default = 0
  Verified, // verified email
  Banned // banned
}
export enum TokenType {
  AccessToken,
  RefreshToken,
  ForgotPasswordToken,
  EmailVerifyToken
}
