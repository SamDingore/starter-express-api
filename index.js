const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.get('/sam', (req, res) => {
    const key = req.query.pass;
    if (key=="2550") {
        res.send('auth successful');
    } else {
        res.send('auth failed');
    }
})
app.listen(process.env.PORT || 3000)