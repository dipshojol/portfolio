// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').parse();
// }

const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//connecting mongodb
// process.env.DATABASE_URL

mongoose.connect('mongodb://localhost:27017/portfolio', {
    useNewUrlParser: true })
.then(()=>{
    console.log('mongodb is now connected.');
}).catch((err)=>{
    console.error(`some error: ${err}`);
})

//import routes
const generalRoute = require("./routes/general");

app.use(express.static('public'));
// load all route modules
app.use("/", generalRoute);

const PORT = 8080;
app.listen(process.env.PORT || PORT);