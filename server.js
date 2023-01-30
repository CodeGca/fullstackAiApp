const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
app.use(cors());
app.use(express.json());
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

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});
const User = mongoose.model('User', userSchema);
const user = new User({
    username: 'jack',
    password: '12345'
})
user.save((error)=>{
    if(error) throw error;
    console.log('New user has been saved to the database successfully')
})

app.get('/', (req, res) => {
    res.send('Welcome to the game app!');
});
app.post('/', (req, res)=>{
    const {username, password} = req.body;
    const user = new User({
        username,
        password
    })
    user.save((error)=>{
        if(error){
            res.status(500).send(error);
        }else{
            res.send('User saved to the database');
        }
    })
})
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
