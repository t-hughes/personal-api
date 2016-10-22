const user = require('../models/user.js');
// const mainCtrl = require('./controllers/mainCtrl.js');

module.exports = {
    addHeaders(req, res, next) {
        res.status(200).set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'X-XSS-Protection': '1; mode=block',
            'X-Frame-Options': 'SAMEORIGIN',
            'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        });

        next();
    },
    generateId(req, res, next) {
        req.body.id = skill.length + 1;
        next();
    },
    verifyUser(req, res, next) {
        if (req.body.username === 'thughes' && parseInt(req.body.pin) === 1234) {
            next();
        } else {
            res.status(404).json({
                'error': 'not authorized'
            });
        }
    }
};