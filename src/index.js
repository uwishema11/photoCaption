const app = require('./app.js');
const sequelize = require('./database/config/database.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database successfully');
  } catch (error) {
    console.log('Unable to connect to the database', error);
    console.log(error);
  }
};

connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
