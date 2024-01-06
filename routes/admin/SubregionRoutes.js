/**
 * SubregionRoutes.js
 * @description :: CRUD API routes for Subregion
 */

const express = require('express');
const router = express.Router();
const SubregionController = require('../../controller/admin/SubregionController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/subregion/create').post(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.addSubregion);
router.route('/admin/subregion/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.bulkInsertSubregion);
router.route('/admin/subregion/list').post(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.findAllSubregion);
router.route('/admin/subregion/count').post(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.getSubregionCount);
router.route('/admin/subregion/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.getSubregion);
router.route('/admin/subregion/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.updateSubregion);    
router.route('/admin/subregion/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.partialUpdateSubregion);
router.route('/admin/subregion/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.bulkUpdateSubregion);
router.route('/admin/subregion/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.softDeleteSubregion);
router.route('/admin/subregion/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.softDeleteManySubregion);
router.route('/admin/subregion/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.deleteSubregion);
router.route('/admin/subregion/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,SubregionController.deleteManySubregion);

module.exports = router;
