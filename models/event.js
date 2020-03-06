'use strict'
module.exports = (sequelize, Datatypes) => {
    const Event = sequelize.define('event',{
        title = Datatypes.STRING,
        description = Datatypes.TEXT,
        date = Datatypes.DATEONLY,
        time = Datatypes.DATE,
        tickets = Datatypes.INTEGER
    }
    )
}
Venue.hasOne(Event, {
    foreignKey: 'time'
  });
  Event.belongsTo(Venue);