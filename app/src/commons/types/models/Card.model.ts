import { Status } from '../app'

type Card = {
  id: string
  arrhythmias: string[]
  created_date: Date
  patient_name: string
  status: Status
}

export default Card
