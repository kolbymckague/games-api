const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const games = {
    "demon's souls":{
        'release': 2009,
        'genre': 'Action role-playing',
        'developer': 'FromSoftware',
        'completion': '89 hours'
    },
    'sekrio: shadows die twice': {
        'release': 2019,
        'genre': 'Action Adventure',
        'developer': 'FromSoftware',
        'completion': '78 hours',
    },
    'elden ring': {
        'release': 2022,
        'genre': 'Action role-playing',
        'developer': 'FromSoftware',
        'completion': '104.5 hours',
    },
    'dota 2': {
        'release': 2013,
        'genre': 'MOBA',
        'developer': 'Steam',
        'completion': '11,655'        
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api:name', (request, response) => {
    const gameNames = request.params.name.toLowerCase()
    if (games[gameNames]) {
        response.json(games[gameNames])
    } else {
        response.json(games['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})