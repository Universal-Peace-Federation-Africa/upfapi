/**
 * ActivityRoutes.js
 * @description :: CRUD API routes for Activity
 */

const express = require('express');
const router = express.Router();
const ActivityController = require('../../../controller/device/v1/ActivityController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/activity/create').post(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.addActivity);
router.route('/device/api/v1/activity/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.bulkInsertActivity);
router.route('/device/api/v1/activity/list').post(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.findAllActivity);
router.route('/device/api/v1/activity/count').post(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.getActivityCount);
router.route('/device/api/v1/activity/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.getActivity);
router.route('/device/api/v1/activity/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.updateActivity);    
router.route('/device/api/v1/activity/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.partialUpdateActivity);
router.route('/device/api/v1/activity/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.bulkUpdateActivity);
router.route('/device/api/v1/activity/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.softDeleteActivity);
router.route('/device/api/v1/activity/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.softDeleteManyActivity);
router.route('/device/api/v1/activity/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.deleteActivity);
router.route('/device/api/v1/activity/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,ActivityController.deleteManyActivity);

module.exports = router;
