/**
 * Asset.js
 * @description :: sequelize model of database table Asset
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Asset = sequelize.define('Asset',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  nameAsset:{ type:DataTypes.STRING },
  typeAsset:{ type:DataTypes.STRING },
  photoAsset:{ type:DataTypes.STRING },
  nameOwner:{ type:DataTypes.STRING },
  dateEstablishment:{ type:DataTypes.DATEONLY },
  dateAcquired:{ type:DataTypes.DATEONLY },
  purposeUse:{ type:DataTypes.TEXT },
  purchaseValue:{ type:DataTypes.DOUBLE },
  currentValue:{ type:DataTypes.DOUBLE },
  recordsLegalDocs:{ type:DataTypes.TEXT },
  legalDocs:{ type:DataTypes.STRING },
  isDeleted:{ type:DataTypes.BOOLEAN },
  isActive:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  nationId:{ type:DataTypes.INTEGER },
  subRegionId:{ type:DataTypes.INTEGER },
  regionId:{ type:DataTypes.INTEGER }
}
,{
  hooks:{
    beforeCreate: [
      async function (Asset,options){
        Asset.isActive = true;
        Asset.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Asset,options){
        if (Asset !== undefined && Asset.length) { 
          for (let index = 0; index < Asset.length; index++) { 
        
            const element = Asset[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Asset.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Asset);
sequelizePaginate.paginate(Asset);
module.exports = Asset;
