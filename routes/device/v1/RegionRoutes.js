/**
 * RegionRoutes.js
 * @description :: CRUD API routes for Region
 */

const express = require('express');
const router = express.Router();
const RegionController = require('../../../controller/device/v1/RegionController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/region/create').post(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.addRegion);
router.route('/device/api/v1/region/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.bulkInsertRegion);
router.route('/device/api/v1/region/list').post(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.findAllRegion);
router.route('/device/api/v1/region/count').post(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.getRegionCount);
router.route('/device/api/v1/region/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.getRegion);
router.route('/device/api/v1/region/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.updateRegion);    
router.route('/device/api/v1/region/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.partialUpdateRegion);
router.route('/device/api/v1/region/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.bulkUpdateRegion);
router.route('/device/api/v1/region/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.softDeleteRegion);
router.route('/device/api/v1/region/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.softDeleteManyRegion);
router.route('/device/api/v1/region/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.deleteRegion);
router.route('/device/api/v1/region/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,RegionController.deleteManyRegion);

module.exports = router;
