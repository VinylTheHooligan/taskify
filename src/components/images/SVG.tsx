interface TaskifyLogoProps {
  width: number
  height: number
  path: string
  viewBox: string
  color?: string
}

export default function TaskifyLogo({ width, height, path, viewBox, color }: TaskifyLogoProps) {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d={`${path}`} fill={`${color}`} />
    </svg>
  )
}
