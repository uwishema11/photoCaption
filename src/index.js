
import app from './app';
import sequelize from './database/config/database'
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT

const connectToDatabase =async()=>{
    try{
        await sequelize.authenticate();
        console.log('connected to database successfully')
    }
    catch(error){
        console.log("unable to connect to database",error)
        console.log(error)
    }
};
connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});