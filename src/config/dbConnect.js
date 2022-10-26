import mongoose from 'mongoose'
import enviromentVariables from './index.js'

mongoose.connect(enviromentVariables.dbUrl)
                  
const db = mongoose.connection

export default db