const Sequelize=require('sequelize');

const sequelize=new Sequelize('TodoTask','root','password',{host:'127.0.0.1',dialect:'mysql',operatorAliases:false})
module.exports = sequelize;
global.sequelize=sequelize;