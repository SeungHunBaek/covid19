// const express = require("express");
import express from 'express';
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello api Express!" });
});

app.use('/api', (req, res) => {
  res.json({username:'baekCL'})}
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});
