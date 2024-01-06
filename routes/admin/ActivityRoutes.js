/**
 * ActivityRoutes.js
 * @description :: CRUD API routes for Activity
 */

const express = require('express');
const router = express.Router();
const ActivityController = require('../../controller/admin/ActivityController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/activity/create').post(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.addActivity);
router.route('/admin/activity/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.bulkInsertActivity);
router.route('/admin/activity/list').post(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.findAllActivity);
router.route('/admin/activity/count').post(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.getActivityCount);
router.route('/admin/activity/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.getActivity);
router.route('/admin/activity/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.updateActivity);    
router.route('/admin/activity/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.partialUpdateActivity);
router.route('/admin/activity/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.bulkUpdateActivity);
router.route('/admin/activity/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.softDeleteActivity);
router.route('/admin/activity/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.softDeleteManyActivity);
router.route('/admin/activity/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.deleteActivity);
router.route('/admin/activity/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,ActivityController.deleteManyActivity);

module.exports = router;
