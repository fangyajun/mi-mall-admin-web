import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/dept',
    method: 'post',
    data
  })
}

export function listTree() {
  return request({
    url: 'api/product/category/list/tree',
    method: 'get'
  })
}

export function deleteCategory(data) {
  return request({
    url: 'api/product/category/delete',
    method: 'post',
    data
  })
}

export function updateSort(data) {
  return request({
    url: 'api/product/category/update/sort',
    method: 'post',
    data
  })
}

export function getNodeInfo(id) {
  return request({
    url: 'api/product/category/info/' + id,
    method: 'get'
  })
}

export function updateCategory(data) {
  return request({
    url: 'api/product/category/update',
    method: 'post',
    data
  })
}

export function addCategory(data) {
  return request({
    url: 'api/product/category/save',
    method: 'post',
    data
  })
}


export default { listTree, deleteCategory, updateSort, getNodeInfo, updateCategory, addCategory }
