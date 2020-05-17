import {
  ListLiversResponse,
  GetLiverResponse
} from 'holo-back'
import api from './helper/apiRequestHelper'

export default class LiverApi {
  static get (): Promise<ListLiversResponse> {
    const path = '/livers'
    return api.get<null, ListLiversResponse>(path, null)
  }

  static getBy (liverId: string): Promise<GetLiverResponse> {
    const path = '/livers/' + liverId
    return api.get<null, GetLiverResponse>(path, null)
  }
}
