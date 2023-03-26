const express = require('express')
const app = express()
let buffer =[];
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/sam', (req, res) => {
    const key = req.query.pass;
    buffer.push(key);
    // if (key=="2550") {
    //     res.send('auth successful');
    // } else {
    //     res.send('auth failed');
    // }

    res.send(buffer[buffer.length-1]);
})
app.listen(process.env.PORT || 3000)