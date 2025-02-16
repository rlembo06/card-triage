import { Status } from '../app'

type Patient = {
  id: string
  arrhythmias: string[]
  created_date: Date | string
  patient_name: string
  status: Status
}

export default Patient
