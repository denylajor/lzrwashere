const { DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const UserProfile = sequelize.define("user_profile",{
        idUserProfile:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        idUser:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        namaProfile:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        phone:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        alamat:{
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
        tableName: 'user_profile',
        timestamps: true   
    });

    return UserProfile;
}