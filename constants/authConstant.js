/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const JWT = {
  ADMIN_SECRET:'myjwtadminsecret',
  DEVICE_SECRET:'myjwtdevicesecret',
  EXPIRES_IN: 10000
};

const USER_TYPES = {
  NationalLeader:1,
  NationalCoordinator:2,
  SRLeader:3,
  SRAdmin:4,
  RegionalCoordinator:5,
  NationalSG:6,
  Editor:7,
  SuperAdmin:8,
};

const PLATFORM = {
  ADMIN:1,
  DEVICE:2,
};

let LOGIN_ACCESS = {
  [USER_TYPES.NationalLeader]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.NationalCoordinator]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.SRLeader]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.SRAdmin]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.RegionalCoordinator]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.NationalSG]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.Editor]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
  [USER_TYPES.SuperAdmin]:[PLATFORM.ADMIN,PLATFORM.DEVICE],        
};

const DEFAULT_USER_ROLE = 'SuperAdmin';

const MAX_LOGIN_RETRY_LIMIT = 5;
const LOGIN_REACTIVE_TIME = 20;   

const FORGOT_PASSWORD_WITH = {
  LINK: {
    email: true,
    sms: false
  }
};

module.exports = {
  JWT,
  USER_TYPES,
  PLATFORM,
  MAX_LOGIN_RETRY_LIMIT,
  LOGIN_REACTIVE_TIME,
  FORGOT_PASSWORD_WITH,
  LOGIN_ACCESS,
  DEFAULT_USER_ROLE,
};