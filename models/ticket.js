'use strict'
module.exports = (sequelize, Datatypes) => {
    const Ticket = sequelize.define('ticket',{
        title = Datatypes.STRING,
        description = Datatypes.TEXT,
        price = Datatypes.FLOAT,
        date = Datatypes.DATEONLY,
        time = Datatypes.DATE,
        owner = Datatypes.STRING.allowNull
    }
    )
}
Event.hasOne(Ticket, {
    foreignKey: ''
  });
Ticket.belongsTo(Venue);