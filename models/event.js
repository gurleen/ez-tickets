'use strict'

module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        date: DataTypes.DATE,
        price: DataTypes.DOUBLE,
        tickets: DataTypes.INTEGER,
        ticketsSold: DataTypes.INTEGER
    })

    Event.associate = function(models) {
        models.Event.belongsTo(models.Venue, {
            onDelete: "CASCADE"
        })
    }

    return Event
}