import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionItem {
  id: string
  question: string
  answer: string
}

interface AccordionProps {
  items: AccordionItem[]
  /** Allow multiple open at once */
  multi?: boolean
  accentColor?: string
}

interface SingleAccordionProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  accentColor?: string
}

function AccordionRow({ question, answer, isOpen, onToggle, accentColor = 'var(--magenta-bold)' }: SingleAccordionProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl transition-all duration-200"
      style={{
        border: `1.5px solid ${isOpen ? 'rgba(209,0,113,0.2)' : 'var(--line)'}`,
        background: isOpen ? 'rgba(209,0,113,0.02)' : 'white',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className="font-semibold text-sm pr-4"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}
        >
          {question}
        </span>
        <span
          className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
          style={{
            background: isOpen ? accentColor : 'rgba(209,0,113,0.08)',
            color: isOpen ? 'white' : accentColor,
          }}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {/* Animated panel */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 300ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div className="overflow-hidden">
          <p
            className="px-6 pb-5 text-sm leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Accordion({ items, multi = false, accentColor }: AccordionProps) {
  const [openSet, setOpenSet] = useState<Set<string>>(new Set([items[0]?.id]))

  function toggle(id: string) {
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        if (!multi) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <AccordionRow
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openSet.has(item.id)}
          onToggle={() => toggle(item.id)}
          accentColor={accentColor}
        />
      ))}
    </div>
  )
}
