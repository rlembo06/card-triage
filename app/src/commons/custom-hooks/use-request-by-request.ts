// @flow

import { useEffect, useState } from 'react'

import type { Status } from '@/commons/types'

type StatusByRequestHook<T> = [Status, () => Promise<T>]

/**
 * Hooks in order handle request status
 * @returns {useFetchItems<T>} returns status and function
 */
function useStatusByRequest<T>(request: () => Promise<any>): StatusByRequestHook<T> {
  const [status, setStatus] = useState<Status>('NONE')

  const requestWrapped = async (): Promise<T> => {
    setStatus('IN_PROGRESS')
    try {
      const result: T = await request()
      setStatus('SUCCESS')
      return result
    } catch (error) {
      setStatus('ERROR')
      throw error
    }
  }

  useEffect(() => {
    if (status === 'SUCCESS' || status === 'ERROR') {
      setStatus('NONE')
    }
  }, [status])

  return [status, requestWrapped]
}

export type { StatusByRequestHook }
export default useStatusByRequest
