import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  return (
    <article className="card">
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <Link to={`/items/${item.id}`}>상세 보기 →</Link>
    </article>
  )
}
