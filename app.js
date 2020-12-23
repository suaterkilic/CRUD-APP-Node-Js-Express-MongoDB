const express       = require('express');
const morgan        = require('morgan');
const mongoose      = require('mongoose');
const userRoutes    = require('./routes/userRoutes');

// express init

const app = express();
const DB_URI = 'mongodb+srv://user_hexa:streetart34@nodeclusterone.fljqi.mongodb.net/db_user_crud?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then((result) => app.listen(3001))
.catch((error) => console.log(error));


app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.urlencoded({
    extended: true
}))


/**
 * User routers
 */
app.use(userRoutes)


