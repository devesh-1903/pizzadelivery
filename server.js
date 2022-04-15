const express = require('express');
const Pizza = require('./models/pizzaModel')

const app = express();
const db = require("./db.js")
app.use(express.json());
const path = require('path')
const pizzaRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


app.use('/api/pizzas/',pizzaRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)
if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`)

//Run app, then load http://localhost:5000 in a browser to see the output.