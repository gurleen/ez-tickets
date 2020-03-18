var express = require('express');
var models = require('../models');
var router = express.Router();
const passport = require('passport');

const doAuth = passport.authenticate('jwt', { session: false });

/* GET user's orders */
router.get('/', doAuth, function(req, res, next) {
    models.Order.findAll({
        attributes: ['id', 'quantity', 'EventId', 'createdAt'],
        where: {
            userId: req.user.id
        }
    }).then(function(orders) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(orders))
    })
})

/* GET order by ID */
router.get('/:id', function(req, res, next) {
    models.Order.findAll({
        attributes: ['id', 'name', 'location', 'description'],
        where: {
            id: req.params['id'],
        }
    }).then(function(order) {
        if (order.length === 0) {
            res.status(500).send({ error: "No such order exists." })
            return
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(venue))
    })
})

/* Create new order */
router.post('/create', doAuth, async function(req, res, next) {
    const event = await models.Event.findOne({
        where: { id: req.body.eventId }
    })

    let ticketsAvailable = event.tickets - event.ticketsSold
    if (ticketsAvailable === 0) {
        res.status(500).send({ error: "Event is sold out." })
        return
    } else if (req.body.quantity > ticketsAvailable) {
        res.status(500).send({ error: "Not enough tickets available." })
        return
    }

    event.ticketsSold += req.body.quantity;
    event.save();

    models.Order.create({
        quantity: req.body.quantity,
        total: req.body.quantity * event.price,
        UserId: req.user.id,
        EventId: req.body.eventId
    }).then(function(order) {
        res.status(200).json({
            "success": true,
            "order": order
        })
    })
})

module.exports = router;