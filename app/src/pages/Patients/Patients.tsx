import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import {
  operations as patientsOperations,
  selectors as patientsSelectors,
} from '@/store/ducks/patients'

import type { Patient } from '@/commons'

const Patients = () => {
  const dispatch = useDispatch()

  const patientsList: Patient[] | unknown = useSelector(patientsSelectors.selectAll)

  // @ts-ignore TODO: to fix error
  const fetchPatientsList = async () => dispatch(patientsOperations.fetchPatientsList())

  useEffect(() => {
    fetchPatientsList()
  }, [])

  return <>{JSON.stringify((patientsList || []))}</>
}

export default Patients
