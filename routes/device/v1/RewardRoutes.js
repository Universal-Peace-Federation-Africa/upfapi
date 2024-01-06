/**
 * RewardRoutes.js
 * @description :: CRUD API routes for Reward
 */

const express = require('express');
const router = express.Router();
const RewardController = require('../../../controller/device/v1/RewardController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/reward/create').post(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.addReward);
router.route('/device/api/v1/reward/list').post(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.findAllReward);
router.route('/device/api/v1/reward/count').post(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.getRewardCount);
router.route('/device/api/v1/reward/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.getReward);
router.route('/device/api/v1/reward/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.updateReward);    
router.route('/device/api/v1/reward/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.partialUpdateReward);
router.route('/device/api/v1/reward/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.softDeleteReward);
router.route('/device/api/v1/reward/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.softDeleteManyReward);
router.route('/device/api/v1/reward/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.bulkInsertReward);
router.route('/device/api/v1/reward/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.bulkUpdateReward);
router.route('/device/api/v1/reward/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.deleteReward);
router.route('/device/api/v1/reward/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,RewardController.deleteManyReward);

module.exports = router;
