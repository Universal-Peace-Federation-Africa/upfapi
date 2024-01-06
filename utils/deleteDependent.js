/**
 * deleteDependent.js
 * @description :: exports deleteDependent service for project.
 */

let Comment = require('../model/Comment');
let Reward = require('../model/Reward');
let Chat_message = require('../model/Chat_message');
let Chat_group = require('../model/Chat_group');
let ToDo = require('../model/ToDo');
let Blog = require('../model/Blog');
let Activity = require('../model/Activity');
let Subregion = require('../model/Subregion');
let Region = require('../model/Region');
let Nation = require('../model/Nation');
let Association = require('../model/Association');
let Asset = require('../model/Asset');
let User = require('../model/user');
let UserAuthSettings = require('../model/userAuthSettings');
let UserTokens = require('../model/userTokens');
let PushNotification = require('../model/pushNotification');
let Role = require('../model/role');
let ProjectRoute = require('../model/projectRoute');
let RouteRole = require('../model/routeRole');
let UserRole = require('../model/userRole');
let dbService = require('.//dbService');

const deleteComment = async (filter) =>{
  try {
    let comment = await dbService.findAll(Comment,filter);
    if (comment && comment.length){
      comment = comment.map((obj) => obj.id);

      const CommentFilter = { $or: [{ parentItem : { $in : comment } }] };
      const CommentCnt = await dbService.destroy(Comment,CommentFilter);

      let deleted  = await dbService.destroy(Comment,filter);
      let response = { Comment :CommentCnt.length, };
      return response; 
    } else {
      return {  comment : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteReward = async (filter) =>{
  try {
    let response  = await dbService.destroy(Reward,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_message = async (filter) =>{
  try {
    let response  = await dbService.destroy(Chat_message,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteChat_group = async (filter) =>{
  try {
    let chat_group = await dbService.findAll(Chat_group,filter);
    if (chat_group && chat_group.length){
      chat_group = chat_group.map((obj) => obj.id);

      const Chat_messageFilter = { $or: [{ groupId : { $in : chat_group } }] };
      const Chat_messageCnt = await dbService.destroy(Chat_message,Chat_messageFilter);

      let deleted  = await dbService.destroy(Chat_group,filter);
      let response = { Chat_message :Chat_messageCnt.length, };
      return response; 
    } else {
      return {  chat_group : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteToDo = async (filter) =>{
  try {
    let response  = await dbService.destroy(ToDo,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteBlog = async (filter) =>{
  try {
    let response  = await dbService.destroy(Blog,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteActivity = async (filter) =>{
  try {
    let activity = await dbService.findAll(Activity,filter);
    if (activity && activity.length){
      activity = activity.map((obj) => obj.id);

      const CommentFilter = { $or: [{ activityId : { $in : activity } }] };
      const CommentCnt = await dbService.destroy(Comment,CommentFilter);

      const RewardFilter = { $or: [{ numberOfBadges : { $in : activity } }] };
      const RewardCnt = await dbService.destroy(Reward,RewardFilter);

      let deleted  = await dbService.destroy(Activity,filter);
      let response = {
        Comment :CommentCnt.length,
        Reward :RewardCnt.length,
      };
      return response; 
    } else {
      return {  activity : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteSubregion = async (filter) =>{
  try {
    let subregion = await dbService.findAll(Subregion,filter);
    if (subregion && subregion.length){
      subregion = subregion.map((obj) => obj.id);

      const ActivityFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const ActivityCnt = await dbService.destroy(Activity,ActivityFilter);

      const NationFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const NationCnt = await dbService.destroy(Nation,NationFilter);

      const AssetFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const AssetCnt = await dbService.destroy(Asset,AssetFilter);

      const userFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      let deleted  = await dbService.destroy(Subregion,filter);
      let response = {
        Activity :ActivityCnt.length,
        Nation :NationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response; 
    } else {
      return {  subregion : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRegion = async (filter) =>{
  try {
    let region = await dbService.findAll(Region,filter);
    if (region && region.length){
      region = region.map((obj) => obj.id);

      const ActivityFilter = { $or: [{ regionId : { $in : region } }] };
      const ActivityCnt = await dbService.destroy(Activity,ActivityFilter);

      const SubregionFilter = { $or: [{ regionId : { $in : region } }] };
      const SubregionCnt = await dbService.destroy(Subregion,SubregionFilter);

      const NationFilter = { $or: [{ regionId : { $in : region } }] };
      const NationCnt = await dbService.destroy(Nation,NationFilter);

      const AssetFilter = { $or: [{ regionId : { $in : region } }] };
      const AssetCnt = await dbService.destroy(Asset,AssetFilter);

      const userFilter = { $or: [{ regionId : { $in : region } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      let deleted  = await dbService.destroy(Region,filter);
      let response = {
        Activity :ActivityCnt.length,
        Subregion :SubregionCnt.length,
        Nation :NationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response; 
    } else {
      return {  region : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteNation = async (filter) =>{
  try {
    let nation = await dbService.findAll(Nation,filter);
    if (nation && nation.length){
      nation = nation.map((obj) => obj.id);

      const RewardFilter = { $or: [{ recipientNation : { $in : nation } }] };
      const RewardCnt = await dbService.destroy(Reward,RewardFilter);

      const ActivityFilter = { $or: [{ nationId : { $in : nation } }] };
      const ActivityCnt = await dbService.destroy(Activity,ActivityFilter);

      const AssetFilter = { $or: [{ nationId : { $in : nation } }] };
      const AssetCnt = await dbService.destroy(Asset,AssetFilter);

      const userFilter = { $or: [{ nationality : { $in : nation } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      let deleted  = await dbService.destroy(Nation,filter);
      let response = {
        Reward :RewardCnt.length,
        Activity :ActivityCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response; 
    } else {
      return {  nation : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAssociation = async (filter) =>{
  try {
    let association = await dbService.findAll(Association,filter);
    if (association && association.length){
      association = association.map((obj) => obj.id);

      const userFilter = { $or: [{ primaryTag : { $in : association } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      let deleted  = await dbService.destroy(Association,filter);
      let response = { user :userCnt.length, };
      return response; 
    } else {
      return {  association : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteAsset = async (filter) =>{
  try {
    let response  = await dbService.destroy(Asset,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUser = async (filter) =>{
  try {
    let user = await dbService.findAll(User,filter);
    if (user && user.length){
      user = user.map((obj) => obj.id);

      const CommentFilter = { $or: [{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const CommentCnt = await dbService.destroy(Comment,CommentFilter);

      const RewardFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ recipientSG : { $in : user } }] };
      const RewardCnt = await dbService.destroy(Reward,RewardFilter);

      const Chat_messageFilter = { $or: [{ sender : { $in : user } },{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const Chat_messageCnt = await dbService.destroy(Chat_message,Chat_messageFilter);

      const Chat_groupFilter = { $or: [{ member : { $in : user } },{ admin : { $in : user } },{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const Chat_groupCnt = await dbService.destroy(Chat_group,Chat_groupFilter);

      const ToDoFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ userId : { $in : user } }] };
      const ToDoCnt = await dbService.destroy(ToDo,ToDoFilter);

      const BlogFilter = { $or: [{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const BlogCnt = await dbService.destroy(Blog,BlogFilter);

      const ActivityFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ participantId : { $in : user } }] };
      const ActivityCnt = await dbService.destroy(Activity,ActivityFilter);

      const SubregionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SubregionCnt = await dbService.destroy(Subregion,SubregionFilter);

      const RegionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RegionCnt = await dbService.destroy(Region,RegionFilter);

      const NationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const NationCnt = await dbService.destroy(Nation,NationFilter);

      const AssociationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AssociationCnt = await dbService.destroy(Association,AssociationFilter);

      const AssetFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AssetCnt = await dbService.destroy(Asset,AssetFilter);

      const userFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userCnt = await dbService.destroy(User,userFilter);

      const userAuthSettingsFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userAuthSettingsCnt = await dbService.destroy(UserAuthSettings,userAuthSettingsFilter);

      const userTokensFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userTokensCnt = await dbService.destroy(UserTokens,userTokensFilter);

      const userRoleFilter = { $or: [{ userId : { $in : user } }] };
      const userRoleCnt = await dbService.destroy(UserRole,userRoleFilter);

      let deleted  = await dbService.destroy(User,filter);
      let response = {
        Comment :CommentCnt.length,
        Reward :RewardCnt.length,
        Chat_message :Chat_messageCnt.length,
        Chat_group :Chat_groupCnt.length,
        ToDo :ToDoCnt.length,
        Blog :BlogCnt.length,
        Activity :ActivityCnt.length,
        Subregion :SubregionCnt.length,
        Region :RegionCnt.length,
        Nation :NationCnt.length,
        Association :AssociationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length + deleted.length,
        userAuthSettings :userAuthSettingsCnt.length,
        userTokens :userTokensCnt.length,
        userRole :userRoleCnt.length,
      };
      return response; 
    } else {
      return {  user : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserAuthSettings = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserAuthSettings,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserTokens = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserTokens,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deletePushNotification = async (filter) =>{
  try {
    let response  = await dbService.destroy(PushNotification,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRole = async (filter) =>{
  try {
    let role = await dbService.findAll(Role,filter);
    if (role && role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const routeRoleCnt = await dbService.destroy(RouteRole,routeRoleFilter);

      const userRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const userRoleCnt = await dbService.destroy(UserRole,userRoleFilter);

      let deleted  = await dbService.destroy(Role,filter);
      let response = {
        routeRole :routeRoleCnt.length,
        userRole :userRoleCnt.length,
      };
      return response; 
    } else {
      return {  role : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteProjectRoute = async (filter) =>{
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter);
    if (projectroute && projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ routeId : { $in : projectroute } }] };
      const routeRoleCnt = await dbService.destroy(RouteRole,routeRoleFilter);

      let deleted  = await dbService.destroy(ProjectRoute,filter);
      let response = { routeRole :routeRoleCnt.length, };
      return response; 
    } else {
      return {  projectroute : 0 };
    }

  } catch (error){
    throw new Error(error.message);
  }
};

const deleteRouteRole = async (filter) =>{
  try {
    let response  = await dbService.destroy(RouteRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const deleteUserRole = async (filter) =>{
  try {
    let response  = await dbService.destroy(UserRole,filter);
    return response;
  } catch (error){
    throw new Error(error.message);
  }
};

const countComment = async (filter) =>{
  try {
    let comment = await dbService.findAll(Comment,filter);
    if (comment && comment.length){
      comment = comment.map((obj) => obj.id);

      const CommentFilter = { $or: [{ parentItem : { $in : comment } }] };
      const CommentCnt =  await dbService.count(Comment,CommentFilter);

      let response = { Comment : CommentCnt, };
      return response; 
    } else {
      return {  comment : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countReward = async (filter) =>{
  try {
    const RewardCnt =  await dbService.count(Reward,filter);
    return { Reward : RewardCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_message = async (filter) =>{
  try {
    const Chat_messageCnt =  await dbService.count(Chat_message,filter);
    return { Chat_message : Chat_messageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countChat_group = async (filter) =>{
  try {
    let chat_group = await dbService.findAll(Chat_group,filter);
    if (chat_group && chat_group.length){
      chat_group = chat_group.map((obj) => obj.id);

      const Chat_messageFilter = { $or: [{ groupId : { $in : chat_group } }] };
      const Chat_messageCnt =  await dbService.count(Chat_message,Chat_messageFilter);

      let response = { Chat_message : Chat_messageCnt, };
      return response; 
    } else {
      return {  chat_group : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countToDo = async (filter) =>{
  try {
    const ToDoCnt =  await dbService.count(ToDo,filter);
    return { ToDo : ToDoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countBlog = async (filter) =>{
  try {
    const BlogCnt =  await dbService.count(Blog,filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countActivity = async (filter) =>{
  try {
    let activity = await dbService.findAll(Activity,filter);
    if (activity && activity.length){
      activity = activity.map((obj) => obj.id);

      const CommentFilter = { $or: [{ activityId : { $in : activity } }] };
      const CommentCnt =  await dbService.count(Comment,CommentFilter);

      const RewardFilter = { $or: [{ numberOfBadges : { $in : activity } }] };
      const RewardCnt =  await dbService.count(Reward,RewardFilter);

      let response = {
        Comment : CommentCnt,
        Reward : RewardCnt,
      };
      return response; 
    } else {
      return {  activity : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countSubregion = async (filter) =>{
  try {
    let subregion = await dbService.findAll(Subregion,filter);
    if (subregion && subregion.length){
      subregion = subregion.map((obj) => obj.id);

      const ActivityFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const ActivityCnt =  await dbService.count(Activity,ActivityFilter);

      const NationFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const NationCnt =  await dbService.count(Nation,NationFilter);

      const AssetFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const AssetCnt =  await dbService.count(Asset,AssetFilter);

      const userFilter = { $or: [{ subRegionId : { $in : subregion } }] };
      const userCnt =  await dbService.count(User,userFilter);

      let response = {
        Activity : ActivityCnt,
        Nation : NationCnt,
        Asset : AssetCnt,
        user : userCnt,
      };
      return response; 
    } else {
      return {  subregion : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRegion = async (filter) =>{
  try {
    let region = await dbService.findAll(Region,filter);
    if (region && region.length){
      region = region.map((obj) => obj.id);

      const ActivityFilter = { $or: [{ regionId : { $in : region } }] };
      const ActivityCnt =  await dbService.count(Activity,ActivityFilter);

      const SubregionFilter = { $or: [{ regionId : { $in : region } }] };
      const SubregionCnt =  await dbService.count(Subregion,SubregionFilter);

      const NationFilter = { $or: [{ regionId : { $in : region } }] };
      const NationCnt =  await dbService.count(Nation,NationFilter);

      const AssetFilter = { $or: [{ regionId : { $in : region } }] };
      const AssetCnt =  await dbService.count(Asset,AssetFilter);

      const userFilter = { $or: [{ regionId : { $in : region } }] };
      const userCnt =  await dbService.count(User,userFilter);

      let response = {
        Activity : ActivityCnt,
        Subregion : SubregionCnt,
        Nation : NationCnt,
        Asset : AssetCnt,
        user : userCnt,
      };
      return response; 
    } else {
      return {  region : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countNation = async (filter) =>{
  try {
    let nation = await dbService.findAll(Nation,filter);
    if (nation && nation.length){
      nation = nation.map((obj) => obj.id);

      const RewardFilter = { $or: [{ recipientNation : { $in : nation } }] };
      const RewardCnt =  await dbService.count(Reward,RewardFilter);

      const ActivityFilter = { $or: [{ nationId : { $in : nation } }] };
      const ActivityCnt =  await dbService.count(Activity,ActivityFilter);

      const AssetFilter = { $or: [{ nationId : { $in : nation } }] };
      const AssetCnt =  await dbService.count(Asset,AssetFilter);

      const userFilter = { $or: [{ nationality : { $in : nation } }] };
      const userCnt =  await dbService.count(User,userFilter);

      let response = {
        Reward : RewardCnt,
        Activity : ActivityCnt,
        Asset : AssetCnt,
        user : userCnt,
      };
      return response; 
    } else {
      return {  nation : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countAssociation = async (filter) =>{
  try {
    let association = await dbService.findAll(Association,filter);
    if (association && association.length){
      association = association.map((obj) => obj.id);

      const userFilter = { $or: [{ primaryTag : { $in : association } }] };
      const userCnt =  await dbService.count(User,userFilter);

      let response = { user : userCnt, };
      return response; 
    } else {
      return {  association : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countAsset = async (filter) =>{
  try {
    const AssetCnt =  await dbService.count(Asset,filter);
    return { Asset : AssetCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUser = async (filter) =>{
  try {
    let user = await dbService.findAll(User,filter);
    if (user && user.length){
      user = user.map((obj) => obj.id);

      const CommentFilter = { $or: [{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const CommentCnt =  await dbService.count(Comment,CommentFilter);

      const RewardFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ recipientSG : { $in : user } }] };
      const RewardCnt =  await dbService.count(Reward,RewardFilter);

      const Chat_messageFilter = { $or: [{ sender : { $in : user } },{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const Chat_messageCnt =  await dbService.count(Chat_message,Chat_messageFilter);

      const Chat_groupFilter = { $or: [{ member : { $in : user } },{ admin : { $in : user } },{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const Chat_groupCnt =  await dbService.count(Chat_group,Chat_groupFilter);

      const ToDoFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ userId : { $in : user } }] };
      const ToDoCnt =  await dbService.count(ToDo,ToDoFilter);

      const BlogFilter = { $or: [{ updatedBy : { $in : user } },{ addedBy : { $in : user } }] };
      const BlogCnt =  await dbService.count(Blog,BlogFilter);

      const ActivityFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } },{ participantId : { $in : user } }] };
      const ActivityCnt =  await dbService.count(Activity,ActivityFilter);

      const SubregionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const SubregionCnt =  await dbService.count(Subregion,SubregionFilter);

      const RegionFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const RegionCnt =  await dbService.count(Region,RegionFilter);

      const NationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const NationCnt =  await dbService.count(Nation,NationFilter);

      const AssociationFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AssociationCnt =  await dbService.count(Association,AssociationFilter);

      const AssetFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const AssetCnt =  await dbService.count(Asset,AssetFilter);

      const userFilter = { $or: [{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userCnt =  await dbService.count(User,userFilter);

      const userAuthSettingsFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userAuthSettingsCnt =  await dbService.count(UserAuthSettings,userAuthSettingsFilter);

      const userTokensFilter = { $or: [{ userId : { $in : user } },{ addedBy : { $in : user } },{ updatedBy : { $in : user } }] };
      const userTokensCnt =  await dbService.count(UserTokens,userTokensFilter);

      const userRoleFilter = { $or: [{ userId : { $in : user } }] };
      const userRoleCnt =  await dbService.count(UserRole,userRoleFilter);

      let response = {
        Comment : CommentCnt,
        Reward : RewardCnt,
        Chat_message : Chat_messageCnt,
        Chat_group : Chat_groupCnt,
        ToDo : ToDoCnt,
        Blog : BlogCnt,
        Activity : ActivityCnt,
        Subregion : SubregionCnt,
        Region : RegionCnt,
        Nation : NationCnt,
        Association : AssociationCnt,
        Asset : AssetCnt,
        user : userCnt,
        userAuthSettings : userAuthSettingsCnt,
        userTokens : userTokensCnt,
        userRole : userRoleCnt,
      };
      return response; 
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserAuthSettings = async (filter) =>{
  try {
    const userAuthSettingsCnt =  await dbService.count(UserAuthSettings,filter);
    return { userAuthSettings : userAuthSettingsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserTokens = async (filter) =>{
  try {
    const userTokensCnt =  await dbService.count(UserTokens,filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countPushNotification = async (filter) =>{
  try {
    const pushNotificationCnt =  await dbService.count(PushNotification,filter);
    return { pushNotification : pushNotificationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countRole = async (filter) =>{
  try {
    let role = await dbService.findAll(Role,filter);
    if (role && role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const routeRoleCnt =  await dbService.count(RouteRole,routeRoleFilter);

      const userRoleFilter = { $or: [{ roleId : { $in : role } }] };
      const userRoleCnt =  await dbService.count(UserRole,userRoleFilter);

      let response = {
        routeRole : routeRoleCnt,
        userRole : userRoleCnt,
      };
      return response; 
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countProjectRoute = async (filter) =>{
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter);
    if (projectroute && projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { $or: [{ routeId : { $in : projectroute } }] };
      const routeRoleCnt =  await dbService.count(RouteRole,routeRoleFilter);

      let response = { routeRole : routeRoleCnt, };
      return response; 
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const countRouteRole = async (filter) =>{
  try {
    const routeRoleCnt =  await dbService.count(RouteRole,filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const countUserRole = async (filter) =>{
  try {
    const userRoleCnt =  await dbService.count(UserRole,filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteComment = async (filter,updateBody) =>{  
  try {
    let comment = await dbService.findAll(Comment,filter, { id:1 });
    if (comment.length){
      comment = comment.map((obj) => obj.id);

      const CommentFilter = { '$or': [{ parentItem : { '$in' : comment } }] };
      const CommentCnt = await dbService.update(Comment,CommentFilter,updateBody);
      let updated = await dbService.update(Comment,filter,updateBody);

      let response = { Comment :CommentCnt.length, };
      return response;
    } else {
      return {  comment : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteReward = async (filter,updateBody) =>{  
  try {
    const RewardCnt =  await dbService.update(Reward,filter);
    return { Reward : RewardCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_message = async (filter,updateBody) =>{  
  try {
    const Chat_messageCnt =  await dbService.update(Chat_message,filter);
    return { Chat_message : Chat_messageCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteChat_group = async (filter,updateBody) =>{  
  try {
    let chat_group = await dbService.findAll(Chat_group,filter, { id:1 });
    if (chat_group.length){
      chat_group = chat_group.map((obj) => obj.id);

      const Chat_messageFilter = { '$or': [{ groupId : { '$in' : chat_group } }] };
      const Chat_messageCnt = await dbService.update(Chat_message,Chat_messageFilter,updateBody);
      let updated = await dbService.update(Chat_group,filter,updateBody);

      let response = { Chat_message :Chat_messageCnt.length, };
      return response;
    } else {
      return {  chat_group : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteToDo = async (filter,updateBody) =>{  
  try {
    const ToDoCnt =  await dbService.update(ToDo,filter);
    return { ToDo : ToDoCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteBlog = async (filter,updateBody) =>{  
  try {
    const BlogCnt =  await dbService.update(Blog,filter);
    return { Blog : BlogCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteActivity = async (filter,updateBody) =>{  
  try {
    let activity = await dbService.findAll(Activity,filter, { id:1 });
    if (activity.length){
      activity = activity.map((obj) => obj.id);

      const CommentFilter = { '$or': [{ activityId : { '$in' : activity } }] };
      const CommentCnt = await dbService.update(Comment,CommentFilter,updateBody);

      const RewardFilter = { '$or': [{ numberOfBadges : { '$in' : activity } }] };
      const RewardCnt = await dbService.update(Reward,RewardFilter,updateBody);
      let updated = await dbService.update(Activity,filter,updateBody);

      let response = {
        Comment :CommentCnt.length,
        Reward :RewardCnt.length,
      };
      return response;
    } else {
      return {  activity : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteSubregion = async (filter,updateBody) =>{  
  try {
    let subregion = await dbService.findAll(Subregion,filter, { id:1 });
    if (subregion.length){
      subregion = subregion.map((obj) => obj.id);

      const ActivityFilter = { '$or': [{ subRegionId : { '$in' : subregion } }] };
      const ActivityCnt = await dbService.update(Activity,ActivityFilter,updateBody);

      const NationFilter = { '$or': [{ subRegionId : { '$in' : subregion } }] };
      const NationCnt = await dbService.update(Nation,NationFilter,updateBody);

      const AssetFilter = { '$or': [{ subRegionId : { '$in' : subregion } }] };
      const AssetCnt = await dbService.update(Asset,AssetFilter,updateBody);

      const userFilter = { '$or': [{ subRegionId : { '$in' : subregion } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);
      let updated = await dbService.update(Subregion,filter,updateBody);

      let response = {
        Activity :ActivityCnt.length,
        Nation :NationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response;
    } else {
      return {  subregion : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRegion = async (filter,updateBody) =>{  
  try {
    let region = await dbService.findAll(Region,filter, { id:1 });
    if (region.length){
      region = region.map((obj) => obj.id);

      const ActivityFilter = { '$or': [{ regionId : { '$in' : region } }] };
      const ActivityCnt = await dbService.update(Activity,ActivityFilter,updateBody);

      const SubregionFilter = { '$or': [{ regionId : { '$in' : region } }] };
      const SubregionCnt = await dbService.update(Subregion,SubregionFilter,updateBody);

      const NationFilter = { '$or': [{ regionId : { '$in' : region } }] };
      const NationCnt = await dbService.update(Nation,NationFilter,updateBody);

      const AssetFilter = { '$or': [{ regionId : { '$in' : region } }] };
      const AssetCnt = await dbService.update(Asset,AssetFilter,updateBody);

      const userFilter = { '$or': [{ regionId : { '$in' : region } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);
      let updated = await dbService.update(Region,filter,updateBody);

      let response = {
        Activity :ActivityCnt.length,
        Subregion :SubregionCnt.length,
        Nation :NationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response;
    } else {
      return {  region : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteNation = async (filter,updateBody) =>{  
  try {
    let nation = await dbService.findAll(Nation,filter, { id:1 });
    if (nation.length){
      nation = nation.map((obj) => obj.id);

      const RewardFilter = { '$or': [{ recipientNation : { '$in' : nation } }] };
      const RewardCnt = await dbService.update(Reward,RewardFilter,updateBody);

      const ActivityFilter = { '$or': [{ nationId : { '$in' : nation } }] };
      const ActivityCnt = await dbService.update(Activity,ActivityFilter,updateBody);

      const AssetFilter = { '$or': [{ nationId : { '$in' : nation } }] };
      const AssetCnt = await dbService.update(Asset,AssetFilter,updateBody);

      const userFilter = { '$or': [{ nationality : { '$in' : nation } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);
      let updated = await dbService.update(Nation,filter,updateBody);

      let response = {
        Reward :RewardCnt.length,
        Activity :ActivityCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length,
      };
      return response;
    } else {
      return {  nation : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAssociation = async (filter,updateBody) =>{  
  try {
    let association = await dbService.findAll(Association,filter, { id:1 });
    if (association.length){
      association = association.map((obj) => obj.id);

      const userFilter = { '$or': [{ primaryTag : { '$in' : association } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);
      let updated = await dbService.update(Association,filter,updateBody);

      let response = { user :userCnt.length, };
      return response;
    } else {
      return {  association : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteAsset = async (filter,updateBody) =>{  
  try {
    const AssetCnt =  await dbService.update(Asset,filter);
    return { Asset : AssetCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUser = async (filter,updateBody) =>{  
  try {
    let user = await dbService.findAll(User,filter, { id:1 });
    if (user.length){
      user = user.map((obj) => obj.id);

      const CommentFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const CommentCnt = await dbService.update(Comment,CommentFilter,updateBody);

      const RewardFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ recipientSG : { '$in' : user } }] };
      const RewardCnt = await dbService.update(Reward,RewardFilter,updateBody);

      const Chat_messageFilter = { '$or': [{ sender : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_messageCnt = await dbService.update(Chat_message,Chat_messageFilter,updateBody);

      const Chat_groupFilter = { '$or': [{ member : { '$in' : user } },{ admin : { '$in' : user } },{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const Chat_groupCnt = await dbService.update(Chat_group,Chat_groupFilter,updateBody);

      const ToDoFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ userId : { '$in' : user } }] };
      const ToDoCnt = await dbService.update(ToDo,ToDoFilter,updateBody);

      const BlogFilter = { '$or': [{ updatedBy : { '$in' : user } },{ addedBy : { '$in' : user } }] };
      const BlogCnt = await dbService.update(Blog,BlogFilter,updateBody);

      const ActivityFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } },{ participantId : { '$in' : user } }] };
      const ActivityCnt = await dbService.update(Activity,ActivityFilter,updateBody);

      const SubregionFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const SubregionCnt = await dbService.update(Subregion,SubregionFilter,updateBody);

      const RegionFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const RegionCnt = await dbService.update(Region,RegionFilter,updateBody);

      const NationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const NationCnt = await dbService.update(Nation,NationFilter,updateBody);

      const AssociationFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const AssociationCnt = await dbService.update(Association,AssociationFilter,updateBody);

      const AssetFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const AssetCnt = await dbService.update(Asset,AssetFilter,updateBody);

      const userFilter = { '$or': [{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userCnt = await dbService.update(User,userFilter,updateBody);

      const userAuthSettingsFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userAuthSettingsCnt = await dbService.update(UserAuthSettings,userAuthSettingsFilter,updateBody);

      const userTokensFilter = { '$or': [{ userId : { '$in' : user } },{ addedBy : { '$in' : user } },{ updatedBy : { '$in' : user } }] };
      const userTokensCnt = await dbService.update(UserTokens,userTokensFilter,updateBody);

      const userRoleFilter = { '$or': [{ userId : { '$in' : user } }] };
      const userRoleCnt = await dbService.update(UserRole,userRoleFilter,updateBody);
      let updated = await dbService.update(User,filter,updateBody);

      let response = {
        Comment :CommentCnt.length,
        Reward :RewardCnt.length,
        Chat_message :Chat_messageCnt.length,
        Chat_group :Chat_groupCnt.length,
        ToDo :ToDoCnt.length,
        Blog :BlogCnt.length,
        Activity :ActivityCnt.length,
        Subregion :SubregionCnt.length,
        Region :RegionCnt.length,
        Nation :NationCnt.length,
        Association :AssociationCnt.length,
        Asset :AssetCnt.length,
        user :userCnt.length + updated.length,
        userAuthSettings :userAuthSettingsCnt.length,
        userTokens :userTokensCnt.length,
        userRole :userRoleCnt.length,
      };
      return response;
    } else {
      return {  user : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserAuthSettings = async (filter,updateBody) =>{  
  try {
    const userAuthSettingsCnt =  await dbService.update(UserAuthSettings,filter);
    return { userAuthSettings : userAuthSettingsCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserTokens = async (filter,updateBody) =>{  
  try {
    const userTokensCnt =  await dbService.update(UserTokens,filter);
    return { userTokens : userTokensCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeletePushNotification = async (filter,updateBody) =>{  
  try {
    const pushNotificationCnt =  await dbService.update(PushNotification,filter);
    return { pushNotification : pushNotificationCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRole = async (filter,updateBody) =>{  
  try {
    let role = await dbService.findAll(Role,filter, { id:1 });
    if (role.length){
      role = role.map((obj) => obj.id);

      const routeRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const routeRoleCnt = await dbService.update(RouteRole,routeRoleFilter,updateBody);

      const userRoleFilter = { '$or': [{ roleId : { '$in' : role } }] };
      const userRoleCnt = await dbService.update(UserRole,userRoleFilter,updateBody);
      let updated = await dbService.update(Role,filter,updateBody);

      let response = {
        routeRole :routeRoleCnt.length,
        userRole :userRoleCnt.length,
      };
      return response;
    } else {
      return {  role : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteProjectRoute = async (filter,updateBody) =>{  
  try {
    let projectroute = await dbService.findAll(ProjectRoute,filter, { id:1 });
    if (projectroute.length){
      projectroute = projectroute.map((obj) => obj.id);

      const routeRoleFilter = { '$or': [{ routeId : { '$in' : projectroute } }] };
      const routeRoleCnt = await dbService.update(RouteRole,routeRoleFilter,updateBody);
      let updated = await dbService.update(ProjectRoute,filter,updateBody);

      let response = { routeRole :routeRoleCnt.length, };
      return response;
    } else {
      return {  projectroute : 0 };
    }
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteRouteRole = async (filter,updateBody) =>{  
  try {
    const routeRoleCnt =  await dbService.update(RouteRole,filter);
    return { routeRole : routeRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

const softDeleteUserRole = async (filter,updateBody) =>{  
  try {
    const userRoleCnt =  await dbService.update(UserRole,filter);
    return { userRole : userRoleCnt };
  } catch (error){
    throw new Error(error.message);
  }
};

module.exports = {
  deleteComment,
  deleteReward,
  deleteChat_message,
  deleteChat_group,
  deleteToDo,
  deleteBlog,
  deleteActivity,
  deleteSubregion,
  deleteRegion,
  deleteNation,
  deleteAssociation,
  deleteAsset,
  deleteUser,
  deleteUserAuthSettings,
  deleteUserTokens,
  deletePushNotification,
  deleteRole,
  deleteProjectRoute,
  deleteRouteRole,
  deleteUserRole,
  countComment,
  countReward,
  countChat_message,
  countChat_group,
  countToDo,
  countBlog,
  countActivity,
  countSubregion,
  countRegion,
  countNation,
  countAssociation,
  countAsset,
  countUser,
  countUserAuthSettings,
  countUserTokens,
  countPushNotification,
  countRole,
  countProjectRoute,
  countRouteRole,
  countUserRole,
  softDeleteComment,
  softDeleteReward,
  softDeleteChat_message,
  softDeleteChat_group,
  softDeleteToDo,
  softDeleteBlog,
  softDeleteActivity,
  softDeleteSubregion,
  softDeleteRegion,
  softDeleteNation,
  softDeleteAssociation,
  softDeleteAsset,
  softDeleteUser,
  softDeleteUserAuthSettings,
  softDeleteUserTokens,
  softDeletePushNotification,
  softDeleteRole,
  softDeleteProjectRoute,
  softDeleteRouteRole,
  softDeleteUserRole,
};
