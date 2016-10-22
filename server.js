//PACKAGE REQUIRES
var express = require('express');
    bodyParser = require('body-parser');
    port = 2000;

//INITIALIZE
var app = express();

//MIDDLEWARE & CONTROLLERS
var user = require('./models/user'),
    skills = require('./models/skills'),
    secrets = require('./models/secrets'),
    mainCtrl = require('./controllers/mainCtrl'),
    middleware = require('./controllers/middleware');

//GLOBAL MIDDLEWARE
app.use(bodyParser.json());
app.use(middleware.addHeaders);

//GET ENDPOINTS
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbies);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamily);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurants);
app.get('/skills', mainCtrl.getSkills);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);


//PUT ENDPOINTS
app.put('/name/:name', mainCtrl.updateName);
app.put('/location', mainCtrl.updateLocation);

//POST ENDPOINTS
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations/:occupation', mainCtrl.addOccupation);
app.post('/family', mainCtrl.addFamily);
app.post('/restaurants', mainCtrl.addRestaurant);
app.post('/skills', middleware.generateId, mainCtrl.addSkill);


//BLACK DIAMOND STEP 8
// app.get('/hobbies/hobby', mainCtrl.searchHobbies);
// app.get('/occupations/:occupation', mainCtrl.searchOccupations);
// app.get('/skills/:name', mainCtrl.searchSkills);


app.listen(port, function(){
  console.log('Taking Flight On The Nimbus Port ' + port + '!');
});
