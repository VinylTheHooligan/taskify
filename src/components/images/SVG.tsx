interface SVGProps {
  width: number
  height: number
  path: string
  viewBox: string
  color?: string
}

export default function SVG({ width, height, path, viewBox, color }: SVGProps) {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <path d={path} fill={color} />
    </svg>
  )
}
