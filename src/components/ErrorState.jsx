export default function ErrorState({ message = '요청에 실패했습니다.' }) {
  return <div className="state-box error">{message}</div>
}
