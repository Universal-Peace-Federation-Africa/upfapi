/**
 * SubregionRoutes.js
 * @description :: CRUD API routes for Subregion
 */

const express = require('express');
const router = express.Router();
const SubregionController = require('../../../controller/device/v1/SubregionController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/subregion/create').post(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.addSubregion);
router.route('/device/api/v1/subregion/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.bulkInsertSubregion);
router.route('/device/api/v1/subregion/list').post(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.findAllSubregion);
router.route('/device/api/v1/subregion/count').post(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.getSubregionCount);
router.route('/device/api/v1/subregion/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.getSubregion);
router.route('/device/api/v1/subregion/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.updateSubregion);    
router.route('/device/api/v1/subregion/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.partialUpdateSubregion);
router.route('/device/api/v1/subregion/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.bulkUpdateSubregion);
router.route('/device/api/v1/subregion/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.softDeleteSubregion);
router.route('/device/api/v1/subregion/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.softDeleteManySubregion);
router.route('/device/api/v1/subregion/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.deleteSubregion);
router.route('/device/api/v1/subregion/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,SubregionController.deleteManySubregion);

module.exports = router;
