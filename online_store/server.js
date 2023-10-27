 const dotenv = require('dotenv');
 const app = require('./app');
 const mongoose=require('mongoose');
 dotenv.config({ path: './config.env' });


 const DB ="mongodb+srv://hvkisusername:siuj4KMxE5ol6btF@cluster0.h6qdcr4.mongodb.net/"
 mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this option
  })
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.error('DB connection error:', err));

 const port = process.env.PORT || 3000;
 const server = app.listen(port, () => {
   console.log(`App running on port ${port}...`);
 });