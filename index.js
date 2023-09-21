import dotenv from 'dotenv'
import db from './config/db.js'
import app from './app';

dotenv.config({path:'.env'})

const port = process.env.PORT || 3000;
db();


app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
    
  process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
  });
  