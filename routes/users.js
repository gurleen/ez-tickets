'use strict';
var express = require('express');
var models = require('../models');
var router = express.Router();
var jwt = require('jsonwebtoken');
const passport = require('passport');

const doAuth = passport.authenticate('jwt', { session: false });

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

/* Create new user */
router.post('/register', function(req, res, next) {
    models.User.create({
        username: req.body.username,
        password: req.body.password // Don't worry, this is hashed automagically in User model
    }).then(function() {
        res.json({ 'status': 'OK' })
    })
})

/* Login with plaintext username and password, get JWT */
router.post('/login', function(req, res, next) {
    models.User.findOne({
        where: {
            username: req.body.username
        }
    }).then(function(user) {
        if (!user) {
            res.status(500).json({ 'err': 'No such user' })
        }
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) {
                res.json({ 'err': err })
            } else if (isMatch) {
                let payload = { id: user.username }
                let token = jwt.sign(payload, 'changeThisInProduction')
                res.json({ 'success': 'true', 'token': token })
            } else {
                res.json({ 'success': 'false' })
            }
        })
    })
})

/* Verify login with JWT */
router.get('/verify', doAuth, function(req, res, next) {
    if (req.user) {
        res.status(200).json({ 'staus': 'OK' })
    } else {
        res.status(500).json({ 'status': 'ERR' })
    }
})

module.exports = router;