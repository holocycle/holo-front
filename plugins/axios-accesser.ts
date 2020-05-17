import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/lib/api/helper/apiRequestHelper'

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios)
}

export default accessor
