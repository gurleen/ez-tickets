'use strict';
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('Venue', {
        name: DataTypes.STRING,
        location: DataTypes.STRING,
        description: DataTypes.STRING
    })

    Venue.associate = function(models) {
        models.Venue.hasMany(models.Event, {
            onDelete: "CASCADE"
        })
    }

    return Venue
};