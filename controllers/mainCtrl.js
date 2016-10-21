user = require('../models/user.js');

module.exports = {
    getName(req, res, next) {
        return res.status(200).json({name: personal.name});
    },
     getLocation(req, res, next) {
        return res.status(200).json({location: personal.location});
    },
     getOccupations(req, res, next) {
        return res.status(200).json({occupations: personal.occupations});
    },
     getLatestOccupation(req, res, next) {
        return res.status(200).json({occupations: personal.occupations[personal.occupations.length - 1]});
    },
     getHobbies(req, res, next) {
        return res.status(200).json({hobbies: personal.hobbies } );
    },
     getHobbiesByType(req, res, next) {
        let results = personal.hobbies.filter(hobby => {
          if (req.params.type === hobby.type) {
            return true;
          }
          return false;
        } );
        return res.status(200).json({hobbies: results});
    },
     sortOccupations(req, res, next) {
        if ( req.query.order === 'desc' ) {
          return res.status(200).json(personal.occupations.sort());
        }
        else if (req.query.order === 'asc') {
          return res.json(personal.occupations.reverse());
        }
    },
     changeName(req, res, next) {
        personal.name = req.params.name;
        return res.status(200).json( personal );
    },
     changeLocation(req, res, next) {
        personal.location = req.params.location;
        return res.status(200).json(personal);
    }
    , addHobby(req, res, next) {
        personal.hobbies.push( { name: req.body.name, type: req.body.type } );
        return res.status(200).json(personal);
    },
     addOccupation(req, res, next) {
        personal.occupations.push(req.body.occupation);
        return res.status(200).json(personal);
    },

     getSkills(req, res, next) {
        return res.status(200).json(skills);
    },
     getSkillsByExperience(req, res, next) {
        let results = [];
        for ( let i = 0; i < skills.length; i++ ) {
            if (req.query.experience === skills[ i ].experience) {
                results.push( skills[ i ] );
            }
        }
        return res.status(200).json(results);
    },
     addSkills(req, res, next) {
        skills.push( {
          id: req.body.id,
           name: req.body.name,
           experience: req.body.experience
        } );
        return res.status(200).json(skills);
    },
     getSkillsLength() {
        return skills.length;
    },

     searchHobbies(req, res, next) {
        let hobbies = personal.hobbies.filter( hobby => req.query.hobby === hobby.name);
        return res.status(200).json( hobbies );
    },
     searchOccupations(req, res, next) {
        let occupations = personal.occupations.filter( occupation => req.params.occupation === occupation);
        return res.status(200).json( occupations );
    },
     searchSkills(req, res, next) {
        let someSkills = skills.filter( skill => req.query.name === skill.name);
        return res.status(200).json(someSkills);
    }
