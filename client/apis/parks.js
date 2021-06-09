import request from 'superagent'

export function getPark () {
  return request.get('/api/v1/mtnpark')
    .then(res => {
      return res.body
    })
}

export function getParkApprovalStatus (id) {
  return request.get(`/api/v1/mtnpark/${id}`)
    .then(res => {
      return res.body
    })
}
