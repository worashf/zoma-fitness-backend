
const express = require('express');
const env = require("dotenv");

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
;


const User_route = require('./route/User-route');
const PlayList_route =require('./route/PlayList-route');
const Video_route = require('./route/Video-route')

const app = express();

//environment variable or you can say constants

const DB_HOST="mongodb://127.0.0.1:27017/zoma_fitness_db"
const PORT=8081
// database connection
const connect = mongoose.connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true,    useCreateIndex: true,
  useFindAndModify: false, })
  .then(() => console.log('MongoDB Connected...'))

  .catch(err => console.log(err));

//midleware
app.use(cors());
app.use(express.json());
//route
app.use('/api', User_route)
app.use('/api', PlayList_route)
app.use('/api', Video_route)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });