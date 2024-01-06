/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

const { USER_TYPES } = require('../../constants/authConstant');
const { convertObjectToEnum } = require('../common');  

/** validation keys and properties of user */
exports.schemaKeys = joi.object({
  username: joi.string().allow(null).allow(''),
  password: joi.string().default('123456').allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  honorifics: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  regionId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  nationality: joi.number().integer().allow(0),
  primaryTag: joi.number().integer().allow(0),
  position: joi.any(),
  organisation: joi.any(),
  street: joi.any(),
  city: joi.string().allow(null).allow(''),
  officePhone: joi.string().allow(null).allow(''),
  pointPerson: joi.string().allow(null).allow(''),
  pointEmail: joi.string().allow(null).allow(''),
  facebookID: joi.string().allow(null).allow(''),
  instagramID: joi.string().allow(null).allow(''),
  twitterID: joi.string().allow(null).allow(''),
  linkedInID: joi.string().allow(null).allow(''),
  biography: joi.any(),
  picture: joi.string().allow(null).allow(''),
  ambassadorStatus: joi.boolean().default(false),
  ambassadorCertificate: joi.string().allow(null).allow(''),
  appointmentDate: joi.date().options({ convert: true }).allow(null).allow(''),
  gender: joi.string().allow(null).allow(''),
  birthDate: joi.date().options({ convert: true }).allow(null).allow(''),
  religion: joi.string().allow(null).allow(''),
  upfPosition: joi.string().allow(null).allow(''),
  previousPosition: joi.string().allow(null).allow(''),
  highestEducation: joi.string().allow(null).allow(''),
  leadershipStatus: joi.boolean().default(false),
  otherTags: joi.string().allow(null).allow(''),
  mobileNo: joi.string().allow(null).allow(''),
  ssoAuth: joi.object({ googleId:joi.string() })
}).unknown(true);

/** validation keys and properties of user for updation */
exports.updateSchemaKeys = joi.object({
  username: joi.string().allow(null).allow(''),
  password: joi.string().default('123456').allow(null).allow(''),
  email: joi.string().allow(null).allow(''),
  honorifics: joi.string().allow(null).allow(''),
  name: joi.string().allow(null).allow(''),
  userType: joi.number().integer().allow(0),
  isActive: joi.boolean(),
  isDeleted: joi.boolean(),
  regionId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  nationality: joi.number().integer().allow(0),
  primaryTag: joi.number().integer().allow(0),
  position: joi.any(),
  organisation: joi.any(),
  street: joi.any(),
  city: joi.string().allow(null).allow(''),
  officePhone: joi.string().allow(null).allow(''),
  pointPerson: joi.string().allow(null).allow(''),
  pointEmail: joi.string().allow(null).allow(''),
  facebookID: joi.string().allow(null).allow(''),
  instagramID: joi.string().allow(null).allow(''),
  twitterID: joi.string().allow(null).allow(''),
  linkedInID: joi.string().allow(null).allow(''),
  biography: joi.any(),
  picture: joi.string().allow(null).allow(''),
  ambassadorStatus: joi.boolean().default(false),
  ambassadorCertificate: joi.string().allow(null).allow(''),
  appointmentDate: joi.date().options({ convert: true }).allow(null).allow(''),
  gender: joi.string().allow(null).allow(''),
  birthDate: joi.date().options({ convert: true }).allow(null).allow(''),
  religion: joi.string().allow(null).allow(''),
  upfPosition: joi.string().allow(null).allow(''),
  previousPosition: joi.string().allow(null).allow(''),
  highestEducation: joi.string().allow(null).allow(''),
  leadershipStatus: joi.boolean().default(false),
  otherTags: joi.string().allow(null).allow(''),
  mobileNo: joi.string().allow(null).allow(''),
  ssoAuth: joi.object({ googleId:joi.string() }),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of user for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      username: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      password: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      email: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      honorifics: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      userType: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      regionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      subRegionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      nationality: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      primaryTag: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      position: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      organisation: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      street: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      city: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      officePhone: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      pointPerson: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      pointEmail: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      facebookID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      instagramID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      twitterID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      linkedInID: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      biography: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      picture: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ambassadorStatus: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      ambassadorCertificate: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      appointmentDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      gender: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      birthDate: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      religion: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      upfPosition: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      previousPosition: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      highestEducation: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      leadershipStatus: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      otherTags: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      mobileNo: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      ssoAuth: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
