import { ListClipsRequest, ListClipsResponse, PostClipRequest, PostClipResponse } from 'holo-back'
import api from './helper/apiRequestHelper'

export default class ClipsApiTs {
  static get (): Promise<ListClipsResponse> {
    const url = '/clips'
    return api.get<null, ListClipsResponse>(url, null)
  }

  static getList (getClipRequest: ListClipsRequest): Promise<ListClipsResponse> {
    const url = '/clips'
    return api.get<ListClipsRequest, ListClipsResponse>(url, getClipRequest)
  }

  static post (postClipRequest: PostClipRequest): Promise<PostClipResponse> {
    return api.postWithToken<PostClipRequest, PostClipResponse>(
      '/clips',
      postClipRequest
    )
  }
}
