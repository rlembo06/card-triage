import type { Patient } from '@/commons'
import type { RLListStatusItem } from '@/components'

const patientsToDataSourceFiltered = ({
  patientsList,
  filters,
}: {
  patientsList: Patient[]
  filters: { name: string; arrhythmias: string[] }
}): RLListStatusItem[] =>
  ((patientsList as Patient[]) || ([] as Patient[])).reduce(
    (acc: RLListStatusItem[], { patient_name: name, arrhythmias, ...patient }: Patient) => {
      const shouldFilterByName = !!(
        filters.name && !name.toLowerCase().includes(filters.name.toLowerCase())
      )
      const shouldFilterByArrhythmias: boolean =
        filters.arrhythmias.length > 0 &&
        filters.arrhythmias.some((arrhythmia) => arrhythmias.includes(arrhythmia))

      if (!(shouldFilterByName || shouldFilterByArrhythmias)) {
        return [...acc, { ...patient, name }]
      }
      return acc
    },
    [],
  )

export default patientsToDataSourceFiltered
