/**
 * RewardController.js
 * @description :: exports action methods for Reward.
 */

const Reward = require('../../model/Reward');
const RewardSchemaKey = require('../../utils/validation/RewardValidation');
const validation = require('../../utils/validateRequest');
const dbService = require('../../utils/dbService');
const models = require('../../model');
const utils = require('../../utils/common');

/**
 * @description : create record of Reward in SQL table.
 * @param {Object} req : request including body for creating record.
 * @param {Object} res : response of created record.
 * @return {Object} : created Reward. {status, message, data}
 */ 
const addReward = async (req, res) => {
  try {
    let dataToCreate = { ...req.body || {} };
    let validateRequest = validation.validateParamsWithJoi(
      dataToCreate,
      RewardSchemaKey.schemaKeys);
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    } 
    dataToCreate.addedBy = req.user.id;
    delete dataToCreate['updatedBy'];
        
    let createdReward = await dbService.createOne(Reward,dataToCreate);
    return  res.success({ data :createdReward });
  } catch (error) {
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : create multiple records of Reward in SQL table.
 * @param {Object} req : request including body for creating records.
 * @param {Object} res : response of created records.
 * @return {Object} : created Rewards. {status, message, data}
 */
const bulkInsertReward = async (req, res)=>{
  try {
    let dataToCreate = req.body.data;   
    if (dataToCreate !== undefined && dataToCreate.length){
      dataToCreate = dataToCreate.map(item=>{
        delete item.updatedBy;
        item.addedBy = req.user.id;
              
        return item;
      });
      let createdReward = await dbService.createMany(Reward,dataToCreate); 
      return  res.success({ data :{ count :createdReward.length || 0 } });       
    }
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find all records of Reward from table based on query and options.
 * @param {Object} req : request including option and query. {query, options : {page, limit, includes}, isCountOnly}
 * @param {Object} res : response contains data found from table.
 * @return {Object} : found Reward(s). {status, message, data}
 */
const findAllReward = async (req, res) => {
  try {
    let dataToFind = req.body;
    let options = {};
    let query = {};
    let foundReward;
    let validateRequest = validation.validateFilterWithJoi(
      dataToFind,
      RewardSchemaKey.findFilterKeys,
      Reward.tableAttributes
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToFind && dataToFind.query !== undefined) {
      query = dataToFind.query;
    }
    if (dataToFind && dataToFind.isCountOnly){
      foundReward = await dbService.count(Reward, query);
      if (!foundReward) {
        return res.recordNotFound();
      } 
      foundReward = { totalRecords: foundReward };
      return res.success({ data :foundReward });
    }
    if (dataToFind && dataToFind.options !== undefined) {
      options = dataToFind.options;
    }
    foundReward = await dbService.paginate( Reward,query,options);
    if (!foundReward){
      return res.recordNotFound();
    }
    return res.success({ data:foundReward }); 
  }
  catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : find record of Reward from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains record retrieved from table.
 * @return {Object} : found Reward. {status, message, data}
 */
const getReward = async (req, res) => {
  try { 
    let id = req.params.id;
    let foundReward = await dbService.findOne(Reward,{ id :id });
    if (!foundReward){
      return res.recordNotFound();
    }
    return  res.success({ data :foundReward });

  } catch (error){
    return res.internalServerError();
  }
};

/**
 * @description : returns total number of records of Reward.
 * @param {Object} req : request including where object to apply filters in request body 
 * @param {Object} res : response that returns total number of records.
 * @return {Object} : number of records. {status, message, data}
 */
const getRewardCount = async (req, res) => {
  try {
    let dataToCount = req.body;
    let where = {};
    let validateRequest = validation.validateFilterWithJoi(
      dataToCount,
      RewardSchemaKey.findFilterKeys,
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message: `${validateRequest.message}` });
    }
    if (dataToCount && dataToCount.where){
      where = dataToCount.where;
    }  
    let countedReward = await dbService.count(Reward,where);
    if (!countedReward){
      return res.recordNotFound();
    }
    return res.success({ data :{ count :countedReward } });

  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }
};

/**
 * @description : update record of Reward with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Reward.
 * @return {Object} : updated Reward. {status, message, data}
 */
const updateReward = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body || {} };
    let query = {};
    delete dataToUpdate.addedBy;
    if (!req.params || !req.params.id) {
      return res.badRequest({ message : 'Insufficient request parameters! id is required.' });
    }          
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RewardSchemaKey.schemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    query = { id:req.params.id };
    let updatedReward = await dbService.update(Reward,query,dataToUpdate);
    return  res.success({ data :updatedReward }); 
  } catch (error){
    return res.internalServerError({ data:error.message }); 
  }    
};

/**
 * @description : update multiple records of Reward with data by id.
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Rewards.
 * @return {Object} : updated Rewards. {status, message, data}
 */
const bulkUpdateReward = async (req, res)=>{
  try {
    let filter = req.body && req.body.filter ? { ...req.body.filter } : {};
    let dataToUpdate = {};
    if (req.body && typeof req.body.data === 'object' && req.body.data !== null) {
      dataToUpdate = {
        ...req.body.data,
        updatedBy:req.user.id
      };
    }
    let updatedReward = await dbService.update(Reward,filter,dataToUpdate);
    if (!updatedReward){
      return res.recordNotFound();
    }
    return  res.success({ data :{ count :updatedReward.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : partially update record of Reward with data by id;
 * @param {Object} req : request including id in request params and data in request body.
 * @param {Object} res : response of updated Reward.
 * @return {Object} : updated Reward. {status, message, data}
 */
const partialUpdateReward = async (req, res) => {
  try {
    let dataToUpdate = { ...req.body, };
    delete dataToUpdate.addedBy;
    dataToUpdate.updatedBy = req.user.id;
    let validateRequest = validation.validateParamsWithJoi(
      dataToUpdate,
      RewardSchemaKey.updateSchemaKeys
    );
    if (!validateRequest.isValid) {
      return res.validationError({ message : `Invalid values in parameters, ${validateRequest.message}` });
    }
    const query = { id:req.params.id };
    let updatedReward = await dbService.update(Reward, query, dataToUpdate);
    if (!updatedReward) {
      return res.recordNotFound();
    }
    return res.success({ data : updatedReward });
  } catch (error){
    return res.internalServerError({ message:error.message });
  }
};

/**
 * @description : deactivate record of Reward from table by id;
 * @param {Object} req : request including id in request params.
 * @param {Object} res : response contains updated record of Reward.
 * @return {Object} : deactivated Reward. {status, message, data}
 */
const softDeleteReward = async (req, res) => {
  try {
    query = { id:req.params.id };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id
    };
    let result = await dbService.update(Reward, query,updateBody);
    if (!result){
      return res.recordNotFound();
    }
    return  res.success({ data :result });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : delete record of Reward from table.
 * @param {Object} req : request including id as request param.
 * @param {Object} res : response contains deleted record.
 * @return {Object} : deleted Reward. {status, message, data}
 */
const deleteReward = async (req, res) => {
  const result = await dbService.deleteByPk(Reward, req.params.id);
  return  res.success({ data :result });
};

/**
 * @description : delete records of Reward in table by using ids.
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains no of records deleted.
 * @return {Object} : no of records deleted. {status, message, data}
 */
const deleteManyReward = async (req, res) => {
  try {
    let dataToDelete = req.body;
    if (!dataToDelete || !dataToDelete.ids) {
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }              
    let query = { id:{ $in:dataToDelete.ids } };
    let deletedReward = await dbService.destroy(Reward,query);
    return res.success({ data :{ count :deletedReward.length } });
  }
  catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

/**
 * @description : deactivate multiple records of Reward from table by ids;
 * @param {Object} req : request including array of ids in request body.
 * @param {Object} res : response contains updated records of Reward.
 * @return {Object} : number of deactivated documents of Reward. {status, message, data}
 */
const softDeleteManyReward = async (req, res) => {
  try {
    let ids = req.body.ids;
    if (!ids){
      return res.badRequest({ message : 'Insufficient request parameters! ids is required.' });
    }
    const query = { id:{ $in:ids } };
    const updateBody = {
      isDeleted: true,
      updatedBy: req.user.id,
    };
    const options = {};
    let updatedReward = await dbService.update(Reward,query,updateBody, options);
    if (!updatedReward) {
      return res.recordNotFound();
    }
    return  res.success({ data :{ count: updatedReward.length } });
  } catch (error){
    return res.internalServerError({ message:error.message });  
  }
};

module.exports = {
  addReward,
  bulkInsertReward,
  findAllReward,
  getReward,
  getRewardCount,
  updateReward,
  bulkUpdateReward,
  partialUpdateReward,
  softDeleteReward,
  deleteReward,
  deleteManyReward,
  softDeleteManyReward,
};
