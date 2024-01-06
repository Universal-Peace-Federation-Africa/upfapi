/**
 * RewardValidation.js
 * @description :: validate each post and put request as per Reward model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Reward */
exports.schemaKeys = joi.object({
  numberOfBadges: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  recipientNation: joi.number().integer().allow(0),
  recipientSG: joi.number().integer().allow(0)
}).unknown(true);

/** validation keys and properties of Reward for updation */
exports.updateSchemaKeys = joi.object({
  numberOfBadges: joi.number().integer().allow(0),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  recipientNation: joi.number().integer().allow(0),
  recipientSG: joi.number().integer().allow(0),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Reward for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      numberOfBadges: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      recipientNation: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      recipientSG: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
