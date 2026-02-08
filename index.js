const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("BucketSound Backend Running 🔥");
});

app.listen(PORT, () => {
  console.log("서버 켜짐: http://localhost:" + PORT);
});
