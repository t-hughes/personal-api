user = require('../models/user.js');
skills = require('../models/skillz');
secrets = require('../models/secrets');

module.exports = {
    getName(req, res, next) {
        res.status(200).json({
            'name': user.name
        });
    },
    getLocation(req, res, next) {
        res.status(200).json({
            'location': user.location
        });
    },
    getOccupations: function(req, res, next) {
        switch (req.query.order) {
            case 'asc':
                var occupations = user.occupations.sort();
                break;
            case 'desc':
                var occupations = user.occupations.reverse();
                break;
            default:
                var occupations = user.occupations;
                break;
        }

        switch (req.query.name) {
            case 'Husband':
                var nameQueriedOccupations = 'Husband';
                break;
            case 'Father':
                var nameQueriedOccupations = 'Father';
                break;
            case 'Ninja Jedi Starlord Programmer':
                var nameQueriedOccupations = 'Ninja Jedi Starlord Programmer';
                break;
            default:
                var nameQueriedOccupations = occupations;
                break;
        }

        res.status(200).json({
            'occupations': nameQueriedOccupations
        });

    },
    getLatestOccupation(req, res, next) {
        res.status(200).json({
            'latestOccupation': user.occupations[user.occupations.length - 1]
        });
    },
    getHobbies(req, res, next) {
        res.status(200).json({
            'hobbies': user.hobbies
        });
    },
    getHobbiesByType(req, res, next) {
        let type = req.params.type;
        let results = user.hobbies.filter(hobby => {
            return hobby.type === type;
        });
        res.status(200).json({
            'hobbies': results
        });
    },
    changeName(req, res, next) {
        user.name = req.params.name;
        res.status(200).json({
            'name': user.name
        });
    },
    changeLocation(req, res, next) {
        user.location = req.params.location;
        res.status(200).json({
            'location': user.location
        });
    },
    addHobby(req, res, next) {
        user.hobbies.push({
            'name': req.body.name,
            'type': req.body.type
        });
        res.status(200).json({
            'hobbies': user.hobbies
        });
    },
    addOccupation(req, res, next) {
        user.occupations.push(req.body.occupation);
        res.status(200).json({
            'occupations': user.occupations
        });
    },

    getSkillsByExperience(req, res, next) {
        let exp = req.query.experience;
        let result = exp ? skills.filter(skill => {
            return skill.experience === exp;
        }) : skills;
        res.status(200).json(result);
    },
    getSkills(req, res, next) {
        let name = req.params.name;
        let results = skills.filter(skill => {
            return skill.name === name;
        });
        res.status(200).json(results);
    },
    addSkills(req, res, next) {
        skills.push({
            'id': req.body.id,
            'name': req.body.name,
            'experience': req.body.experience
        });
        res.status(200).json(skills);
    },
    getSecrets(req, res, next) {
        res.status(200).json(secrets);
    },
    searchHobbies(req, res, next) {
        let hobbies = personal.hobbies.filter(hobby => req.query.hobby === hobby.name);
         res.status(200).json(hobbies);
    },
     searchOccupations(req, res, next) {
        let occupations = personal.occupations.filter( occupation => req.params.occupation === occupation);
         res.status(200).json(occupations);
    },
     searchSkills(req, res, next) {
        let someSkills = skills.filter(skill => req.query.name === skill.name);
         res.status(200).json(someSkills);
    }

};
