/**
 * Region.js
 * @description :: sequelize model of database table Region
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Region = sequelize.define('Region',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  name:{ type:DataTypes.STRING },
  isDeleted:{ type:DataTypes.BOOLEAN },
  isActive:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER }
}
,{
  hooks:{
    beforeCreate: [
      async function (Region,options){
        Region.isActive = true;
        Region.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Region,options){
        if (Region !== undefined && Region.length) { 
          for (let index = 0; index < Region.length; index++) { 
        
            const element = Region[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Region.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Region);
sequelizePaginate.paginate(Region);
module.exports = Region;
