import React from 'react'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      width="32" 
      height="32" 
      className={className}
    >
      <circle cx="16" cy="16" r="16" fill="#7c7fff" />
      <text 
        x="16" 
        y="21" 
        fontFamily="sans-serif" 
        fontWeight="bold" 
        fontSize="18" 
        fill="#ffffff" 
        textAnchor="middle"
      >
        $
      </text>
    </svg>
  )
}
