import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { type Patient, type Status, StatusState, patientsToDataSourceFiltered } from '@/commons'
import {
  RLCol,
  RLInput,
  RLPatientCardStatus,
  RLListStatus,
  RLRow,
  RLSelect,
  RLSpin,
  RLSpace,
} from '@/components'

import {
  operations as patientsOperations,
  selectors as patientsSelectors,
} from '@/store/ducks/patients'

import './styles.css'

const Patients = () => {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState<{ name: string; arrhythmias: string[] }>({
    name: '',
    arrhythmias: [],
  })

  const patientsList: Patient[] | unknown[] = useSelector(patientsSelectors.selectAll)
  const patientsStatus: { [statusKey: string]: StatusState } = useSelector(
    patientsSelectors.selectStatus,
  )

  const arrhythmiasOptions: { label: string; value: string }[] = (patientsList as Patient[])
    .map(({ arrhythmias }) => arrhythmias)
    .flat()
    .filter((arrhythmia, index, self) => self.indexOf(arrhythmia) === index)
    .map((arrhythmia) => ({ label: arrhythmia, value: arrhythmia }))

  const dataSource: Patient[] = patientsToDataSourceFiltered({
    patientsList: patientsList as Patient[],
    filters,
  })

  // @ts-ignore TODO: to fix error
  const fetchPatientsList = async () => dispatch(patientsOperations.fetchPatientsList())

  const onFilterByName = (value: string): void => setFilters({ ...filters, name: value })

  const onFilterByArrhythmias = (value: string[]): void =>
    setFilters({ ...filters, arrhythmias: value })

  const onChangeStatus = ({ status, id }: { status: Status; id: string }) =>
    dispatch(patientsOperations.updatePatientStatus({ status, id }))

  useEffect(() => {
    fetchPatientsList()
  }, [])

  return patientsStatus.fetching.status === 'PENDING' ? (
    <RLSpace align="center" className="spin-wrap">
      <RLSpin size='large' />
    </RLSpace>
  ) : (
    <RLRow gutter={[16, 16]}>
      <RLCol span={12}>
        <RLInput.Search
          allowClear
          placeholder='Filter patients by name'
          enterButton='Search'
          onSearch={onFilterByName}
        />
      </RLCol>
      <RLCol span={12}>
        <RLSelect
          mode='multiple'
          allowClear
          style={{ width: '100%' }}
          placeholder='Filter patient by arrhythmias '
          defaultValue={filters.arrhythmias}
          onChange={onFilterByArrhythmias}
          options={arrhythmiasOptions}
        />
      </RLCol>
      <RLCol span={24}>
        <RLListStatus<Patient>
          dataSource={dataSource}
          renderItem={(patient) => (
            <RLPatientCardStatus patient={patient} onChangeStatus={onChangeStatus} />
          )}
        />
      </RLCol>
    </RLRow>
  )
}

export default Patients
