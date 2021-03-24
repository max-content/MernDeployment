const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routes/beltexam.routes')(app);
// app.all('*', (req,res) => {
//     console.log(req.method, req.route);
//     res.json({message: "howdy"})
// })

app.listen(port, () => console.log(`Listening on port: ${port}`) );