import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import useItemDetail from '../hooks/useItemDetail'
import ItemForm from '../components/ItemForm'
import Loading from '../components/Loading'
import ErrorState from '../components/ErrorState'
import PageTransition from '../components/PageTransition'

export default function ItemEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { item, loading, error } = useItemDetail(id)

  async function handleUpdate(values) {
    const { error } = await supabase.from('notes').update(values).eq('id', id)
    if (error) throw error
    navigate(`/items/${id}`)
  }

  if (loading) return <Loading />
  if (error) return <ErrorState message={error} />

  return (
    <PageTransition>
      <h1>메모 수정</h1>
      <ItemForm
        initialValues={{ title: item.title, content: item.content }}
        onSubmit={handleUpdate}
        submitLabel="수정 완료"
      />
    </PageTransition>
  )
}
