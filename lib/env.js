import * as dotenv from 'dotenv'
dotenv.config()

export const GET_ENV = (name) => {
  try {
    return process.env[name]
  } catch (e) {
    return null
  }
}
