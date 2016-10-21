const user = require('../models/user.js');
const mainCtrl = require('./controllers/mainCtrl.js');

module.exports = {
    addHeaders( req, res, next ) {
        res.status( 200 ).set( {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
          'X-XSS-Protection': '1; mode=block',
          'X-Frame-Options': 'SAMEORIGIN',
          'Content-Security-Policy': "default-src 'self' devmountain.github.io"
        } );

        next();
      },
     generateId(req, res, next) {
        const skillsLength = mainCtrl.getSkillsLength();
        req.body.id = skillsLength + 1;
        console.log(req.body.id);
        next();
    },
     verifyUser(req, res, next) {
        if (req.body.username === 'aplan' && parseInt(req.body.PIN) === 1234 ) {
          next();
        } else {
          return res.status(404).json({ 'error': 'invalid user'});
        }

    }
};
