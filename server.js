const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;
const cors = require("cors");
const path = require("path");

//Requiring routes
const authUser = require("./routes/auth");
const level = require("./routes/levels");

mongoose.connect(db, {useNewUrlParser : true,
    useUnifiedTopology: true,
    useCreateIndex : true})
.then(() => console.log('Database connected'))
.catch((err) => {
    console.log(err);
})

app.use(express.urlencoded({
    extended : false
}));

app.use(bodyParser.json());

app.use(cors());
app.use("/user",authUser);
app.use("/",level);

app.use("/public",express.static('public'));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
console.log(process.env.PORT);

var server = app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});