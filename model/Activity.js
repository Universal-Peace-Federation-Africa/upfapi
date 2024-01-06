/**
 * Activity.js
 * @description :: sequelize model of database table Activity
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
let Activity = sequelize.define('Activity',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  eventScale:{ type:DataTypes.STRING },
  date:{ type:DataTypes.DATE },
  duration:{ type:DataTypes.INTEGER },
  name:{ type:DataTypes.STRING },
  type:{ type:DataTypes.STRING },
  theme:{ type:DataTypes.STRING },
  host:{ type:DataTypes.STRING },
  regionId:{ type:DataTypes.INTEGER },
  subRegionId:{ type:DataTypes.INTEGER },
  nationId:{ type:DataTypes.INTEGER },
  city:{ type:DataTypes.STRING },
  numberParticipants:{ type:DataTypes.INTEGER },
  coverImage:{ type:DataTypes.STRING },
  status:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  isDeleted:{ type:DataTypes.BOOLEAN },
  isActive:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  participantId:{ type:DataTypes.INTEGER }
}
,{
  hooks:{
    beforeCreate: [
      async function (Activity,options){
        Activity.isActive = true;
        Activity.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (Activity,options){
        if (Activity !== undefined && Activity.length) { 
          for (let index = 0; index < Activity.length; index++) { 
        
            const element = Activity[index]; 
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
  }
}
);
Activity.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  return values;
};
sequelizeTransforms(Activity);
sequelizePaginate.paginate(Activity);
module.exports = Activity;
