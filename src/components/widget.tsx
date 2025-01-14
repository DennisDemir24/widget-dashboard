'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import { Widget as WidgetType } from '../types/widget'
import { useDraggable } from '../hooks/useDraggable'
import { cn } from '@/lib/utils'
import { RecentConnectionsWidget } from './widgets/recent-connections-widget'
import { HighlightsWidget } from './widgets/highlights-widget'
import { DidYouKnowWidget } from './widgets/did-you-know-widget'
import { DataIntegrityWidget } from './widgets/data-integrity-widget'
import { JobStatsWidget } from './widgets/job-stats-widget'
import { ConsultantWidget } from './widgets/consultant-widget'
import { BookedSickConsultantWidget } from './widgets/booked-sick-consultants-widget'

interface WidgetProps {
  widget: WidgetType
  onRemove: (id: string) => void
  onPositionChange: (id: string, position: { x: number; y: number }) => void
}

export function Widget({ widget, onRemove, onPositionChange }: WidgetProps) {
  const {
    isDragging,
    position,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    lastPosition
  } = useDraggable(widget.position)

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  const renderWidget = () => {
    switch (widget.type) {
      case 'recentConnections':
        return <RecentConnectionsWidget data={widget.data.recentConnections!} />
      case 'highlights2024':
        return <HighlightsWidget data={widget.data.highlights2024!} />
      case 'didYouKnow':
        return <DidYouKnowWidget data={widget.data.didYouKnow!} />
      case 'dataIntegrity':
        return <DataIntegrityWidget data={widget.data.dataIntegrity!} />
      case 'jobStats':
        return <JobStatsWidget data={widget.data.jobStats!} />
      case 'consultants':
        return <ConsultantWidget data={widget.data.consultants!} />
      case 'bookedSickConsultants':
        return <BookedSickConsultantWidget data={widget.data.consultants!} />
      default:
        return null
    }
  }

  return (
    <div
      className={cn(
        'absolute rounded-lg shadow-lg w-[350px]',
        widget.color,
        isDragging && 'opacity-75 cursor-grabbing'
      )}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        zIndex: isDragging ? 100 : 1
      }}
    >
      <div className="relative">
        <button
          onClick={() => onRemove(widget.id)}
          className="absolute right-2 top-2 text-white/80 hover:text-white z-10"
        >
          <X className="h-4 w-4" />
        </button>
        <div
          className="p-4 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
        >
          {renderWidget()}
        </div>
      </div>
    </div>
  )
}
