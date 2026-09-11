import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function useItemDetail(id) {
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchItem() {
      setLoading(true)
      setError('')

      const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        setError(error.message)
        setItem(null)
      } else {
        setItem(data)
      }

      setLoading(false)
    }

    if (id) fetchItem()
  }, [id])

  return { item, loading, error }
}
