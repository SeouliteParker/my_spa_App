import { useState } from 'react'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

export default function ItemForm({ initialValues = { title: '', content: '' }, onSubmit, submitLabel = '저장' }) {
  const [title, setTitle] = useState(initialValues.title)
  const [content, setContent] = useState(initialValues.content)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [requestError, setRequestError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const nextErrors = {}
    if (!title.trim()) nextErrors.title = '제목을 입력해 주세요.'
    if (!content.trim()) nextErrors.content = '내용을 입력해 주세요.'
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) return

    try {
      setSubmitting(true)
      setRequestError('')
      await onSubmit({ title: title.trim(), content: content.trim() })
    } catch (err) {
      setRequestError(err.message || '저장에 실패했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {requestError && <div className="state-box error">{requestError}</div>}

      <Input
        label="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={errors.title}
      />

      <TextArea
        label="내용"
        rows="8"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        error={errors.content}
      />

      <Button type="submit" disabled={submitting}>
        {submitting ? '저장 중...' : submitLabel}
      </Button>
    </form>
  )
}
