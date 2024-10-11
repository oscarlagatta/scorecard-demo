export interface Metric {
  id: string
  name: string
  description: string
  category: string
  unit: string | null
  min_value: number | null
  max_value: number | null
  weight: number
}
