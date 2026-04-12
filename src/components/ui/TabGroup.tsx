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
            ? 'border-b border-line pb-0'
            : 'bg-[rgba(209,0,113,0.04)] rounded-2xl p-1.5'
        }`}
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
                className={`tab-pill flex items-center gap-2 ${isActive ? 'active' : ''}`}
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
              className={`tab-underline flex items-center gap-1.5 ${isActive ? 'active' : ''}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Content */}
      <div key={active} className="tab-content-enter">
        {activeTab?.content}
      </div>
    </div>
  )
}
