import { Link } from 'react-router-dom'
import useItems from '../hooks/useItems'
import ItemList from '../components/ItemList'
import Loading from '../components/Loading'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'
import PageTransition from '../components/PageTransition'

export default function Items() {
  const { items, loading, error } = useItems()

  return (
    <PageTransition>
      <div className="page-head">
        <div>
          <p className="eyebrow">Notes</p>
          <h1>메모 목록</h1>
        </div>
        <Link to="/items/new" className="button primary">새 메모</Link>
      </div>

      {loading && <Loading />}
      {!loading && error && <ErrorState message={error} />}
      {!loading && !error && items.length === 0 && <EmptyState />}
      {!loading && !error && items.length > 0 && <ItemList items={items} />}
    </PageTransition>
  )
}
