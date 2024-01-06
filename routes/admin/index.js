/**
 * index route file of admin platform.
 * @description: exports all routes of admin platform.
 */
const express =  require('express');
const router =  express.Router();
router.use('/admin/auth',require('./auth'));
router.use(require('./CommentRoutes'));
router.use(require('./RewardRoutes'));
router.use(require('./Chat_messageRoutes'));
router.use(require('./Chat_groupRoutes'));
router.use(require('./ToDoRoutes'));
router.use(require('./BlogRoutes'));
router.use(require('./ActivityRoutes'));
router.use(require('./SubregionRoutes'));
router.use(require('./RegionRoutes'));
router.use(require('./NationRoutes'));
router.use(require('./AssociationRoutes'));
router.use(require('./AssetRoutes'));
router.use(require('./userRoutes'));
router.use(require('./roleRoutes'));
router.use(require('./projectRouteRoutes'));
router.use(require('./routeRoleRoutes'));
router.use(require('./userRoleRoutes'));
router.use(require('./uploadRoutes'));

module.exports = router;
