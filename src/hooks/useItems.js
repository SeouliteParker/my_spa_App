import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function useItems() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchItems = useCallback(async () => {
    setLoading(true)
    setError('')

    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      setError(error.message)
      setItems([])
    } else {
      setItems(data ?? [])
    }

    setLoading(false)
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  return { items, loading, error, refetch: fetchItems }
}
