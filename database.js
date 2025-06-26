require('dotenv').config()
const mongoose = require('mongoose');

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('mongoose database is ready!') })
  .catch(err => { console.log('could not connect to database') }) ;
