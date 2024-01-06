/**
 * AssociationRoutes.js
 * @description :: CRUD API routes for Association
 */

const express = require('express');
const router = express.Router();
const AssociationController = require('../../../controller/device/v1/AssociationController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/association/create').post(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.addAssociation);
router.route('/device/api/v1/association/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.bulkInsertAssociation);
router.route('/device/api/v1/association/list').post(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.findAllAssociation);
router.route('/device/api/v1/association/count').post(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.getAssociationCount);
router.route('/device/api/v1/association/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.getAssociation);
router.route('/device/api/v1/association/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.updateAssociation);    
router.route('/device/api/v1/association/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.partialUpdateAssociation);
router.route('/device/api/v1/association/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.bulkUpdateAssociation);
router.route('/device/api/v1/association/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.softDeleteAssociation);
router.route('/device/api/v1/association/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.softDeleteManyAssociation);
router.route('/device/api/v1/association/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.deleteAssociation);
router.route('/device/api/v1/association/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,AssociationController.deleteManyAssociation);

module.exports = router;
