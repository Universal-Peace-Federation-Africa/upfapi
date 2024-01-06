/**
 * Nation.js
 * @description :: sequelize model of database table Nation
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Nation = sequelize.define('Nation',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  name:{ type:DataTypes.STRING },
  subRegionId:{ type:DataTypes.INTEGER },
  regionId:{ type:DataTypes.INTEGER },
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
      async function (Nation,options){
        Nation.isActive = true;
        Nation.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Nation,options){
        if (Nation !== undefined && Nation.length) { 
          for (let index = 0; index < Nation.length; index++) { 
        
            const element = Nation[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Nation.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Nation);
sequelizePaginate.paginate(Nation);
module.exports = Nation;
