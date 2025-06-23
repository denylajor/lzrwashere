const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const UserTable = sequelize.define("user",{
        idUser:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idUker:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        oldPassword:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        isActive:{
            type:DataTypes.INTEGER,
            allowNull:false,
            defaultValue: 0
        },
        rememberToken:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        createdBy:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        updatedBy:{
            type:DataTypes.STRING,
            allowNull:true,
        },
    },{
        tableName: 'user',
        timestamps: true   
    });

    return UserTable;
}