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
    setStatus('PENDING')
    try {
      const result: T = await request()
      setStatus('DONE')
      return result
    } catch (error) {
      setStatus('REJECTED')
      throw error
    }
  }

  useEffect(() => {
    if (status === 'DONE' || status === 'REJECTED') {
      setStatus('NONE')
    }
  }, [status])

  return [status, requestWrapped]
}

export type { StatusByRequestHook }
export default useStatusByRequest
