module.exports = (sequelize, DataTypes) => {
    let alias = 'Guest';
    let cols = {
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Phone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Table: {
            type: DataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'guests',
        timestamps: false
    };
    const Guest = sequelize.define(alias, cols, config);
    
    return Guest;
}