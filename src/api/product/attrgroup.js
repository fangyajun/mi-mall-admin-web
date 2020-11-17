import request from '@/utils/request'

export function listAttrgroup(data, id) {
  return request({
    url: 'api/product/attrgroup/list/' + id,
    method: 'get',
    data
  })
}

export function deleteAttrgroup(data) {
  return request({
    url: 'api/product/attrgroup/delete',
    method: 'post',
    data
  })
}

export function attrgroupInfo(attrGroupId) {
  return request({
    url: 'api/product/attrgroup/info/' + attrGroupId,
    method: 'get',
  })
}

export function saveAttrgroup(data) {
  return request({
    url: 'api/product/attrgroup/save',
    method: 'post',
    data
  })
}

export function updateAttrgroup(data) {
  return request({
    url: 'api/product/attrgroup/update',
    method: 'post',
    data
  })
}

export function deleteAttrgroupRelation(data) {
  return request({
    url: 'api/product/attrgroup/attr/relation/delete',
    method: 'post',
    data
  })
}

export function addAttrgroupAttrRelation(data) {
  return request({
    url: 'api/product/attrgroup/attr/relation',
    method: 'post',
    data
  })
}

export function getAttrgroupAttrRelation(attrGroupId) {
  return request({
    url: 'api/product/attrgroup/' + attrGroupId + '/attr/relation',
    method: 'get',
  })
}

export function getAttrgroupNoattrRelation(data, attrGroupId) {
  return request({
    url: 'api/product/attrgroup/' + attrGroupId + '/noattr/relation',
    method: 'get',
    data
  })
}


export default { listAttrgroup, deleteAttrgroup, attrgroupInfo, 
  saveAttrgroup, updateAttrgroup, deleteAttrgroupRelation, 
  addAttrgroupAttrRelation, getAttrgroupAttrRelation, getAttrgroupNoattrRelation }