import {
  GetClipResponse,
  ListClipsRequest,
  ListClipsResponse,
  PostClipRequest,
  PostClipResponse
} from 'holo-back'
import api from './helper/apiRequestHelper'

export default class ClipsApi {
  static get (request: ListClipsRequest): Promise<ListClipsResponse> {
    const url = '/clips'
    return api.get<ListClipsRequest, ListClipsResponse>(url, request)
  }

  static post (postClipRequest: PostClipRequest): Promise<PostClipResponse> {
    return api.postWithToken<PostClipRequest, PostClipResponse>(
      '/clips',
      postClipRequest
    )
  }

  static getByClipId (clipId: string): Promise<GetClipResponse> {
    const url = '/clips/' + clipId
    return api.get<null, GetClipResponse>(url, null)
  }
}
