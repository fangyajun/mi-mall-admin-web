import request from '@/utils/request'

export function listBrand(data) {
  return request({
    url: 'api/product/brand/list',
    method: 'get',
    data
  })
}

export function addCategorybrandrelation(data) {
  return request({
    url: 'api/product/categorybrandrelation/save',
    method: 'post',
    data
  })
}

export function deleteCategorybrandrelation(data) {
  return request({
    url: 'api/product/categorybrandrelation/delete',
    method: 'post',
    data
  })
}

export function listCategorybrandrelation(data) {
  return request({
    url: 'api/product/categorybrandrelation/catelog/list',
    method: 'get',
    data
  })
}

export function updateBrandStatus(data) {
  return request({
    url: 'api/product/brand/update/status',
    method: 'post',
    data
  })
}

export function deleteBrand(data) {
  return request({
    url: 'api/product/brand/delete',
    method: 'post',
    data
  })
}


export default { listBrand, addCategorybrandrelation, deleteCategorybrandrelation, listCategorybrandrelation, updateBrandStatus, deleteBrand }