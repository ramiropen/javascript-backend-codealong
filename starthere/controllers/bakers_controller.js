// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker_seed.js')

// Index: 
baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    

baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData) // updates the db
        .then(res.redirect('/breads')) // redirects us to the route /breads
})

// Show: 
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id) // gets data from database
        .populate('breads') // gets the full bread object, not just the bread id
        .then(foundBaker => {
            // render bakerShow view
            res.render('bakerShow', {
                baker: foundBaker // provide database data to the view
            })
        })
})

// export
module.exports = baker                    