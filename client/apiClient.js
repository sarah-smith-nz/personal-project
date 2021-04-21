import request from 'superagent'

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
