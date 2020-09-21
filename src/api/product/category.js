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

export default { listTree }
