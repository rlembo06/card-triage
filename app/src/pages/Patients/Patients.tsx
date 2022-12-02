import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import type { Patient } from '@/commons'

import { type RLListStatusItem, RLListStatus } from '@/components'

import {
  operations as patientsOperations,
  selectors as patientsSelectors,
} from '@/store/ducks/patients'

const Patients = () => {
  const dispatch = useDispatch()

  const patientsList: Patient[] | unknown[] = useSelector(patientsSelectors.selectAll)

  const dataSource: RLListStatusItem[] = ((patientsList as Patient[]) || ([] as Patient[])).map(
    ({ patient_name, ...patient }) => ({ ...patient, name: patient_name }),
  )

  // @ts-ignore TODO: to fix error
  const fetchPatientsList = async () => dispatch(patientsOperations.fetchPatientsList())

  useEffect(() => {
    fetchPatientsList()
  }, [])

  return <RLListStatus dataSource={dataSource} />
}

export default Patients
