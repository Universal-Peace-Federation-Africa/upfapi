/**
 * NationValidation.js
 * @description :: validate each post and put request as per Nation model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Nation */
exports.schemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  subRegionId: joi.number().integer().allow(0),
  regionId: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean()
}).unknown(true);

/** validation keys and properties of Nation for updation */
exports.updateSchemaKeys = joi.object({
  name: joi.string().allow(null).allow(''),
  subRegionId: joi.number().integer().allow(0),
  regionId: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Nation for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      name: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      subRegionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      regionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
