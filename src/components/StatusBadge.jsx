import React from 'react'
import { Clock, UserCheck, Truck, CheckCircle2, XCircle } from 'lucide-react'
import { STATUS_LABEL } from '../interfaces/Order.js'

const STYLE = {
  pending:    { bg: 'bg-ink-muted/10', text: 'text-ink-muted',  Icon: Clock },
  assigned:   { bg: 'bg-primary/10',   text: 'text-primary',    Icon: UserCheck },
  on_the_way: { bg: 'bg-state-warning/10', text: 'text-state-warning', Icon: Truck },
  delivered:  { bg: 'bg-state-success/10', text: 'text-state-success', Icon: CheckCircle2 },
  cancelled:  { bg: 'bg-state-error/10',   text: 'text-state-error',   Icon: XCircle }
}

export default function StatusBadge({ status }) {
  const s = STYLE[status] || STYLE.pending
  const { Icon } = s
  return (
    <span className={`pill ${s.bg} ${s.text}`}>
      <Icon className="w-3.5 h-3.5" />
      {STATUS_LABEL[status] ?? status}
    </span>
  )
}
