import { IconArrowUpRight, IconCheck } from './Icons'

type Part = {
  n: 1 | 2 | 3 | 4
  label: string
  name: string
  url: string
}

const parts: Part[] = [
  { n: 1, label: 'الجزء الأول', name: 'Speakout A2', url: 'https://makahsg94.github.io/speakout-A2/' },
  { n: 2, label: 'الجزء الثاني', name: 'Speakout B1', url: 'https://makahsg94.github.io/speakout-B1/' },
  { n: 3, label: 'الجزء الثالث', name: 'Speakout B1+', url: 'https://makahsg94.github.io/speakout-b1plus/' },
  { n: 4, label: 'الجزء الرابع', name: 'Speakout B2', url: 'https://makahsg94.github.io/speakout-B2/' },
]

export default function PartsBanner({ current }: { current: 1 | 2 | 3 | 4 }) {
  return (
    <section className="parts-banner overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-[var(--surface)] to-warm-50 p-4 shadow-sm dark:border-brand-800 dark:from-brand-950/70 dark:via-[var(--surface)] dark:to-warm-950/50 sm:p-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-300">
          Four parts {'\u00b7'} from A2 to B2
        </p>
        <p className="text-[12px] text-[var(--ink-soft)]" dir="rtl" lang="ar">
          اختار الجزء اللي تدرسه {'\u00b7'} كل جزء كورس مستقل
        </p>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {parts.map((part) => {
          const active = part.n === current
          return (
            <a
              key={part.n}
              href={part.url}
              aria-current={active ? 'page' : undefined}
              className={`group flex items-center gap-3 rounded-2xl border p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                active
                  ? 'border-brand-500 bg-brand-600 text-white shadow-md dark:border-brand-400'
                  : 'border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] hover:border-brand-300 dark:hover:border-brand-700'
              }`}
            >
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold ${
                  active ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-200'
                }`}
              >
                {part.n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-bold" dir="rtl" lang="ar">
                  {part.label}
                </span>
                <span className={`block truncate text-[11px] ${active ? 'text-white/80' : 'text-[var(--ink-faint)]'}`}>
                  {part.name}
                </span>
              </span>
              <span className={`shrink-0 ${active ? 'text-white' : 'text-brand-600 dark:text-brand-300'}`}>
                {active ? <IconCheck size={16} /> : <IconArrowUpRight size={16} />}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
