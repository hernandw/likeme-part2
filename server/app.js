const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");


const PORT = process.env.PORT || 3000

/* const path = require("path"); */

app.use(express.json());
app.use(cors());
app.use('/', routes)


// Aplication React compiles to /client/dist
/* app.use(express.static(path.join(__dirname, "client/dist"))); */




app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
