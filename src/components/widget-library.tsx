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
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Add Widget</DialogTitle>
          <p className="text-muted-foreground mt-2">
            Choose a widget to add to your dashboard. Each widget provides different insights and functionality.
          </p>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {widgetTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => handleAddWidget(template.type)}
              className={cn(
                'group relative flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200',
                'hover:scale-102 hover:shadow-lg',
                template.color,
              )}
            >
              <div className="text-white mb-3 transform transition-transform group-hover:scale-110">
                {template.icon === 'Calendar' && <Calendar className="h-8 w-8" />}
                {template.icon === 'BarChart2' && <BarChart2 className="h-8 w-8" />}
                {template.icon === 'Bell' && <Bell className="h-8 w-8" />}
                {template.icon === 'Puzzle' && <Puzzle className="h-8 w-8" />}
                {template.icon === 'Video' && <Video className="h-8 w-8" />}
                {template.icon === 'Image' && <Image className="h-8 w-8" />}
              </div>
              <span className="text-lg font-semibold text-white mb-2">
                {template.title}
              </span>
              <p className="text-sm text-white/80 text-center">
                {template.description}
              </p>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}