/**
 * NationRoutes.js
 * @description :: CRUD API routes for Nation
 */

const express = require('express');
const router = express.Router();
const NationController = require('../../../controller/device/v1/NationController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/nation/create').post(auth(PLATFORM.DEVICE),checkRolePermission,NationController.addNation);
router.route('/device/api/v1/nation/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,NationController.bulkInsertNation);
router.route('/device/api/v1/nation/list').post(auth(PLATFORM.DEVICE),checkRolePermission,NationController.findAllNation);
router.route('/device/api/v1/nation/count').post(auth(PLATFORM.DEVICE),checkRolePermission,NationController.getNationCount);
router.route('/device/api/v1/nation/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,NationController.getNation);
router.route('/device/api/v1/nation/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,NationController.updateNation);    
router.route('/device/api/v1/nation/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,NationController.partialUpdateNation);
router.route('/device/api/v1/nation/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,NationController.bulkUpdateNation);
router.route('/device/api/v1/nation/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,NationController.softDeleteNation);
router.route('/device/api/v1/nation/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,NationController.softDeleteManyNation);
router.route('/device/api/v1/nation/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,NationController.deleteNation);
router.route('/device/api/v1/nation/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,NationController.deleteManyNation);

module.exports = router;
