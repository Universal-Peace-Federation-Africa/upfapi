/**
 * AssetRoutes.js
 * @description :: CRUD API routes for Asset
 */

const express = require('express');
const router = express.Router();
const AssetController = require('../../controller/admin/AssetController');
const { PLATFORM } =  require('../../constants/authConstant'); 
const auth = require('../../middleware/auth');
const checkRolePermission = require('../../middleware/checkRolePermission');
router.route('/admin/asset/create').post(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.addAsset);
router.route('/admin/asset/addBulk').post(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.bulkInsertAsset);
router.route('/admin/asset/list').post(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.findAllAsset);
router.route('/admin/asset/count').post(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.getAssetCount);
router.route('/admin/asset/:id').get(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.getAsset);
router.route('/admin/asset/update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.updateAsset);    
router.route('/admin/asset/partial-update/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.partialUpdateAsset);
router.route('/admin/asset/updateBulk').put(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.bulkUpdateAsset);
router.route('/admin/asset/softDelete/:id').put(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.softDeleteAsset);
router.route('/admin/asset/softDeleteMany').put(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.softDeleteManyAsset);
router.route('/admin/asset/delete/:id').delete(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.deleteAsset);
router.route('/admin/asset/deleteMany').post(auth(PLATFORM.ADMIN),checkRolePermission,AssetController.deleteManyAsset);

module.exports = router;
