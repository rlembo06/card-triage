import type { Patient } from '@/commons'

import type { PatientsState } from './types'

import reducer, { actions, selectors } from './slice'

const PATIENT_A: Patient = {
  id: '1',
  arrhythmias: ['PVC', 'PSVC', 'AFib'],
  created_date: '2020-03-10T13:14:59+0000',
  patient_name: 'Bob',
  status: 'PENDING',
}

// @ts-ignore: ignore action for test
const DEFAULT_PATIENTS_STATE: PatientsState = reducer(undefined, {})
const PATIENTS_STATE_MOCK: PatientsState = Object.assign({}, DEFAULT_PATIENTS_STATE, {
  ids: [PATIENT_A.id],
  entities: {
    [PATIENT_A.id]: PATIENT_A,
  },
})

describe('store/ducks/patients/slice', () => {
  describe('reducers', () => {
    describe('updatePatientStatus', () => {
      test('should change status', () => {
        expect(
          reducer(
            PATIENTS_STATE_MOCK,
            actions.updatePatientStatus({ status: 'DONE', id: PATIENT_A.id }),
          ),
        ).toStrictEqual({
          ...PATIENTS_STATE_MOCK,
          entities: {
            ...PATIENTS_STATE_MOCK.entities,
            [PATIENT_A.id]: {
              ...PATIENTS_STATE_MOCK.entities[PATIENT_A.id],
              status: 'DONE',
            },
          },
        })
      })
    })
  })

  describe('extraReducers', () => {
    describe('Cases for "fetchPatientsList"', () => {
      it('should handle thunk "pending" action', () => {
        expect(reducer(DEFAULT_PATIENTS_STATE, actions.fetchPatientsList.pending)).toStrictEqual({
          ...DEFAULT_PATIENTS_STATE,
          status: {
            ...DEFAULT_PATIENTS_STATE.status,
            fetching: {
              ...DEFAULT_PATIENTS_STATE.status.fetching,
              status: 'PENDING',
              error: null,
            },
          },
        })
      })

      it('should handle thunk "fulfilled" action', () => {
        expect(
          reducer(DEFAULT_PATIENTS_STATE, actions.fetchPatientsList.fulfilled([PATIENT_A], '')),
        ).toStrictEqual({
          ...DEFAULT_PATIENTS_STATE,
          ids: [PATIENT_A.id],
          entities: {
            ...DEFAULT_PATIENTS_STATE.entities,
            [PATIENT_A.id]: PATIENT_A,
          },
          status: {
            ...DEFAULT_PATIENTS_STATE.status,
            fetching: {
              ...DEFAULT_PATIENTS_STATE.status.fetching,
              status: 'DONE',
              error: null,
            },
          },
        })
      })

      it('should handle thunk "rejected" action', () => {
        const error = new Error('Something wrong!')
        expect(
          reducer(DEFAULT_PATIENTS_STATE, actions.fetchPatientsList.rejected(error, '')),
        ).toStrictEqual({
          ...DEFAULT_PATIENTS_STATE,
          status: {
            ...DEFAULT_PATIENTS_STATE.status,
            fetching: {
              ...DEFAULT_PATIENTS_STATE.status.fetching,
              status: 'REJECTED',
              error: error.message,
            },
          },
        })
      })
    })
  })

  describe('selectors', () => {
    describe('selectStatus', () => {
      ;[
        {
          msg: 'should return all status is map',
          state: { patients: DEFAULT_PATIENTS_STATE },
          expected: { fetching: { status: 'NONE', error: null } },
        },
      ].forEach((testCase) => {
        it(testCase.msg, () => {
          expect(selectors.selectStatus(testCase.state)).toStrictEqual(testCase.expected)
        })
      })
    })
  })
})
