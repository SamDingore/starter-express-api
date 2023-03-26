const express = require('express')
const app = express()
let buffer =[];
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/s', (req, res) => {
    const key = req.query.m;
    buffer.push("s " + key);
    // if (key=="2550") {
    //     res.send('auth successful');
    // } else {
    //     res.send('auth failed');
    // }

    res.send(buffer);
})

app.get('/g', (req, res) => {
    const key = req.query.m;
    buffer.push("g: "+ key);
    // if (key=="2550") {
    //     res.send('auth successful');
    // } else {
    //     res.send('auth failed');
    // }

    res.send(buffer);
})
app.listen(process.env.PORT || 3000)