import api from './helper/apiRequestHelper'

export default class ClipsApi {
  static get () {
    return api.get('/clips', null)
  }

  static post (videoId, title, description, beginAt, endAt) {
    return api.postWithToken(
      '/clips',
      {
        videoId,
        title,
        description,
        beginAt,
        endAt
      }
    )
  }
}
