const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the game app!');
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
