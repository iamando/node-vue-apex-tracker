const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");

// Load .env
dotenv.config();

const app = express();

// Profile routes
app.use("/api/v1/profile", require("./routes/profile"));

const port = process.env.PORT || 8000;
const node_env = process.env.NODE_ENV;

// Dev log
if (node_env == "development") {
  app.use(morgan("dev"));
}

app.listen(port, () => {
  console.log(`App running in ${node_env} on port ${port}`);
});
