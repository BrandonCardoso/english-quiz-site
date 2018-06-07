const Sequelize = require('sequelize')
const dbs = require('../app/dbs')

const Particle = exports.Particle = dbs.language.define('particle', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    particle: {
        type: Sequelize.TEXT,
        allowNull: false
    }

})

// sync
Particle.sync().then(() => console.log('Particle table synced'))

// functions
