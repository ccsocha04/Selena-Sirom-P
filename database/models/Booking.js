module.exports = (sequelize, DataTypes) => {
    let alias = 'Booking';
    let cols = {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Confirmation: {
            type: DataTypes.INTEGER,
        },
        Guests: {
            type: DataTypes.INTEGER,
        },
        Water: {
            type: DataTypes.INTEGER,
        },
        Soda: {
            type: DataTypes.INTEGER,
        },
        Whiskey: {
            type: DataTypes.INTEGER,
        },
        Wine: {
            type: DataTypes.INTEGER,
        },
        Beer: {
            type: DataTypes.INTEGER,
        },
        Message: {
            type: DataTypes.STRING,
        }
    };
    let config = {
        tableName: 'bookings',
        timestamps: false
    };
    const Booking = sequelize.define(alias, cols, config);
    
    return Booking;
}