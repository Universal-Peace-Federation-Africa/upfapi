/**
 * ActivityValidation.js
 * @description :: validate each post and put request as per Activity model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Activity */
exports.schemaKeys = joi.object({
  eventScale: joi.string().allow(null).allow(''),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  duration: joi.number().integer().allow(0),
  name: joi.string().allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  theme: joi.string().allow(null).allow(''),
  host: joi.string().allow(null).allow(''),
  regionId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  nationId: joi.number().integer().allow(0),
  city: joi.string().allow(null).allow(''),
  numberParticipants: joi.number().integer().allow(0),
  coverImage: joi.string().allow(null).allow(''),
  status: joi.boolean().default(false),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  participantId: joi.number().integer().allow(0)
}).unknown(true);

/** validation keys and properties of Activity for updation */
exports.updateSchemaKeys = joi.object({
  eventScale: joi.string().allow(null).allow(''),
  date: joi.date().options({ convert: true }).allow(null).allow(''),
  duration: joi.number().integer().allow(0),
  name: joi.string().allow(null).allow(''),
  type: joi.string().allow(null).allow(''),
  theme: joi.string().allow(null).allow(''),
  host: joi.string().allow(null).allow(''),
  regionId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  nationId: joi.number().integer().allow(0),
  city: joi.string().allow(null).allow(''),
  numberParticipants: joi.number().integer().allow(0),
  coverImage: joi.string().allow(null).allow(''),
  status: joi.boolean().default(false),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  participantId: joi.number().integer().allow(0),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Activity for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      eventScale: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      date: joi.alternatives().try(joi.array().items(),joi.date().options({ convert: true }),joi.object()),
      duration: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      type: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      theme: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      host: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      regionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      subRegionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      nationId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      city: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      numberParticipants: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      coverImage: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      status: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      participantId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
