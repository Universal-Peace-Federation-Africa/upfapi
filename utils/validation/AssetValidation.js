/**
 * AssetValidation.js
 * @description :: validate each post and put request as per Asset model
 */

const joi = require('joi');
const {
  options, isCountOnly, include, select 
} = require('./commonFilterValidation');

/** validation keys and properties of Asset */
exports.schemaKeys = joi.object({
  nameAsset: joi.string().allow(null).allow(''),
  typeAsset: joi.string().allow(null).allow(''),
  photoAsset: joi.string().allow(null).allow(''),
  nameOwner: joi.string().allow(null).allow(''),
  dateEstablishment: joi.any(),
  dateAcquired: joi.any(),
  purposeUse: joi.any(),
  purchaseValue: joi.any(),
  currentValue: joi.any(),
  recordsLegalDocs: joi.any(),
  legalDocs: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  nationId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  regionId: joi.number().integer().allow(0)
}).unknown(true);

/** validation keys and properties of Asset for updation */
exports.updateSchemaKeys = joi.object({
  nameAsset: joi.string().allow(null).allow(''),
  typeAsset: joi.string().allow(null).allow(''),
  photoAsset: joi.string().allow(null).allow(''),
  nameOwner: joi.string().allow(null).allow(''),
  dateEstablishment: joi.any(),
  dateAcquired: joi.any(),
  purposeUse: joi.any(),
  purchaseValue: joi.any(),
  currentValue: joi.any(),
  recordsLegalDocs: joi.any(),
  legalDocs: joi.string().allow(null).allow(''),
  isDeleted: joi.boolean(),
  isActive: joi.boolean(),
  nationId: joi.number().integer().allow(0),
  subRegionId: joi.number().integer().allow(0),
  regionId: joi.number().integer().allow(0),
  id: joi.number().integer()
}).unknown(true);

let keys = ['query', 'where'];
/** validation keys and properties of Asset for filter documents from collection */
exports.findFilterKeys = joi.object({
  options: options,
  ...Object.fromEntries(
    keys.map(key => [key, joi.object({
      nameAsset: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      typeAsset: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      photoAsset: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      nameOwner: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      dateEstablishment: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      dateAcquired: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      purposeUse: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      purchaseValue: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      currentValue: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      recordsLegalDocs: joi.alternatives().try(joi.array().items(),joi.any(),joi.object()),
      legalDocs: joi.alternatives().try(joi.array().items(),joi.string(),joi.object()),
      isDeleted: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      isActive: joi.alternatives().try(joi.array().items(),joi.boolean(),joi.object()),
      nationId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      subRegionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      regionId: joi.alternatives().try(joi.array().items(),joi.number().integer(),joi.object()),
      id: joi.any()
    }).unknown(true),])
  ),
  isCountOnly: isCountOnly,
  include: joi.array().items(include),
  select: select
    
}).unknown(true);
