var express = require('express');
var models = require('../models');
var router = express.Router();
const passport = require('passport');

const doAuth = passport.authenticate('jwt', { session: false });

/* GET all events */
router.get('/', function(req, res, next) {
    models.Event.findAll({
        attributes: ['id', 'title', 'description', 'date', 'price', 'tickets', 'ticketsSold']
    }).then(function(events) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(events))
    })
});

/* GET event by ID */
router.get('/:id', function(req, res, next) {

    models.Event.findAll({
        attributes: ['id', 'title', 'description', 'date', 'price', 'tickets', 'ticketsSold'],
        where: {
            id: req.params['id'],
        }
    }).then(function(event) {
        if (venue.length === 0) {
            res.status(500).send({ error: "No such event exists." })
            return
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(event))
    })
})

/* POST a new event */
router.post('/create', function(req, res) {
    models.Event.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        price: req.body.price,
        tickets: req.body.tickets,
        ticketsSold: 0,
        venueId: req.body.venueId
    }).then(function() {
        res.redirect('/event/')
    })
});

module.exports = router;