import app from "./src/app.js";
import enviromentVariables from './src/config/index.js'

app.listen(enviromentVariables.port, () => {
    console.log(`Server is running at http://localhost:${enviromentVariables.port}`)
})