const express = require("express");
const dotenv = require("dotenv");
// const TraineeRoute = require("./src/route/trainee.route");
// const UserRoute = require("./src/route/user.route");
const routes = require('./src/route');
dotenv.config();
const app = express();
const port = 5000;
const db = require("./src/config/dbconfig");
app.use(express.urlencoded({ extended: true }));
// app.use("/trainee", TraineeRoute);
// app.use("/user", UserRoute);
app.use(routes);
db.MongoConnect();
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
