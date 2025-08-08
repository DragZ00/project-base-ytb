import dotenv from 'dotenv';
dotenv.config();

const config = {
  LOG_LEVEL: process.env.LOG_LEVEL || "debug",
  CONNECTION_STRING: process.env.CONNECTION_STRING || "mongodb://localhost:27017/project_base_ytb"
};

export default config;
