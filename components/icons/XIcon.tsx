import React from "react"

interface XIconProps {
  className?: string
  size?: number
}

export function XIcon({ className, size = 24 }: XIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="-480 -466.815 2160 2160"
      width={size}
      height={size}
      className={className}
    >
      <circle cx="600" cy="613.185" r="1080"/>
      <path 
        fill="#fff" 
        d="M306.615 79.694H144.011L892.476 1150.3h162.604ZM0 0h357.328l309.814 450.883L1055.03 0h105.86L714.15 519.295 1200 1226.37H842.672L515.493 750.215 105.866 1226.37H0l468.485-544.568Z"
      />
    </svg>
  )
} 