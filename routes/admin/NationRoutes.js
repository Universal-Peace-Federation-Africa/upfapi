/**
 * NationRoutes.js
 * @description :: CRUD API routes for Nation
 */

const express = require('express');
const router = express.Router();
const NationController = require('../../controller/admin/NationController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/nation/create').post(auth(PLATFORM.ADMIN),checkRolePermission,NationController.addNation);
router.route('/admin/nation/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,NationController.bulkInsertNation);
router.route('/admin/nation/list').post(auth(PLATFORM.ADMIN),checkRolePermission,NationController.findAllNation);
router.route('/admin/nation/count').post(auth(PLATFORM.ADMIN),checkRolePermission,NationController.getNationCount);
router.route('/admin/nation/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,NationController.getNation);
router.route('/admin/nation/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,NationController.updateNation);    
router.route('/admin/nation/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,NationController.partialUpdateNation);
router.route('/admin/nation/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,NationController.bulkUpdateNation);
router.route('/admin/nation/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,NationController.softDeleteNation);
router.route('/admin/nation/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,NationController.softDeleteManyNation);
router.route('/admin/nation/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,NationController.deleteNation);
router.route('/admin/nation/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,NationController.deleteManyNation);

module.exports = router;
