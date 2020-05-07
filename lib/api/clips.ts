import { ListClipsResponse, PostClipRequest, PostClipResponse } from 'holo-back'
import api from './helper/apiRequestHelper'

export default class ClipsApiTs {
  static get (): Promise<ListClipsResponse> {
    return api.get<null, ListClipsResponse>('/clips', null)
  }

  static post (postClipRequest: PostClipRequest): Promise<PostClipResponse> {
    return api.postWithToken<PostClipRequest, PostClipResponse>(
      '/clips',
      postClipRequest
    )
  }
}
