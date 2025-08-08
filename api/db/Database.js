
const mongoose = require('mongoose');

let instance = null;
class Database {
  constructor() {
    if (!instance) {
        this.mongoConnection = null;
      instance = this;
    }
      return instance;
    
  }
    async connect(connectionString) {
        try {
    console.log('Connecting to the database...');

    let db =await mongoose.connect(connectionString);

    this.mongoConnection = db;
    console.log('Database connected successfully');
    }
    catch (err) {
        console.error(err);
        process.exit(1);
        }
    }
}

module.exports = Database;