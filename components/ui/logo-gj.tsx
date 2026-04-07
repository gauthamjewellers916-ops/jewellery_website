import React from "react"

export function LogoGJ({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Diamond Shape */}
      <path 
        d="M50 5 L95 50 L50 95 L5 50 Z" 
        fill="white" 
        stroke="#E60000" 
        strokeWidth="2"
      />
      
      {/* Left Red Half */}
      <clipPath id="leftHalf">
        <rect x="0" y="0" width="50" height="100" />
      </clipPath>
      <path 
        d="M50 5 L95 50 L50 95 L5 50 Z" 
        fill="#E60000" 
        clipPath="url(#leftHalf)"
      />
      
      {/* "G" on Left (White) */}
      <text 
        x="28" 
        y="65" 
        fill="white" 
        fontSize="45" 
        fontWeight="bold" 
        fontFamily="serif"
        textAnchor="middle"
      >
        G
      </text>
      
      {/* "J" on Right (Red) */}
      <text 
        x="72" 
        y="65" 
        fill="#E60000" 
        fontSize="45" 
        fontWeight="bold" 
        fontFamily="serif"
        textAnchor="middle"
      >
        J
      </text>
      
      {/* Central Line to clean up overlap */}
      <line x1="50" y1="5" x2="50" y2="95" stroke="#E60000" strokeWidth="1" />
    </svg>
  )
}
