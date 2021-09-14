const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors  = require('cors')
const path = require('path')


const app = express()
dotenv.config()

//connecting to  database
mongoose.connect("mongodb+srv://sandy123:sunny@cluster0.dnhmd.mongodb.net/booking-app?retryWrites=true&w=majority", {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('mongodb connected')
}).catch((err) => {
    console.error(err)
})
app.use(express.json())
app.use(cors())


//
app.use('/api', require('./routes/roomRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use('/api/bookings', require('./routes/bookingRoutes'))


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res) => {
    console.log('server is running on port 5000')
})