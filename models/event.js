'use strict'

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        date: DataTypes.DATE,
        tickets: DataTypes.INTEGER
    })

    Event.associate = function(models) {
        models.Event.belongsTo(models.Venue, {
            onDelete: "CASCADE"
        })
        models.Event.hasOne(models.Ticket, {
            onDelete: "CASCADE"
        })
    }

    return Event
}