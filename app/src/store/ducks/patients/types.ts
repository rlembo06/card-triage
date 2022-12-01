import type { EntityState } from '@reduxjs/toolkit'

import type { Patient, Status } from '@/commons'

const FETCH_PATIENTS_LIST = '@patients/FETCH_PATIENTS_LIST'

type PatientsState = EntityState<Patient> & {
  status: {
    fetching: {
      status: Status
      error: string | null
    }
  }
}

export type { PatientsState }
export { FETCH_PATIENTS_LIST }
