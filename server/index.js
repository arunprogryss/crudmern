// server using express

const express = require("express");
const cors = require("cors"); 
const connectDB = require("./db/connect.js");
const route = require("./router/route.js");
const app = express();

const PORT = 8080;
MONGO_URL = "mongodb://localhost:27017/usercruds";
app.use(express.json());

app.use(cors());
app.use("/api", route);

const start = async () => {
  try {
    await connectDB(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`server is running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
