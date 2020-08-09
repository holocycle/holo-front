import {
  DeleteTagOnClipRequest,
  DeleteTagOnClipResponse,
  GetTagRequest,
  ListClipsResponse,
  ListTagsOnClipRequest,
  ListTagsOnClipResponse,
  ListTagsRequest,
  ListTagsResponse,
  PutTagOnClipRequest,
  PutTagOnClipResponse,
  PutTagRequest,
  PutTagResponse
} from 'holo-back'
import api from './helper/apiRequestHelper'

export default class TagApi {
  static get (request: ListTagsRequest): Promise<ListTagsResponse> {
    const url = '/tags'
    return api.get<ListTagsRequest, ListTagsResponse>(url, request)
  }

  static getByTagId (tagId: string, request: GetTagRequest): Promise<ListClipsResponse> {
    const url = '/tags' + tagId
    return api.get<GetTagRequest, ListClipsResponse>(url, request)
  }

  static put (request: PutTagRequest): Promise<PutTagResponse> {
    const url = '/tags'
    return api.putWithToken<PutTagRequest, PutTagResponse>(url, request)
  }

  static getByClipId (clipId: string, request: ListTagsOnClipRequest): Promise<ListTagsOnClipResponse> {
    const url = '/clips/' + clipId + '/tags'
    return api.get<ListTagsOnClipRequest, ListTagsOnClipResponse>(url, request)
  }

  static putByClipId (clipId: string, tagId: string, request: PutTagOnClipRequest): Promise<PutTagOnClipResponse> {
    const url = '/clips/' + clipId + '/tags/' + tagId
    return api.putWithToken<PutTagOnClipRequest, PutTagOnClipResponse>(url, request)
  }

  static deleteWithClipId (clipId: string, tagId: string, request: DeleteTagOnClipRequest): Promise<DeleteTagOnClipResponse> {
    const url = '/clips/' + clipId + '/tags/' + tagId
    return api.deleteWithToken<DeleteTagOnClipRequest, DeleteTagOnClipResponse>(url, request)
  }
}
