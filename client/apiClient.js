import request from 'superagent'
const baseUrl = '/api/v1'

export default function consume (endpoint, method = 'get', data = {}) {
  const payLoadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payLoadMethod](data)
    .then((res) => res)
    .catch((err) => {
      const errMessage = err.response?.body?.error?.title
      throw new Error(errMessage || err.message)
    })
}

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

export function getImages () {
  return request.get('https://pixabay.com/api/?key=21260909-a1caa682172de022a6e337313&q=yellow+flowers&image_type=photo')
    .then(response => {
      // console.log(response)
      return response.body
    })
    .catch(err => {
      console.log(err)
    })
}
