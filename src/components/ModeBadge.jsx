import React from 'react'
import { Bike, Car, Footprints } from 'lucide-react'
import { MODE_LABEL } from '../interfaces/Order.js'

const STYLE = {
  walk: { Icon: Footprints, color: 'text-secondary' },
  bike: { Icon: Bike,       color: 'text-primary' },
  car:  { Icon: Car,        color: 'text-accent' }
}

export default function ModeBadge({ mode }) {
  const s = STYLE[mode] || STYLE.bike
  const { Icon } = s
  return (
    <span className={`inline-flex items-center gap-1.5 text-body-sm font-semibold ${s.color}`}>
      <Icon className="w-4 h-4" />
      {MODE_LABEL[mode] ?? mode}
    </span>
  )
}
