import type { Patient } from '@/commons'

import { baseApi } from '@/api/services'

const getList = async (): Promise<Patient[] | undefined> => {
  try {
    const { data: resData } = await baseApi.get<Patient[]>('cards')
    return resData
  } catch (error) {
    console.error('[@/api/patients/getList] - error', error)
    throw error
  }
}

export default { getList }
