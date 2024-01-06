/**
 * Subregion.js
 * @description :: sequelize model of database table Subregion
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Subregion = sequelize.define('Subregion',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  name:{ type:DataTypes.STRING },
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
      async function (Subregion,options){
        Subregion.isActive = true;
        Subregion.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Subregion,options){
        if (Subregion !== undefined && Subregion.length) { 
          for (let index = 0; index < Subregion.length; index++) { 
        
            const element = Subregion[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Subregion.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Subregion);
sequelizePaginate.paginate(Subregion);
module.exports = Subregion;
