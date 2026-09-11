import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import ItemForm from '../components/ItemForm'
import PageTransition from '../components/PageTransition'

export default function ItemCreate() {
  const navigate = useNavigate()

  async function handleCreate(values) {
    const { data, error } = await supabase.from('notes').insert(values).select().single()
    if (error) throw error
    navigate(`/items/${data.id}`)
  }

  return (
    <PageTransition>
      <h1>새 메모 등록</h1>
      <ItemForm onSubmit={handleCreate} submitLabel="등록" />
    </PageTransition>
  )
}
