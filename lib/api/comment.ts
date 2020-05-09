import {
  DeleteCommentRequest, DeleteCommentResponse,
  GetCommentRequest, GetCommentResponse,
  ListCommentsRequest, ListCommentsResponse,
  PostCommentRequest, PostCommentResponse
} from 'holo-back'
import api from './helper/apiRequestHelper'

export default class CommentApi {
  static getList (clipId: string, request: ListCommentsRequest): Promise<ListCommentsResponse> {
    const url = '/clips/' + clipId + '/comments'
    return api.get<ListCommentsRequest, ListCommentsResponse>(url, request)
  }

  static get (clipId: string, commentId: string, request: GetCommentRequest): Promise<GetCommentResponse> {
    const url = '/clips/' + clipId + '/comments/' + commentId
    return api.get<GetCommentRequest, GetCommentResponse>(url, request)
  }

  static post (clipId: string, request: PostCommentRequest): Promise<PostCommentResponse> {
    const url = '/clips/' + clipId + '/comments'
    return api.postWithToken<PostCommentRequest, PostCommentResponse>(url, request)
  }

  static delete (clipId: string, commentId: string, request: DeleteCommentRequest): Promise<DeleteCommentResponse> {
    const url = '/clips/' + clipId + '/comments/' + commentId
    return api.deleteWithToken<DeleteCommentRequest, DeleteCommentResponse>(url, request)
  }
}
