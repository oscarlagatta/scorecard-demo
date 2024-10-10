import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://ymvbjlrrwdgkfllcezzw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdmJqbHJyd2Rna2ZsbGNlenp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1ODg1MzYsImV4cCI6MjA0NDE2NDUzNn0.8WyLEQvSby5XL2oohBJGf1QGHggTbP5bS1MSAroHYpw'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

// Define types for our data structures
interface Customer {
  id: string
  name: string
  email: string
}

interface Scorecard {
  id: string
  customer_id: string
  total_score: number
}

interface ScorecardEntry {
  scorecard_id: string
  category: string
  score: number
  weight: number
}

// Helper function to generate random integer
const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min)

// Generate sample customers
const generateCustomers = async (count: number): Promise<Customer[]> => {
  const customers: Omit<Customer, 'id'>[] = Array.from({ length: count }, (_, i) => ({
    name: `Customer ${i + 1}`,
    email: `customer${i + 1}@example.com`
  }))

  const { data, error } = await supabase
    .from('customers')
    .insert(customers)
    .select()

  if (error) {
    console.error('Error inserting customers:', error)
    return []
  }
  return data as Customer[]
}

// Generate sample scorecards and scorecard entries
const generateScorecards = async (customers: Customer[], count: number): Promise<void> => {
  for (const customer of customers) {
    for (let i = 0; i < count; i++) {
      const totalScore = randomInt(50, 100)
      const { data: scorecard, error: scorecardError } = await supabase
        .from('scorecards')
        .insert({ customer_id: customer.id, total_score: totalScore })
        .select()
        .single()

      if (scorecardError) {
        console.error('Error inserting scorecard:', scorecardError)
        continue
      }

      const categories = ['Credit History', 'Income', 'Debt-to-Income Ratio', 'Employment History', 'Assets']
      const entries: Omit<ScorecardEntry, 'id'>[] = categories.map(category => ({
        scorecard_id: scorecard.id,
        category,
        score: randomInt(1, 20),
        weight: parseFloat(Math.random().toFixed(2))
      }))

      const { error: entriesError } = await supabase
        .from('scorecard_entries')
        .insert(entries)

      if (entriesError) {
        console.error('Error inserting scorecard entries:', entriesError)
      }
    }
  }
}

// Main function to generate all data
export const generateAllData = async (): Promise<void> => {
  console.log('Generating customers...')
  const customers = await generateCustomers(10)
  console.log(`Generated ${customers.length} customers`)

  console.log('Generating scorecards and entries...')
  await generateScorecards(customers, 3)
  console.log('Finished generating scorecards and entries')

  console.log('Data generation complete!')
}

// Run the data generation
generateAllData().catch(error => console.error('Error in data generation:', error))
