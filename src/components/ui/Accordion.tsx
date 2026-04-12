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
}

interface SingleAccordionProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function AccordionRow({ question, answer, isOpen, onToggle }: SingleAccordionProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border-[1.5px] transition-all duration-200 ${
        isOpen
          ? 'border-[rgba(209,0,113,0.2)] bg-[rgba(209,0,113,0.02)]'
          : 'border-line bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="pr-4 font-heading text-sm font-semibold text-text-primary">
          {question}
        </span>
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? 'bg-magenta-bold text-white'
              : 'bg-[rgba(209,0,113,0.08)] text-magenta-bold'
          }`}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {/* Animated panel */}
      <div className={`accordion-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Accordion({ items, multi = false }: AccordionProps) {
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
        />
      ))}
    </div>
  )
}
