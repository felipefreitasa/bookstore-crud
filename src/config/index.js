import dotenv from  'dotenv';

dotenv.config();

const enviromentVariables = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
};

export default enviromentVariables