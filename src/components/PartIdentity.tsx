import type { CSSProperties } from 'react'

type Part = {
  label: string
  code: string
  title: string
  tagline: string
  mark: string
  color: string
  soft: string
}

const PARTS: Record<1 | 2 | 3 | 4, Part> = {
  1: { label: 'الجزء الأول', code: 'A2', title: 'بداية الخط', tagline: 'أول حرف… أول محادثة واثقة.', mark: '◈', color: '#0284c7', soft: '#e0f2fe' },
  2: { label: 'الجزء الثاني', code: 'B1', title: 'خطوة التقدّم', tagline: 'من الجملة القصيرة إلى التعبير الواضح.', mark: '✦', color: '#7c3aed', soft: '#ede9fe' },
  3: { label: 'الجزء الثالث', code: 'B1+', title: 'حافة الإتقان', tagline: 'ما بين B1 وB2 — أفكار أدقّ وقراءة أعمق.', mark: '◆', color: '#d97706', soft: '#fef3c7' },
  4: { label: 'الجزء الرابع', code: 'B2', title: 'قِمّة الخط', tagline: 'رأي، حجّة، وسرد يوقف عنده المستمع.', mark: '✧', color: '#059669', soft: '#d1fae5' },
}

export default function PartIdentity({ current }: { current: 1 | 2 | 3 | 4 }) {
  const part = PARTS[current]
  const vars = { '--pi-color': part.color, '--pi-soft': part.soft } as CSSProperties

  return (
    <section
      className="part-identity"
      data-part={current}
      style={vars}
      aria-label={`${part.label} · ${part.code}`}
    >
      <span className="part-identity__num" aria-hidden="true">{current}</span>
      <span className="part-identity__mark" aria-hidden="true">{part.mark}</span>
      <div className="part-identity__body">
        <p className="part-identity__eyebrow">
          <span dir="rtl" lang="ar">{part.label}</span>
          {' \u00b7 '}
          <span dir="ltr">{part.code}</span>
        </p>
        <p className="part-identity__title" dir="rtl" lang="ar">{part.title}</p>
        <p className="part-identity__tagline" dir="rtl" lang="ar">{part.tagline}</p>
      </div>
      <span className="part-identity__dots" aria-hidden="true">
        {[1, 2, 3, 4].map((n) => <i key={n} className={n === current ? 'on' : ''} />)}
      </span>
    </section>
  )
}
