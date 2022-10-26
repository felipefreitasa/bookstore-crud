import express from "express"
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on(
    "error",
     console.log.bind(console, 'Error at data base connection')
)

db.once(
    "open",
     () => { console.log("Successful database connection") }
)

const app = express()
app.use(express.json())

routes(app)

export default app