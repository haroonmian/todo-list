module.exports = (sequelize, DataTypes) => {
    let Todo = sequelize.define("Todo", {
        id:{
            type:DataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        text:DataTypes.STRING(300),
        createdAt:DataTypes.DATE,
    })
    // Post.associate = function(models) {
    //   Post.belongsTo(models.User, {
    //     onDelete: "CASCADE",
    //     foreignKey: "userId",
    //   })
    // }
    return Todo
  }