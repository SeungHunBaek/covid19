// const http = require('http'); // 서버를 만드는 모듈 불러옴
// http.createServer((request, response) => { // 서버 만드는 메소드
//   console.log('server start!');
// }).listen(8080);

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello Express!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));



// // const express = require("express");
// import express from 'express';
// const bodyParser = require("body-parser");
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 3001;
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// app.use(cors());
//
// app.get("/api/hello", (req, res) => {
//   res.send({ message: "Hello api Express!" });
// });
//
// app.use('/api', (req, res) => {
//   res.json({username:'baekCL'})}
// );
//
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// });
