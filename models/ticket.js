'use strict'

module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        price: DataTypes.FLOAT
    })

    Ticket.associate = function(models) {
        models.Ticket.belongsTo(models.Event, {
            onDelete: "CASCADE"
        })
    }

    return Ticket
}