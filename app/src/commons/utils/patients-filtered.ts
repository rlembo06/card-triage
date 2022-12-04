import type { Patient } from '@/commons'

const patientsFiltered = ({
  patientsList,
  filters,
}: {
  patientsList: Patient[]
  filters: { name: string; arrhythmias: string[] }
}): Patient[] =>
  patientsList.filter(({ patient_name, arrhythmias }: Patient) => {
    const shouldFilterByName = !!(
      filters.name && !patient_name.toLowerCase().includes(filters.name.toLowerCase())
    )
    const shouldFilterByArrhythmias: boolean =
      filters.arrhythmias.length > 0 &&
      filters.arrhythmias.some((arrhythmia) => !arrhythmias.includes(arrhythmia))

    return !(shouldFilterByName || shouldFilterByArrhythmias)
  })

export default patientsFiltered
