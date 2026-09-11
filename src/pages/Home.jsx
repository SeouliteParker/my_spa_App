import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <section className="hero">
        <p className="eyebrow">React SPA Mission</p>
        <h1>버튼을 누르면 화면이 스르륵 바뀌는 SPA</h1>
        <p>React Router, 상태 관리, Supabase CRUD, 비동기 UI를 한 프로젝트에서 경험합니다.</p>
        <Link to="/items" className="button primary">메모 보러 가기</Link>
      </section>
    </PageTransition>
  )
}
