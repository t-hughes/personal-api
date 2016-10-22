var skills = require('../models/skills');

module.exports = {
    addHeaders: function(req, res, next) {
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
    generateId: function(req, res, next) {
        req.body.id = skills.skills.length +1;
        next();
    },
    verifyUser: function(req, res, next) {
        var username = 'thughes';
        var pin = '1234';
        if(req.params.username === uername && parseInt(req.params.pin) ===pin) {
          next();
        }
        res.status(401).json('Unauthorized User');
      }
};
