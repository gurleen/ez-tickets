'use strict'

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        quantity: DataTypes.INTEGER,
        total: DataTypes.DOUBLE
    })

    Order.associate = function(models) {
        models.Order.belongsTo(models.User, {
            onDelete: "CASCADE"
        })
        models.Order.belongsTo(models.Event, {
            onDelete: "CASCADE"
        })
    }

    return Order
}