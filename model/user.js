/**
 * user.js
 * @description :: sequelize model of database table user
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const { convertObjectToEnum } = require('../utils/common');
const bcrypt = require('bcrypt');
let User = sequelize.define('user',{
  id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    unique:true
  },
  username:{ type:DataTypes.STRING },
  password:{
    type:DataTypes.STRING,
    defaultValue:'123456'
  },
  email:{ type:DataTypes.STRING },
  honorifics:{ type:DataTypes.STRING },
  name:{ type:DataTypes.STRING },
  userType:{ type:DataTypes.INTEGER },
  isActive:{ type:DataTypes.BOOLEAN },
  isDeleted:{ type:DataTypes.BOOLEAN },
  createdAt:{ type:DataTypes.DATE },
  updatedAt:{ type:DataTypes.DATE },
  addedBy:{ type:DataTypes.INTEGER },
  updatedBy:{ type:DataTypes.INTEGER },
  regionId:{ type:DataTypes.INTEGER },
  subRegionId:{ type:DataTypes.INTEGER },
  nationality:{ type:DataTypes.INTEGER },
  primaryTag:{ type:DataTypes.INTEGER },
  position:{ type:DataTypes.TEXT },
  organisation:{ type:DataTypes.TEXT },
  street:{ type:DataTypes.TEXT },
  city:{ type:DataTypes.STRING },
  officePhone:{ type:DataTypes.STRING },
  pointPerson:{ type:DataTypes.STRING },
  pointEmail:{ type:DataTypes.STRING },
  facebookID:{ type:DataTypes.STRING },
  instagramID:{ type:DataTypes.STRING },
  twitterID:{ type:DataTypes.STRING },
  linkedInID:{ type:DataTypes.STRING },
  biography:{ type:DataTypes.TEXT },
  picture:{ type:DataTypes.STRING },
  ambassadorStatus:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  ambassadorCertificate:{ type:DataTypes.STRING },
  appointmentDate:{ type:DataTypes.DATE },
  gender:{ type:DataTypes.STRING },
  birthDate:{ type:DataTypes.DATE },
  religion:{ type:DataTypes.STRING },
  upfPosition:{ type:DataTypes.STRING },
  previousPosition:{ type:DataTypes.STRING },
  highestEducation:{ type:DataTypes.STRING },
  leadershipStatus:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  otherTags:{ type:DataTypes.STRING },
  mobileNo:{ type:DataTypes.STRING },
  googleId:{ type:DataTypes.STRING }
}
,{
  hooks:{
    beforeCreate: [
      async function (user,options){
        if (user.password){ user.password =
          await bcrypt.hash(user.password, 8);}
        user.isActive = true;
        user.isDeleted = false;

      },
    ],
    beforeBulkCreate: [
      async function (user,options){
        if (user !== undefined && user.length) { 
          for (let index = 0; index < user.length; index++) { 
            const element = user[index];
            if (element.password){ 
              element.password = await bcrypt.hash(element.password, 8);
            }
            element.isActive = true; 
            element.isDeleted = false; 
  
          } 
        }
      },
    ],
    afterCreate: [
      async function (user,options){
        sequelize.model('userAuthSettings').create({ userId:user.id });
      },
    ],
  }
}
);
User.prototype.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};
User.prototype.toJSON = function () {
  let values = Object.assign({}, this.get());
  delete values.password;
  return values;
};
sequelizeTransforms(User);
sequelizePaginate.paginate(User);
module.exports = User;
