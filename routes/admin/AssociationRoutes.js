/**
 * AssociationRoutes.js
 * @description :: CRUD API routes for Association
 */

const express = require('express');
const router = express.Router();
const AssociationController = require('../../controller/admin/AssociationController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/association/create').post(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.addAssociation);
router.route('/admin/association/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.bulkInsertAssociation);
router.route('/admin/association/list').post(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.findAllAssociation);
router.route('/admin/association/count').post(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.getAssociationCount);
router.route('/admin/association/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.getAssociation);
router.route('/admin/association/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.updateAssociation);    
router.route('/admin/association/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.partialUpdateAssociation);
router.route('/admin/association/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.bulkUpdateAssociation);
router.route('/admin/association/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.softDeleteAssociation);
router.route('/admin/association/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.softDeleteManyAssociation);
router.route('/admin/association/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.deleteAssociation);
router.route('/admin/association/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,AssociationController.deleteManyAssociation);

module.exports = router;
