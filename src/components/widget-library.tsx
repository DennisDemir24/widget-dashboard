'use client'

import { useState } from 'react'
import { Layout, Calendar, BarChart2, Bell, Puzzle, Video, Image } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"
import { widgetTemplates } from '@/data/widget-template'

interface WidgetLibraryProps {
  onAddWidget: (type: string) => void
}

export function WidgetLibrary({ onAddWidget }: WidgetLibraryProps) {
  const [open, setOpen] = useState(false)

  const handleAddWidget = (type: string) => {
    onAddWidget(type)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Layout className="h-4 w-4" />
          Widget-bibliotek
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add Widget</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
          {widgetTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleAddWidget(template.type)}
              className={cn(
                'flex flex-col items-center justify-center p-4 rounded-lg transition-colors',
                template.color,
                'hover:opacity-90'
              )}
            >
              <div className="text-white mb-2">
                {template.icon === 'Calendar' && <Calendar className="h-6 w-6" />}
                {template.icon === 'BarChart2' && <BarChart2 className="h-6 w-6" />}
                {template.icon === 'Bell' && <Bell className="h-6 w-6" />}
                {template.icon === 'Puzzle' && <Puzzle className="h-6 w-6" />}
                {template.icon === 'Video' && <Video className="h-6 w-6" />}
                {template.icon === 'Image' && <Image className="h-6 w-6" />}
              </div>
              <span className="text-sm font-medium text-white">
                {template.title}
              </span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
