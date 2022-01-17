const express = require("express");
const cors = require("cors");

// Init
const app = express();
const PORT = process.env.PORT || 5000;

// Database
require("./db").connect();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
require("./routes/mongo")(app);
require("./routes/marketingcloud")(app);

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
