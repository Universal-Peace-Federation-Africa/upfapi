/**
 * AssetRoutes.js
 * @description :: CRUD API routes for Asset
 */

const express = require('express');
const router = express.Router();
const AssetController = require('../../../controller/device/v1/AssetController');
const { PLATFORM } =  require('../../../constants/authConstant'); 
const auth = require('../../../middleware/auth');
const checkRolePermission = require('../../../middleware/checkRolePermission');
router.route('/device/api/v1/asset/create').post(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.addAsset);
router.route('/device/api/v1/asset/addBulk').post(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.bulkInsertAsset);
router.route('/device/api/v1/asset/list').post(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.findAllAsset);
router.route('/device/api/v1/asset/count').post(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.getAssetCount);
router.route('/device/api/v1/asset/:id').get(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.getAsset);
router.route('/device/api/v1/asset/update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.updateAsset);    
router.route('/device/api/v1/asset/partial-update/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.partialUpdateAsset);
router.route('/device/api/v1/asset/updateBulk').put(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.bulkUpdateAsset);
router.route('/device/api/v1/asset/softDelete/:id').put(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.softDeleteAsset);
router.route('/device/api/v1/asset/softDeleteMany').put(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.softDeleteManyAsset);
router.route('/device/api/v1/asset/delete/:id').delete(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.deleteAsset);
router.route('/device/api/v1/asset/deleteMany').post(auth(PLATFORM.DEVICE),checkRolePermission,AssetController.deleteManyAsset);

module.exports = router;
