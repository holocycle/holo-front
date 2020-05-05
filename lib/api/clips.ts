import { PostClipRequest } from 'holo-back'
import api from './helper/apiRequestHelper'

export default class ClipsApiTs {
  static get () {
    return api.get('/clips', null)
  }

  static post (postClipRequest: PostClipRequest) {
    return api.postWithToken(
      '/clips',
      postClipRequest
    )
  }
}
