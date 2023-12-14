const PORT = 5000
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.get('/', (req, res) => {
    res.json("Welcome to the API")
})

app.get('/sites', (req, res) =>{
    
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))