var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET all venues. */
router.get('/', function(req, res, next) {
    models.Venue.findAll().then(function(venues) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(venues))
    })
});

/* POST a new venue */
router.post('/create', function(req, res) {
    models.Venue.create({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description
    }).then(function() {
        res.redirect('/venue/')
    })
});

module.exports = router;