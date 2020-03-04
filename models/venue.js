'use strict';
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('venue', {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.STRING
    })
};