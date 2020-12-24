const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const router = require('./routes/api')
const path = require('path') ;

// app.use(express.static(path.join(__dirname, 'public'))) 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));
app.use("/api",router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

