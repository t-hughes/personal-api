//REQUIRES//
const express = require('express');
const bodyParser = require('body-parser');
const mainCtrl = require('./controllers/mainCtrl.js');
const middleware = require('./controllers/middleware.js');
const port = 2000;
// const cors = require('cors');

//INITIALIZE//
const app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);
// app.use(cors());

//ENDPOINTS//
app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupation);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:id', mainCtrl.getHobbiesOfType);

app.put('/name', mainCtrl.changeName);
app.put('/location', mainCtrl.changeLocation);
app.post('/hobbies', mainCtrl.addHobby);
app.post('/occupations', mainCtrl.addOccupation);

app.get('/skills', mainCtrl.getSkills);
app.get('/skills/:name', mainCtrl.getSkillWithName);

app.post('/skills', middleware.generateId, mainCtrl.addSkill);


app.listen(port,() => {
  console.log(`Taking Flight on the Nimbus Port ${port}`);
});
