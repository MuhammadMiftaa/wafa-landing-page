import { useState, type ReactNode } from 'react'

interface Tab {
  id: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface TabGroupProps {
  tabs: Tab[]
  defaultTab?: string
  /** pill or underline */
  variant?: 'pill' | 'underline'
  /** Center or left-align tabs */
  tabAlign?: 'left' | 'center'
  className?: string
  onTabChange?: (id: string) => void
}

export function TabGroup({
  tabs,
  defaultTab,
  variant = 'pill',
  tabAlign = 'left',
  className,
  onTabChange,
}: TabGroupProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id)

  function handleSelect(id: string) {
    setActive(id)
    onTabChange?.(id)
  }

  const activeTab = tabs.find((t) => t.id === active)

  return (
    <div className={className}>
      {/* Tab bar */}
      <div
        className={`flex flex-wrap gap-2 mb-8 ${tabAlign === 'center' ? 'justify-center' : ''} ${
          variant === 'underline'
            ? 'border-b pb-0'
            : 'bg-[rgba(209,0,113,0.04)] rounded-2xl p-1.5'
        }`}
        style={variant === 'underline' ? { borderColor: 'var(--line)' } : {}}
        role="tablist"
      >
        {tabs.map((tab) => {
          const isActive = tab.id === active
          if (variant === 'pill') {
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleSelect(tab.id)}
                className="tab-pill flex items-center gap-2"
                style={
                  isActive
                    ? {
                        background: 'var(--magenta-bold)',
                        color: 'white',
                        boxShadow: '0 4px 16px rgba(209,0,113,0.3)',
                      }
                    : {}
                }
              >
                {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}
                {tab.label}
              </button>
            )
          }
          // underline variant
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleSelect(tab.id)}
              className="relative pb-4 px-2 text-sm font-semibold transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-heading)',
                color: isActive ? 'var(--magenta-bold)' : 'var(--text-secondary)',
                borderBottom: isActive ? '2px solid var(--magenta-bold)' : '2px solid transparent',
              }}
            >
              <span className="flex items-center gap-1.5">
                {tab.icon}
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div
        key={active}
        style={{ animation: 'fade-in 300ms ease both' }}
      >
        {activeTab?.content}
      </div>
    </div>
  )
}
