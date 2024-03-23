const express = require("express");
const app = express();
const images = require("./routes/images");
const cors = require("cors");

const PORT = 8080;

app.use(express.json()); 
app.use(express.static("public")); 
app.use(cors());
app.use("/images", images);

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on PORT:${PORT}`);
  });
