import { Collection, Db, MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import { UserType } from '~/models/schemas/User.schema.ts'

dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@twitter.q4epr.mongodb.net/?retryWrites=true&w=majority&appName=Twitter`

class DatabaseService {
  private static instance: DatabaseService
  private client: MongoClient
  private isConnected: boolean = false
  private db: Db
  private constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService()
    }
    return DatabaseService.instance
  }

  async connect() {
    if (this.isConnected) {
      console.log('Already connected to MongoDB')
      return
    }

    try {
      await this.db.command({ ping: 1 }) // Kiểm tra kết nối
      this.isConnected = true
      console.log('Connected to MongoDB')
    } catch (error) {
      console.error('MongoDB connection error:', error)
      throw error
    }
  }

  get users(): Collection<UserType> {
    return this.db.collection(process.env.USER_COLLECTION as string)
  }
}

// Export singleton instance
export const databaseService = DatabaseService.getInstance()
export default databaseService
