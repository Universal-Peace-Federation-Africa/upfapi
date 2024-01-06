/**
 * seeder.js
 * @description :: functions that seeds mock data to run the application
 */
const model = require('../model');
const dbService = require('../utils/dbService');
const bcrypt = require('bcrypt');
const authConstant = require('../constants/authConstant');
const { replaceAll } = require('../utils/common');

/* seeds default users */
async function seedUser () {
  try {
    let userToBeInserted = {};
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Heath.Kihn' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'jk8s8BHsKAUf3lk',
        'isDeleted':false,
        'username':'Heath.Kihn',
        'email':'Cleora_Jacobs62@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalLeader
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'jk8s8BHsKAUf3lk',
        'isDeleted':false,
        'username':'Heath.Kihn',
        'email':'Cleora_Jacobs62@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalLeader
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Heath.Kihn' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Timothy.Mohr28' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'ie6Rlzm57_fuMsG',
        'isDeleted':false,
        'username':'Timothy.Mohr28',
        'email':'Salma_Gislason76@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalCoordinator
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'ie6Rlzm57_fuMsG',
        'isDeleted':false,
        'username':'Timothy.Mohr28',
        'email':'Salma_Gislason76@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalCoordinator
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Timothy.Mohr28' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Austyn15' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'s2BSbcHjCNhCSAf',
        'isDeleted':false,
        'username':'Austyn15',
        'email':'Jane_Crona@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SRLeader
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'s2BSbcHjCNhCSAf',
        'isDeleted':false,
        'username':'Austyn15',
        'email':'Jane_Crona@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SRLeader
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Austyn15' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Elmer_Schinner' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'Wkv3jTooVsT9WRq',
        'isDeleted':false,
        'username':'Elmer_Schinner',
        'email':'Tessie_Stehr@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SRAdmin
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'Wkv3jTooVsT9WRq',
        'isDeleted':false,
        'username':'Elmer_Schinner',
        'email':'Tessie_Stehr@yahoo.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SRAdmin
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Elmer_Schinner' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Blaze7' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'1NH3Cvc1Jt5EUAw',
        'isDeleted':false,
        'username':'Blaze7',
        'email':'Cleveland.Sporer5@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.RegionalCoordinator
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'1NH3Cvc1Jt5EUAw',
        'isDeleted':false,
        'username':'Blaze7',
        'email':'Cleveland.Sporer5@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.RegionalCoordinator
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Blaze7' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Wava.Bednar3' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'P4LMDrfnn4VaZou',
        'isDeleted':false,
        'username':'Wava.Bednar3',
        'email':'Mireya_Reichert45@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalSG
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'P4LMDrfnn4VaZou',
        'isDeleted':false,
        'username':'Wava.Bednar3',
        'email':'Mireya_Reichert45@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.NationalSG
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Wava.Bednar3' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Kayleigh36' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'HN8oEmvGsMFq6GZ',
        'isDeleted':false,
        'username':'Kayleigh36',
        'email':'Reyes_Marvin@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.Editor
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'HN8oEmvGsMFq6GZ',
        'isDeleted':false,
        'username':'Kayleigh36',
        'email':'Reyes_Marvin@hotmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.Editor
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Kayleigh36' }, userToBeInserted);
    }
    userToBeInserted = await dbService.findOne(model.user,{ 'username':'Kirsten_Cole' });
    if (!userToBeInserted) {  
      userToBeInserted = {
        'password':'JBrvXimQ7_TJa7_',
        'isDeleted':false,
        'username':'Kirsten_Cole',
        'email':'Trenton56@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SuperAdmin
      };
      await dbService.createOne(model.user,userToBeInserted);
    } else {
      userToBeInserted = {
        'password':'JBrvXimQ7_TJa7_',
        'isDeleted':false,
        'username':'Kirsten_Cole',
        'email':'Trenton56@gmail.com',
        'isActive':true,
        'userType':authConstant.USER_TYPES.SuperAdmin
      };
      userToBeInserted.password = await bcrypt.hash(userToBeInserted.password, 8);
      await dbService.update(model.user, { 'username':'Kirsten_Cole' }, userToBeInserted);
    }
    console.info('User model seeded 🍺');
  } catch (error){
    console.log('User seeder failed due to ', error.message);
  }
}
  
/* seeds roles */
async function seedRole () {
  try {
    const roles = [
      'RegionalCoordinator',
      'SRLeader',
      'NationalLeader',
      'Editor',
      'NationalCoordinator',
      'NationalSG',
      'SRAdmin',
      'SuperAdmin',
      'System_User',
      'User'
    ];
    const insertedRoles = await dbService.findAll(model.role, { code: { $in: roles.map(role => role.toUpperCase()) } });
    const rolesToInsert = [];
    roles.forEach(role => {
      if (!insertedRoles.find(insertedRole => insertedRole.code === role.toUpperCase())) {
        rolesToInsert.push({
          name: role,
          code: role.toUpperCase(),
          weight: 1
        });
      }
    });
    if (rolesToInsert.length) {
      const result = await dbService.createMany(model.role, rolesToInsert);
      if (result) console.log('Role seeded 🍺');
      else console.log('Role seeder failed!');
    } else {
      console.log('Role is upto date 🍺');
    }
  } catch (error) {
    console.log('Role seeder failed due to ', error.message);
  }
}

/* seeds routes of project */
async function seedProjectRoutes (routes) {
  try {
    if (routes) {
      let routeName = '';
      const dbRoutes = await dbService.findAll(model.projectRoute, {});
      let routeArr = [];
      let routeObj = {};
      routes.forEach(route => {
        routeName = `${replaceAll((route.path).toLowerCase(), '/', '_')}`;
        route.methods.forEach(method => {
          routeObj = dbRoutes.find(dbRoute => dbRoute.route_name === routeName && dbRoute.method === method);
          if (!routeObj) {
            routeArr.push({
              'uri': route.path.toLowerCase(),
              'method': method,
              'route_name': routeName,
            });
          }
        });
      });
      if (routeArr.length) {
        const result = await dbService.createMany(model.projectRoute, routeArr);
        if (result) console.info('ProjectRoute model seeded 🍺');
        else console.info('ProjectRoute seeder failed.');
      } else {
        console.info('ProjectRoute is upto date 🍺');
      }
    }
  } catch (error) {
    console.log('ProjectRoute seeder failed due to ', error.message);
  }
}

/* seeds role for routes */
async function seedRouteRole () {
  try {
    const routeRoles = [ 
      {
        route: '/admin/activity/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/activity/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/activity/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/activity/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/activity/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/activity/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/activity/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/activity/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/activity/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/activity/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/activity/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/activity/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/activity/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/activity/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/activity/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/activity/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/activity/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/activity/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/activity/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/activity/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/activity/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/asset/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/asset/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/asset/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/asset/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/asset/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/asset/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/asset/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/asset/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/asset/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/update/:id',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/asset/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE' 
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/asset/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/asset/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/asset/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/asset/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/association/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/association/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/association/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/association/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/association/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/association/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/association/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/association/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/association/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/admin/association/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/association/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/association/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/association/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/association/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/association/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/association/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/association/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/association/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/association/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/association/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/association/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/association/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/association/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/blog/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/blog/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/blog/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/blog/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/blog/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/blog/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/update/:id',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/blog/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/blog/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'SRLeader',
        method: 'DELETE' 
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE' 
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/blog/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/blog/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/blog/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/blog/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/blog/deletemany',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/blog/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/deletemany',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/blog/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/chat_group/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/admin/chat_group/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/chat_group/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/chat_group/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/chat_group/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/chat_group/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_group/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/chat_message/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/admin/chat_message/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/chat_message/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/chat_message/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/chat_message/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/chat_message/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/admin/chat_message/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/comment/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/comment/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/comment/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/comment/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/comment/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/comment/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/comment/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/comment/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/comment/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/comment/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/comment/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/comment/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/comment/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/nation/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/nation/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/nation/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/nation/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/nation/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/nation/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/nation/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/nation/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/nation/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/nation/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/nation/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/nation/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/nation/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/nation/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/nation/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/nation/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/nation/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/region/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/region/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/region/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/region/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/region/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/region/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/region/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/region/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/region/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/region/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/region/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/region/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/region/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/region/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/region/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/region/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/region/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/region/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/region/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/region/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/region/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/region/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/region/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/region/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/region/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/region/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/region/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/region/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/region/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/region/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/region/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/region/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/reward/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/reward/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/reward/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/reward/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/reward/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/reward/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/reward/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/reward/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/reward/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/reward/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/reward/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/reward/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/reward/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/reward/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/reward/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/reward/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/reward/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/reward/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/subregion/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/subregion/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/subregion/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/subregion/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/admin/subregion/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/subregion/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/subregion/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/subregion/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/admin/subregion/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/todo/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/todo/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/todo/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/todo/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/todo/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/todo/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/update/:id',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/todo/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/todo/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'SRLeader',
        method: 'DELETE' 
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE' 
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/todo/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/todo/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/todo/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/todo/deletemany',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/todo/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/user/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/create',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/create',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/addbulk',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/user/addbulk',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/addbulk',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/list',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/user/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'NationalLeader',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/admin/user/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/admin/user/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/user/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/count',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'NationalLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/count',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/update/:id',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/update/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/update/:id',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/admin/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'SRLeader',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/updatebulk',
        role: 'NationalSG',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'Editor',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'User',
        method: 'PUT' 
      },
      {
        route: '/admin/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'SRLeader',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'Editor',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/admin/user/delete/:id',
        role: 'User',
        method: 'DELETE' 
      },
      {
        route: '/admin/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/user/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/deletemany',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/admin/user/deletemany',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/admin/user/deletemany',
        role: 'NationalSG',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'SuperAdmin',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/admin/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userauthsettings/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userauthsettings/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userauthsettings/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userauthsettings/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/userauthsettings/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userauthsettings/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userauthsettings/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userauthsettings/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userauthsettings/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userauthsettings/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userauthsettings/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/userauthsettings/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pushnotification/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pushnotification/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pushnotification/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pushnotification/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/pushnotification/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/pushnotification/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pushnotification/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pushnotification/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pushnotification/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pushnotification/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/pushnotification/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/pushnotification/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/role/create',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/addbulk',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/role/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/role/update/:id',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/updatebulk',
        role: 'System_User',
        method: 'PUT' 
      },
      {
        route: '/admin/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/admin/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/routerole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/admin/userrole/list',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/:id',
        role: 'System_User',
        method: 'GET' 
      },
      {
        route: '/admin/userrole/count',
        role: 'System_User',
        method: 'POST' 
      },
      {
        route: '/admin/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/admin/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/admin/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/activity/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'SRAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/activity/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/activity/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/asset/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/asset/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/asset/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/asset/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'Editor',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'SRAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/association/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/blog/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/blog/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/blog/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'Editor',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'SRAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/chat_group/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_group/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'Editor',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'SRAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/chat_message/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/comment/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/comment/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/comment/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/comment/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/nation/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/nation/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/nation/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/nation/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/region/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/region/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/region/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/region/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/region/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reward/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/reward/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/reward/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/reward/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'SRLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'Editor',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'NationalSG',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'SRAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'SuperAdmin',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/subregion/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/subregion/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/todo/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/todo/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/todo/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/create',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'SRLeader',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/list',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'RegionalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'SRLeader',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'NationalLeader',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'Editor',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'NationalCoordinator',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'NationalSG',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'SRAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'SuperAdmin',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'User',
        method: 'GET' 
      },
      {
        route: '/device/api/v1/user/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'Editor',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'SRAdmin',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/count',
        role: 'User',
        method: 'POST' 
      },
      {
        route: '/device/api/v1/user/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'RegionalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'SRLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'NationalLeader',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'Editor',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'NationalCoordinator',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'NationalSG',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'SRAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'SuperAdmin',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'RegionalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'SRLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'NationalLeader',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'Editor',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'NationalCoordinator',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'NationalSG',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'SRAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'SuperAdmin',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'RegionalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'SRLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'NationalLeader',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'Editor',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'NationalCoordinator',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'NationalSG',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'SRAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'SuperAdmin',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/user/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userauthsettings/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userauthsettings/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userauthsettings/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userauthsettings/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userauthsettings/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userauthsettings/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userauthsettings/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userauthsettings/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userauthsettings/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userauthsettings/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userauthsettings/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userauthsettings/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/usertokens/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/usertokens/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/usertokens/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/usertokens/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/pushnotification/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/pushnotification/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/pushnotification/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/pushnotification/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/role/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/role/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/role/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/role/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/projectroute/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/projectroute/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/projectroute/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/projectroute/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/routerole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/routerole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/routerole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/routerole/deletemany',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/create',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/addbulk',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/list',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/:id',
        role: 'System_User',
        method: 'GET'
      },
      {
        route: '/device/api/v1/userrole/count',
        role: 'System_User',
        method: 'POST'
      },
      {
        route: '/device/api/v1/userrole/update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/partial-update/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/updatebulk',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdelete/:id',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/softdeletemany',
        role: 'System_User',
        method: 'PUT'
      },
      {
        route: '/device/api/v1/userrole/delete/:id',
        role: 'System_User',
        method: 'DELETE'
      },
      {
        route: '/device/api/v1/userrole/deletemany',
        role: 'System_User',
        method: 'POST'
      },

    ];
    if (routeRoles && routeRoles.length) {
      const routes = [...new Set(routeRoles.map(routeRole => routeRole.route.toLowerCase()))];
      const routeMethods = [...new Set(routeRoles.map(routeRole => routeRole.method))];
      const roles = [
        'RegionalCoordinator',
        'SRLeader',
        'NationalLeader',
        'Editor',
        'NationalCoordinator',
        'NationalSG',
        'SRAdmin',
        'SuperAdmin',
        'System_User',
        'User'
      ];
      const insertedProjectRoute = await dbService.findAll(model.projectRoute, {
        uri: { $in: routes },
        method: { $in: routeMethods },
        'isActive': true,
        'isDeleted': false
      });
      const insertedRoles = await dbService.findAll(model.role, {
        code: { $in: roles.map(role => role.toUpperCase()) },
        'isActive': true,
        'isDeleted': false
      });
      let projectRouteId = '';
      let roleId = '';
      let createRouteRoles = routeRoles.map(routeRole => {
        projectRouteId = insertedProjectRoute.find(pr => pr.uri === routeRole.route.toLowerCase() && pr.method === routeRole.method);
        roleId = insertedRoles.find(r => r.code === routeRole.role.toUpperCase());
        if (projectRouteId && roleId) {
          return {
            roleId: roleId.id,
            routeId: projectRouteId.id
          };
        }
      });
      createRouteRoles = createRouteRoles.filter(Boolean);
      const routeRolesToBeInserted = [];
      let routeRoleObj = {};
    
      await Promise.all(
        createRouteRoles.map(async routeRole => {
          routeRoleObj = await dbService.findOne(model.routeRole, {
            routeId: routeRole.routeId,
            roleId: routeRole.roleId,
          });
          if (!routeRoleObj) {
            routeRolesToBeInserted.push({
              routeId: routeRole.routeId,
              roleId: routeRole.roleId,
            });
          }
        })
      );
      if (routeRolesToBeInserted.length) {
        const result = await dbService.createMany(model.routeRole, routeRolesToBeInserted);
        if (result) console.log('RouteRole seeded 🍺');
        else console.log('RouteRole seeder failed!');
      } else {
        console.log('RouteRole is upto date 🍺');
      }
    }
  } catch (error){
    console.log('RouteRole seeder failed due to ', error.message);
  }
}

/* seeds roles for users */
async function seedUserRole (){
  try {
    const userRoles = [{
      'username':'Heath.Kihn',
      'password':'jk8s8BHsKAUf3lk'
    },{
      'username':'Timothy.Mohr28',
      'password':'ie6Rlzm57_fuMsG'
    },{
      'username':'Austyn15',
      'password':'s2BSbcHjCNhCSAf'
    },{
      'username':'Elmer_Schinner',
      'password':'Wkv3jTooVsT9WRq'
    },{
      'username':'Blaze7',
      'password':'1NH3Cvc1Jt5EUAw'
    },{
      'username':'Wava.Bednar3',
      'password':'P4LMDrfnn4VaZou'
    },{
      'username':'Kayleigh36',
      'password':'HN8oEmvGsMFq6GZ'
    },{
      'username':'Kirsten_Cole',
      'password':'JBrvXimQ7_TJa7_'
    }];
    const defaultRoles = await dbService.findAll(model.role);
    const insertedUsers = await dbService.findAll(model.user, { username: { $in: userRoles.map(userRole => userRole.username) } });
    let user = {};
    const userRolesArr = [];
    userRoles.map(userRole => {
      user = insertedUsers.find(user => user.username === userRole.username && user.isPasswordMatch(userRole.password) && user.isActive && !user.isDeleted);
      if (user) {
        if (user.userType === authConstant.USER_TYPES.Admin){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'ADMIN').id
          });
        } else if (user.userType === authConstant.USER_TYPES.User){
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'USER').id
          });
        } else {
          userRolesArr.push({
            userId: user.id,
            roleId: defaultRoles.find((d)=>d.code === 'SYSTEM_USER').id
          });
        }  
      }
    });
    let userRoleObj = {};
    const userRolesToBeInserted = [];
    if (userRolesArr.length) {
      await Promise.all(
        userRolesArr.map(async userRole => {
          userRoleObj = await dbService.findOne(model.userRole, {
            userId: userRole.userId,
            roleId: userRole.roleId
          });
          if (!userRoleObj) {
            userRolesToBeInserted.push({
              userId: userRole.userId,
              roleId: userRole.roleId
            });
          }
        })
      );
      if (userRolesToBeInserted.length) {
        const result = await dbService.createMany(model.userRole, userRolesToBeInserted);
        if (result) console.log('UserRole seeded 🍺');
        else console.log('UserRole seeder failed');
      } else {
        console.log('UserRole is upto date 🍺');
      }
    }
  } catch (error){
    console.log('UserRole seeder failed due to ', error.message);
  }
}

/* calls of functions to seed mock data into multiple collections */
async function seedData (allRegisterRoutes){
  await seedUser();
  await seedRole();
  await seedProjectRoutes(allRegisterRoutes);
  await seedRouteRole();
  await seedUserRole();
};
module.exports = seedData;