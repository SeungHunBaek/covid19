const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT || 3001;
const router = require('./routes/api')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('short'));

// const config = require('config');
// console.log(config.get('title'));
// app.use("api",api);

// app.get("/test", (req, res) => {
//   console.log("Backend api()==============================");
//   console.log(WOLRD_API);
//   let worldData = callWorldData();
//   res.send({ message: "Hello api Express!" });
//   console.log("==========================================")
// });
// function callWorldData(){
//   request(WOLRD_API,(error, res, body)=>{
//     console.log("callWorldData()")
//     console.log("[res]: "+res);
//     console.log("[body]: "+body);
//     console.log("=============================");
//   })
// }

// app.use('/api', (req, res) => {
//   res.json({username:'baekCL'})}
// );

// app.use('/koreaData', (req, res) => {
//   console.log("koreaData()");
//   res.json({username:'koreaData'})
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.use("/api",router);