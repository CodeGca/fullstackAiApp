const express = require('express');
const app = express();
const mongoose = require('mongoose');

// mongodb+srv://everest:<password>@cluster0.gst1zlc.mongodb.net/?retryWrites=true&w=majority

const connectionString = "mongodb+srv://everest:QAZwsx123@cluster0.gst1zlc.mongodb.net/?retryWrites=true&w=majority";

// way 1 <connected to mongooseDB>
// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB Atlas");
// });

// way 2 <connected to mongooseDB>
async function connect(){
    try{
        await mongoose.connect(connectionString,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('connected to mongooseDB');
    }catch{
        console.error(error);
    }
}
connect();

app.get('/', (req, res) => {
    res.send('Welcome to the game app!');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
