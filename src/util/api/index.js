import ajax from './ajax';
import request from './request.js';

//登录接口
export function login(account, password) {
  return ajax({
    url: '/api/account/login',
    method: 'post',
    data: {
      account,
      password,
    },
  });
}

export function getCaptcha(phone) {
  return ajax({
    url: '/api/v1/captcha',
    method: 'post',
    data: {
      phone,
    },
  });
}

export function getSubTypes(typeId) {
  return ajax({
    url: '/api/v1/subtypes',
    method: 'post',
    data: {
      typeId,
    },
  });
}

export function getPlanDetail(id) {
  return ajax({
    url: '/api/v1/plan/view',
    method: 'post',
    data: {
      id,
    },
  });
}

export function getBuilding(params) {
  return ajax({
    url: '/getBuilding',
    method: 'get',
    data: params,
  });
}
export function getUnit(params) {
  return ajax({
    url: '/getUnit',
    method: 'get',
    data: params,
  });
}

export function getSummary() {
  return ajax({
    url: '/api/v1/summary',
    method: 'post',
  });
}

export function getData(indicatorId, dateRange) {
  return ajax({
    url: '/api/v1/data',
    method: 'post',
    data: {
      indicatorId,
      dateRange,
    },
  });
}

export function getReportData(id, dateBegin, dateEnd) {
  return ajax({
    url: '/api/v1/report/data',
    method: 'post',
    data: {
      id,
      dateBegin,
      dateEnd,
    },
  });
}

export function createPlan(data) {
  return ajax({
    url: '/api/v1/plan/create',
    method: 'post',
    data,
  });
}

export function editPlan(data) {
  return ajax({
    url: '/api/v1/plan/edit',
    method: 'post',
    data,
  });
}

export function removePlan(id) {
  return ajax({
    url: '/api/v1/plan/delete',
    method: 'post',
    data: {
      id,
    },
  });
}

//1.1获取幢数接口
export function getBlock(params) {
  return ajax({
    url: '/api/apartment/getBlock',
    method: 'get',
    data: params,
  });
}
//1.2幢数id获取该id下单元信息接口
export function getUnitInfo(params) {
  return ajax({
    url: '/api/apartment/getUnitInfo',
    method: 'get',
    data: params,
  });
}
//1.3根据所在幢数添加单元信息接口
export function addUnitInfo(params) {
  return ajax({
    url: '/api/apartment/addUnitInfo',
    method: 'post',
    data: params,
  });
}

//1.4根据Excel批量添加单元信息接口
export function batchAddInfo(params) {
  return ajax({
    url: '/api/apartment/batchAddInfo',
    method: 'post',
    data: params,
  });
}

//1.5根据所在幢数删除单元信息接口
export function deleteUnitInfo(params) {
  return ajax({
    url: '/api/apartment/deleteUnitInfo',
    method: 'post',
    data: params,
  });
}

//1.6推送单个单元门禁密码接口
export function pushDoorPwd(params) {
  return ajax({
    url: '/api/apartment/pushDoorPwd',
    method: 'post',
    data: params,
  });
}
//1.6推送单个单元门禁密码接口
export function updateDoorPwd(params) {
  return ajax({
    url: '/api/apartment/updateDoorPwd',
    method: 'post',
    data: params,
  });
}

//2.1获取设备信息接口
export function getDeviceInfo(params) {
  return ajax({
    url: '/api/device/getDeviceInfo',
    method: 'get',
    data: params,
  });
}

//2.2解绑设备接口
export function unBindingDeviceInfo(params) {
  return ajax({
    url: '/api/device/unBindingDeviceInfo',
    method: 'post',
    data: params,
  });
}

//3.1获取人员信息接口
export function getUserInfo(params) {
  return ajax({
    url: '/api/user/getUserInfo',
    method: 'GET',
    data: params,
  });
}

//3.2新增人员信息接口
export function addUserInfo(params) {
  return request({
    action: '/api/user/addUserInfo',
    data: params,
    headers: {
      token: JSON.parse(localStorage.getItem('user_info')).token,
    },
  });
}

//3.3修改人员信息接口
export function updateUserInfo(params) {
  return request({
    action: '/api/user/updateUserInfo',
    data: params,
    headers: {
      token: JSON.parse(localStorage.getItem('user_info')).token,
    },
  });
}

//3.4删除人员信息接口
export function deleteUserInfo(params) {
  return ajax({
    url: '/api/user/deleteUserInfo',
    method: 'POST',
    data: params,
  });
}

//4.1获取卡片信息信息接口
export function getCardInfo(params) {
  return ajax({
    url: '/api/card/getCardInfo',
    method: 'GET',
    data: params,
  });
}

//4.2新增卡片信息接口
export function addCardInfo(params) {
  return ajax({
    url: '/api/card/addCardInfo',
    method: 'post',
    data: params,
  });
}

//4.3开卡接口
export function openCard(params) {
  return ajax({
    url: '/api/card/openCard',
    method: 'post',
    data: params,
  });
}

//4.4删除卡片信息接口 (只改变卡片删除状态：已删除)
export function deleteCardInfo(params) {
  return ajax({
    url: '/api/card/deleteCardInfo',
    method: 'POST',
    data: params,
  });
}

//4.5挂失卡片接口
export function lossCardInfo(params) {
  return ajax({
    url: '/api/card/lossCardInfo',
    method: 'POST',
    data: params,
  });
}

//4.6恢复卡片接口
export function recoveryCardInfo(params) {
  return ajax({
    url: '/api/card/recoveryCardInfo',
    method: 'post',
    data: params,
  });
}

//5.1获取识别记录信息接口
export function getRecognitionRecordInfo(params) {
  return ajax({
    url: '/api/record/getRecognitionRecordInfo',
    method: 'GET',
    data: params,
  });
}

//5.2获取开门记录信息接口
export function getDoorRecordInfo(params) {
  return ajax({
    url: '/api/record/getDoorRecordInfo',
    method: 'GET',
    data: params,
  });
}

//6.1获取操作日志信息接口
export function getLogInfo(params) {
  return ajax({
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    url: '/api/system/getLogInfo',
    method: 'GET',
    params: params,
  });
}
//6.1获取设备类型和户型
export function getDataListInfo(params) {
  return ajax({
    url: '/api/apartment/getDataListInfo',
    method: 'GET',
    data: params,
  });
}
//6.2修改密码
export function updatePwd(params) {
  return ajax({
    url: '/api/system/updatePassword',
    method: 'post',
    data: params,
  });
}
//6.3批量删除幢数
export function batchDeleteBlockInfo(params) {
  return ajax({
    url: '/api/apartment/batchDeleteBlockInfo',
    method: 'post',
    data: params,
  });
}
//大屏
export function getLoad(params) {
  return ajax({
    url: '/screen/data/load',
    method: 'GET',
    data: params,
  });
}
export function electricity(params) {
  return ajax({
    url: '/screen/data/electricity',
    method: 'GET',
    data: params,
  });
}
export function chart(params) {
  return ajax({
    url: '/screen/data/chart',
    method: 'GET',
    data: params,
  });
}
export function battery(params) {
  return ajax({
    url: '/screen/data/battery',
    method: 'GET',
    data: params,
  });
}
export function rectifierModule(params) {
  return ajax({
    url: '/screen/data/rectifierModule',
    method: 'GET',
    data: params,
  });
}
export function environment(params) {
  return ajax({
    url: '/screen/data/environment',
    method: 'GET',
    data: params,
  });
}
export function sealHead(params) {
  return ajax({
    url: '/screen/data/sealHead',
    method: 'GET',
    data: params,
  });
}
export function alternatingCurrent(params) {
  return ajax({
    url: '/screen/data/alternatingCurrent',
    method: 'GET',
    data: params,
  });
}
export function alarm(params) {
  return ajax({
    url: '/screen/data/alarm',
    method: 'GET',
    data: params,
  });
}
