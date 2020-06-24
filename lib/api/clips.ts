import {
  DeleteFavoriteRequest, DeleteFavoriteResponse,
  GetClipResponse,
  ListClipsRequest,
  ListClipsResponse,
  PostClipRequest,
  PostClipResponse, PutFavoriteRequest, PutFavoriteResponse
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

  static putFavorite (clipId: string, putFavoriteRequest: PutFavoriteRequest): Promise<PutFavoriteResponse> {
    const url = '/clips/' + clipId + '/favorite'
    return api.putWithToken<PutFavoriteRequest, PutFavoriteResponse>(
      url,
      putFavoriteRequest
    )
  }

  static deleteFavorite (clipId: string, deleteFavoriteRequest: DeleteFavoriteRequest): Promise<DeleteFavoriteResponse> {
    const url = '/clips/' + clipId + '/favorite'
    return api.deleteWithToken<DeleteFavoriteRequest, DeleteFavoriteResponse>(
      url,
      deleteFavoriteRequest
    )
  }
}
