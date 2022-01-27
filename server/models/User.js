// const Sequelize=require('sequelize');
// module.exports=sequelize.define('Todo',{
//     id:{
//         type:Sequelize.INTEGER(11),
//         allowNull:false,
//         autoIncrement:true,
//         primaryKey:true
//     },
//     text:Sequelize.STRING(300)
// })

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userName: {
            type: DataTypes.TEXT(191),
            allowNull: false,
            unique: true
        },
        fullName: DataTypes.TEXT(191),
        createdAt:DataTypes.DATE

    })
   
    return User
}