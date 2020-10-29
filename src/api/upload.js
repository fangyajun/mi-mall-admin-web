import request from '@/utils/request'

export function ossPolicy(data) {
  return request({
    url: 'api/thirdparty/oss/policy',
    method: 'get',
  })
}

export default { ossPolicy }