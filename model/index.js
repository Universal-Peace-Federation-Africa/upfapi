/**
 * index.js
 * @description :: exports all the models and its relationships among other models
 */

const dbConnection = require('../config/dbConnection');
const db = {};
db.sequelize = dbConnection;

db.Comment = require('./Comment');
db.Reward = require('./Reward');
db.Chat_message = require('./Chat_message');
db.Chat_group = require('./Chat_group');
db.ToDo = require('./ToDo');
db.Blog = require('./Blog');
db.Activity = require('./Activity');
db.Subregion = require('./Subregion');
db.Region = require('./Region');
db.Nation = require('./Nation');
db.Association = require('./Association');
db.Asset = require('./Asset');
db.user = require('./user');
db.userAuthSettings = require('./userAuthSettings');
db.userTokens = require('./userTokens');
db.pushNotification = require('./pushNotification');
db.role = require('./role');
db.projectRoute = require('./projectRoute');
db.routeRole = require('./routeRole');
db.userRole = require('./userRole');

db.Comment.belongsTo(db.Comment, {
  foreignKey: 'parentItem',
  as: '_parentItem',
  targetKey: 'id' 
});
db.Comment.hasMany(db.Comment, {
  foreignKey: 'parentItem',
  sourceKey: 'id' 
});
db.Chat_message.belongsTo(db.Chat_group, {
  foreignKey: 'groupId',
  as: '_groupId',
  targetKey: 'id' 
});
db.Chat_group.hasMany(db.Chat_message, {
  foreignKey: 'groupId',
  sourceKey: 'id' 
});
db.Comment.belongsTo(db.Activity, {
  foreignKey: 'activityId',
  as: '_activityId',
  targetKey: 'id' 
});
db.Activity.hasMany(db.Comment, {
  foreignKey: 'activityId',
  sourceKey: 'id' 
});
db.Reward.belongsTo(db.Activity, {
  foreignKey: 'numberOfBadges',
  as: '_numberOfBadges',
  targetKey: 'id' 
});
db.Activity.hasMany(db.Reward, {
  foreignKey: 'numberOfBadges',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.Subregion, {
  foreignKey: 'subRegionId',
  as: '_subRegionId',
  targetKey: 'id' 
});
db.Subregion.hasMany(db.Activity, {
  foreignKey: 'subRegionId',
  sourceKey: 'id' 
});
db.Nation.belongsTo(db.Subregion, {
  foreignKey: 'subRegionId',
  as: '_subRegionId',
  targetKey: 'id' 
});
db.Subregion.hasOne(db.Nation, {
  foreignKey: 'subRegionId',
  sourceKey: 'id' 
});
db.Asset.belongsTo(db.Subregion, {
  foreignKey: 'subRegionId',
  as: '_subRegionId',
  targetKey: 'id' 
});
db.Subregion.hasOne(db.Asset, {
  foreignKey: 'subRegionId',
  sourceKey: 'id' 
});
db.user.belongsTo(db.Subregion, {
  foreignKey: 'subRegionId',
  as: '_subRegionId',
  targetKey: 'id' 
});
db.Subregion.hasOne(db.user, {
  foreignKey: 'subRegionId',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.Region, {
  foreignKey: 'regionId',
  as: '_regionId',
  targetKey: 'id' 
});
db.Region.hasMany(db.Activity, {
  foreignKey: 'regionId',
  sourceKey: 'id' 
});
db.Subregion.belongsTo(db.Region, {
  foreignKey: 'regionId',
  as: '_regionId',
  targetKey: 'id' 
});
db.Region.hasOne(db.Subregion, {
  foreignKey: 'regionId',
  sourceKey: 'id' 
});
db.Nation.belongsTo(db.Region, {
  foreignKey: 'regionId',
  as: '_regionId',
  targetKey: 'id' 
});
db.Region.hasOne(db.Nation, {
  foreignKey: 'regionId',
  sourceKey: 'id' 
});
db.Asset.belongsTo(db.Region, {
  foreignKey: 'regionId',
  as: '_regionId',
  targetKey: 'id' 
});
db.Region.hasOne(db.Asset, {
  foreignKey: 'regionId',
  sourceKey: 'id' 
});
db.user.belongsTo(db.Region, {
  foreignKey: 'regionId',
  as: '_regionId',
  targetKey: 'id' 
});
db.Region.hasOne(db.user, {
  foreignKey: 'regionId',
  sourceKey: 'id' 
});
db.Reward.belongsTo(db.Nation, {
  foreignKey: 'recipientNation',
  as: '_recipientNation',
  targetKey: 'id' 
});
db.Nation.hasMany(db.Reward, {
  foreignKey: 'recipientNation',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.Nation, {
  foreignKey: 'nationId',
  as: '_nationId',
  targetKey: 'id' 
});
db.Nation.hasMany(db.Activity, {
  foreignKey: 'nationId',
  sourceKey: 'id' 
});
db.Asset.belongsTo(db.Nation, {
  foreignKey: 'nationId',
  as: '_nationId',
  targetKey: 'id' 
});
db.Nation.hasOne(db.Asset, {
  foreignKey: 'nationId',
  sourceKey: 'id' 
});
db.user.belongsTo(db.Nation, {
  foreignKey: 'nationality',
  as: '_nationality',
  targetKey: 'id' 
});
db.Nation.hasOne(db.user, {
  foreignKey: 'nationality',
  sourceKey: 'id' 
});
db.user.belongsTo(db.Association, {
  foreignKey: 'primaryTag',
  as: '_primaryTag',
  targetKey: 'id' 
});
db.Association.hasMany(db.user, {
  foreignKey: 'primaryTag',
  sourceKey: 'id' 
});
db.Comment.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Comment, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Comment.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Comment, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Reward.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Reward, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Reward.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Reward, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Reward.belongsTo(db.user, {
  foreignKey: 'recipientSG',
  as: '_recipientSG',
  targetKey: 'id' 
});
db.user.hasMany(db.Reward, {
  foreignKey: 'recipientSG',
  sourceKey: 'id' 
});
db.Chat_message.belongsTo(db.user, {
  foreignKey: 'sender',
  as: '_sender',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_message, {
  foreignKey: 'sender',
  sourceKey: 'id' 
});
db.Chat_message.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_message, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Chat_message.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_message, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Chat_group.belongsTo(db.user, {
  foreignKey: 'member',
  as: '_member',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_group, {
  foreignKey: 'member',
  sourceKey: 'id' 
});
db.Chat_group.belongsTo(db.user, {
  foreignKey: 'admin',
  as: '_admin',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_group, {
  foreignKey: 'admin',
  sourceKey: 'id' 
});
db.Chat_group.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_group, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Chat_group.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Chat_group, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.ToDo.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.ToDo, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.ToDo.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.ToDo, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.ToDo.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.ToDo, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.Blog.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Blog, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Blog.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Blog, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Activity, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Activity, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Activity.belongsTo(db.user, {
  foreignKey: 'participantId',
  as: '_participantId',
  targetKey: 'id' 
});
db.user.hasMany(db.Activity, {
  foreignKey: 'participantId',
  sourceKey: 'id' 
});
db.Subregion.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Subregion, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Subregion.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Subregion, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Region.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Region, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Region.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Region, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Nation.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Nation, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Nation.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Nation, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Association.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Association, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Association.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Association, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.Asset.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Asset, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.Asset.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.Asset, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.user.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.user, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userAuthSettings.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userAuthSettings, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'addedBy',
  as: '_addedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'addedBy',
  sourceKey: 'id' 
});
db.userTokens.belongsTo(db.user, {
  foreignKey: 'updatedBy',
  as: '_updatedBy',
  targetKey: 'id' 
});
db.user.hasMany(db.userTokens, {
  foreignKey: 'updatedBy',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.user, {
  foreignKey: 'userId',
  as: '_userId',
  targetKey: 'id' 
});
db.user.hasMany(db.userRole, {
  foreignKey: 'userId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.routeRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.userRole.belongsTo(db.role, {
  foreignKey: 'roleId',
  as: '_roleId',
  targetKey: 'id' 
});
db.role.hasMany(db.userRole, {
  foreignKey: 'roleId',
  sourceKey: 'id' 
});
db.routeRole.belongsTo(db.projectRoute, {
  foreignKey: 'routeId',
  as: '_routeId',
  targetKey: 'id' 
});
db.projectRoute.hasMany(db.routeRole, {
  foreignKey: 'routeId',
  sourceKey: 'id' 
});

module.exports = db;