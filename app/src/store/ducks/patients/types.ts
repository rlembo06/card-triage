import type { EntityState } from '@reduxjs/toolkit'

import type { Patient, Status, StatusState } from '@/commons'

const FETCH_PATIENTS_LIST = '@patients/FETCH_PATIENTS_LIST'

type PatientsState = EntityState<Patient> & {
  status: {
    fetching: StatusState
  }
}

export type { PatientsState }
export { FETCH_PATIENTS_LIST }
