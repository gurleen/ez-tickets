var express = require('express');
var models = require('../models');
var router = express.Router();

/* GET all venues */
router.get('/', function(req, res, next) {
    models.Venue.findAll({
        attributes: ['id', 'name', 'location', 'description']
    }).then(function(venues) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(venues))
    })
});

/* GET venue by ID */
router.get('/:id', function(req, res, next) {

    models.Venue.findAll({
        attributes: ['id', 'name', 'location', 'description'],
        where: {
            id: req.params['id'],
        }
    }).then(function(venue) {
        if (venue.length === 0) {
            res.status(500).send({ error: "No such venue exists." })
            return
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(venue))
    })
})

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