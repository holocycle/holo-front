import {
  GetLoginUserRequest,
  GetLoginUserResponse, GetUserFavoritesRequest,
  GetUserFavoritesResponse,
  GetUserResponse, ListUserRequest,
  ListUserResponse
} from 'holo-back'
import api from './helper/apiRequestHelper'

export default class UserApi {
  static getUsers (listUserRequest: ListUserRequest): Promise<ListUserResponse> {
    const path = '/users'
    return api.get<ListUserRequest, ListUserResponse>(path, listUserRequest)
  }

  static getUsersMe (): Promise<GetLoginUserRequest> {
    const path = '/users/me'
    return api.getWithToken<null, GetLoginUserResponse>(path, null)
  }

  static getUsersMeFavorites (userFavoritesRequest: GetUserFavoritesRequest): Promise<GetUserFavoritesResponse> {
    const path = '/users/me/favorites'
    return api.getWithToken<GetUserFavoritesRequest, GetUserFavoritesResponse>(path, userFavoritesRequest)
  }

  static getUserDetail (userId: string): Promise<GetUserResponse> {
    const path = '/users/' + userId
    return api.get<null, GetUserResponse>(path, null)
  }

  static getUserFavorites (userId: string): Promise<GetUserFavoritesResponse> {
    const path = '/users/' + userId + '/favorites'
    return api.get<null, GetUserFavoritesResponse>(path, null)
  }
}
