import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { type Patient, patientsToDataSourceFiltered } from '@/commons'

import {
  type RLListStatusItem,
  RLCol,
  RLInput,
  RLListStatus,
  RLRow,
} from '@/components'

import {
  operations as patientsOperations,
  selectors as patientsSelectors,
} from '@/store/ducks/patients'

const Patients = () => {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState<{ name: string; arrhythmias: string[] }>({
    name: '',
    arrhythmias: [],
  })

  const patientsList: Patient[] | unknown[] = useSelector(patientsSelectors.selectAll)

  const dataSource: RLListStatusItem[] = patientsToDataSourceFiltered({
    patientsList: patientsList as Patient[],
    filters,
  })

  // @ts-ignore TODO: to fix error
  const fetchPatientsList = async () => dispatch(patientsOperations.fetchPatientsList())

  const onSearch = (value: string): void => setFilters({ ...filters, name: value })

  useEffect(() => {
    fetchPatientsList()
  }, [])

  return (
    <>
      <RLRow gutter={[16, 16]}>
        <RLCol span={24}>
          {/* <RLSearchBar /> */}
          <RLInput.Search
            allowClear
            placeholder='Filter patients by name'
            enterButton='Search'
            onSearch={onSearch}
          />
        </RLCol>
      </RLRow>
      <RLRow gutter={[16, 16]}>
        <RLCol span={24}>
          <RLListStatus dataSource={dataSource} />
        </RLCol>
      </RLRow>
    </>
  )
}

export default Patients
