'use strict'

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        quantity: DataTypes.INTEGER
    })

    Order.associate = function(models) {
        models.Order.belongsTo(models.User, {
            onDelete: "CASCADE"
        })
        models.Order.hasOne(models.Event)
    }

    return Order
}