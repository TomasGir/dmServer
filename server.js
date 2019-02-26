const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const apiDataMonsters  = 'database/monsters.json';
const apiDataSpells  = 'database/spells.json';
const apiDataClasses  = 'database/classes.json';
const apiDataConditions  = 'database/conditions.json';
const apiDataLanguages  = 'database/languages.json';
const apiDataLevels  = 'database/levels.json';
const apiDataProficiencies  = 'database/proficiencies.json';
const apiDataRaces  = 'database/races.json';
const apiDataSkills  = 'database/skills.json';
const apiDataSpellcasting  = 'database/spellcasting.json';
const apiDataAbilityScores = 'database/abilityScores.json';
const apiDataEquipment = 'database/equipment.json';
const apiDataEquipmentCategories = 'database/equipmentCategories.json';
const apiDataFeatures = 'database/features.json';
const apiDataMagicSchools = 'database/magicSchools.json';
const apiDataStartingEquipment = 'database/startingEquipment.json';
const apiDataSubclasses = 'database/subclasses.json';
const apiDataSubraces = 'database/subraces.json';
const apiDataTraits = 'database/traits.json';
const apiDataWeaponProperties = 'database/weaponProperties.json';

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/monsters').get((req, res) => {
    fs.readFile(apiDataMonsters, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/monsters/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataMonsters, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/spells').get((req, res) => {
    fs.readFile(apiDataSpells, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/spells/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataSpells, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/classes').get((req, res) => {
    fs.readFile(apiDataClasses, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/classes/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataClasses, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/conditions').get((req, res) => {
    fs.readFile(apiDataConditions, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/conditions/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataConditions, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/languages').get((req, res) => {
    fs.readFile(apiDataLanguages, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/languages/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataLanguages, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/levels').get((req, res) => {
    fs.readFile(apiDataLevels, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/levels/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataLevels, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/proficiencies').get((req, res) => {
    fs.readFile(apiDataProficiencies, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/proficiencies/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataProficiencies, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/races').get((req, res) => {
    fs.readFile(apiDataRaces, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/races/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataRaces, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/skills').get((req, res) => {
    fs.readFile(apiDataSkills, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/skills/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataSkills, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/spellcasting').get((req, res) => {
    fs.readFile(apiDataSpellcasting, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/spellcasting/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataSpellcasting, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/abilityScores').get((req, res) => {
    fs.readFile(apiDataAbilityScores, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/abilityScores/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataAbilityScores, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/equipment').get((req, res) => {
    fs.readFile(apiDataEquipment, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/equipment/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataEquipment, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/equipmentCategories').get((req, res) => {
    fs.readFile(apiDataEquipmentCategories, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/equipmentCategories/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataEquipmentCategories, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/features').get((req, res) => {
    fs.readFile(apiDataFeatures, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/features/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataFeatures, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/magicSchools').get((req, res) => {
    fs.readFile(apiDataMagicSchools, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/magicSchools/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataMagicSchools, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/startingEquipment').get((req, res) => {
    fs.readFile(apiDataStartingEquipment, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/startingEquipment/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataStartingEquipment, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/subclasses').get((req, res) => {
    fs.readFile(apiDataSubclasses, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/subclasses/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataSubclasses, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/subraces').get((req, res) => {
    fs.readFile(apiDataSubraces, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/subraces/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataSubraces, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/traits').get((req, res) => {
    fs.readFile(apiDataTraits, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/traits/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataTraits, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.route('/api/weaponProperties').get((req, res) => {
    fs.readFile(apiDataWeaponProperties, (err, data) => {
        res.send(
            JSON.parse(data.toString())
        );
    });
});

app.route('/api/weaponProperties/:index').get((req, res) => {
    const id = req.params.index - 1;
    fs.readFile(apiDataWeaponProperties, (err, data) => {
        res.send(
            JSON.parse(data.toString())[id]
        );
    });
});

app.use(bodyParser.json());
app.route('/api/monsters').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/monsters/:index').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/monsters/:index').delete((req, res) => {
    res.sendStatus(204);
});