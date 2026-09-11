import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import useItemDetail from '../hooks/useItemDetail'
import Loading from '../components/Loading'
import ErrorState from '../components/ErrorState'
import Button from '../components/Button'
import PageTransition from '../components/PageTransition'

export default function ItemDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { item, loading, error } = useItemDetail(id)

  async function handleDelete() {
    if (!window.confirm('정말 삭제할까요?')) return

    const { error } = await supabase.from('notes').delete().eq('id', id)
    if (error) {
      alert(error.message)
      return
    }

    navigate('/items')
  }

  if (loading) return <Loading />
  if (error) return <ErrorState message={error} />

  return (
    <PageTransition>
      <article className="detail">
        <p className="eyebrow">Note Detail</p>
        <h1>{item.title}</h1>
        <p>{item.content}</p>

        <div className="actions">
          <Link to={`/items/${id}/edit`} className="button secondary">수정</Link>
          <Button variant="danger" onClick={handleDelete}>삭제</Button>
        </div>
      </article>
    </PageTransition>
  )
}
