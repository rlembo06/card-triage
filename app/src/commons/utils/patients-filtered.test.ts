import type { Patient } from '@/commons'

import patientsFiltered from './patients-filtered'

describe('@/commons/utils/patients-to-data-source-filtered', () => {
  const patientsListMock: Patient[] = [
    {
      arrhythmias: ['AFib', 'AV Block', 'Pause', 'PSVC', 'PVC'],
      created_date: '2020-03-10T13:14:59+0000',
      id: '0',
      patient_name: 'Bob',
      status: 'PENDING',
    },
    {
      arrhythmias: ['Pause'],
      created_date: '2020-01-01T00:12:21+0000',
      id: '1',
      patient_name: 'Bill',
      status: 'REJECTED',
    },
    {
      arrhythmias: ['AFib', 'Pause'],
      created_date: '2019-12-31T00:11:14+0000',
      id: '2',
      patient_name: 'Elsa',
      status: 'DONE',
    },
  ]

  test('should return patients data, without filtering', () => {
    const expected: Patient[] = patientsListMock
    const result: Patient[] = patientsFiltered({
      patientsList: patientsListMock,
      filters: { name: '', arrhythmias: [] },
    })

    expect(result).toStrictEqual(expected)
  })

  test('should return patients data, filtered by name', () => {
    const expected: Patient[] = patientsListMock.filter(
      ({ patient_name }) => patient_name === 'Bill',
    )
    const result: Patient[] = patientsFiltered({
      patientsList: patientsListMock,
      filters: { name: 'bi', arrhythmias: [] },
    })

    expect(result).toStrictEqual(expected)
  })

  test('should return patients data, filtered by arrhythmias', () => {
    const expected: Patient[] = patientsListMock.filter(
      ({ arrhythmias }) => arrhythmias.includes('AFib'),
    )
    const result: Patient[] = patientsFiltered({
      patientsList: patientsListMock,
      filters: { name: '', arrhythmias: ['AFib'] },
    })

    expect(result).toStrictEqual(expected)
  })
})
