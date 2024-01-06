/**
 * RegionRoutes.js
 * @description :: CRUD API routes for Region
 */

const express = require('express');
const router = express.Router();
const RegionController = require('../../controller/admin/RegionController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/region/create').post(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.addRegion);
router.route('/admin/region/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.bulkInsertRegion);
router.route('/admin/region/list').post(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.findAllRegion);
router.route('/admin/region/count').post(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.getRegionCount);
router.route('/admin/region/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.getRegion);
router.route('/admin/region/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.updateRegion);    
router.route('/admin/region/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.partialUpdateRegion);
router.route('/admin/region/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.bulkUpdateRegion);
router.route('/admin/region/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.softDeleteRegion);
router.route('/admin/region/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.softDeleteManyRegion);
router.route('/admin/region/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.deleteRegion);
router.route('/admin/region/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,RegionController.deleteManyRegion);

module.exports = router;
