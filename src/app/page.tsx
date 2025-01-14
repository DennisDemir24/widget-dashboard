'use client'

import { useState, useCallback } from 'react'
import { Widget } from '../components/widget'
import { WidgetLibrary } from '../components/widget-library'
import { Widget as WidgetType } from '../types/widget'

const consultantsData = [
  {
    id: '1',
    firstName: 'Johan',
    lastName: 'Hell',
    status: 'sick',
    isBooked: true
  },
  {
    id: '2',
    firstName: 'Maria',
    lastName: 'Andersson',
    status: 'active',
    isBooked: true
  },
  {
    id: '3',
    firstName: 'Erik',
    lastName: 'Svensson',
    status: 'pending_sick',
    isBooked: true
  },
  {
    id: '4',
    firstName: 'Anna',
    lastName: 'Lindberg',
    status: 'sick',
    isBooked: false
  }
]

const initialWidgets: WidgetType[] = [
  {
    id: 'connections-1',
    type: 'recentConnections',
    title: 'Nyligen connectade',
    color: 'bg-gray-800',
    position: { x: 20, y: 460 },
    data: {
      recentConnections: [
        {
          id: '1',
          email: 'dleepmadusanka2@gmail.com',
          industry: 'Produktion/Industri',
          time: '12tim',
          initial: 'D'
        },
        {
          id: '2',
          email: 'johanhjertqvist@yahoo.com',
          industry: 'Lager och logistik',
          time: '3dag',
          initial: 'J'
        }
      ]
    }
  },
  {
    id: 'highlights-1',
    type: 'highlights2024',
    title: 'Dina höjdpunkter från 2024',
    color: 'bg-indigo-900',
    position: { x: 390, y: 20 },
    data: {
      highlights2024: {
        message: 'Vi på Teamtailor vill tacka dig på Boxflow för det här året tillsammans med oss. Som en liten present har vi sammanställt dina rekryteringshöjdpunkter från 2024.'
      }
    }
  },
  {
    id: 'didyouknow-1',
    type: 'didYouKnow',
    title: 'Visste du att...',
    color: 'bg-blue-600',
    position: { x: 390, y: 340 },
    data: {
      didYouKnow: {
        message: 'Set time-based goals to reach targets and boost candidate experience with Guided Recruitment '
      }
    }
  },
  {
    id: 'integrity-1',
    type: 'dataIntegrity',
    title: 'Data och integritet',
    color: 'bg-red-500',
    position: { x: 390, y: 460 },
    data: {
      dataIntegrity: {
        deletions: 1,
        missing: 0
      }
    }
  },
  {
    id: 'stats-1',
    type: 'jobStats',
    title: 'Jobbstatistik',
    color: 'bg-emerald-600',
    position: { x: 760, y: 20 },
    data: {
      jobStats: {
        visits: 5.8,
        applications: 1.6,
        connected: 320
      }
    }
  },
  {
    id: 'consultants-1',
    type: 'consultants',
    title: 'Alla konsulter',
    color: 'bg-blue-800',
    position: { x: 20, y: 240 },
    data: {
      consultants: consultantsData
    }
  },
  {
    id: 'booked-sick-1',
    type: 'bookedSickConsultants',
    title: 'Bokade sjuka konsulter',
    color: 'bg-red-800',
    position: { x: 20, y: 20 },
    data: {
      consultants: consultantsData
    }
  },
  /* {
    id: 'consultants',
    type: 'consultants',
    title: 'Tillgängliga konsulter',
    color: 'bg-gray-800',
    position: { x: 760, y: 340 },
    data: {
      consultants: [
        { 
          id: '1',
          firstName: 'Fredrik',
          lastName: 'Hjertqvist',
          status: 'active',
          isBooked: true
        },
        { 
          id: '2',
          firstName: 'Fredrik',
          lastName: 'Flenger',
          status: 'pending_sick',
          isBooked: true
        },
        { 
          id: '3',
          firstName: 'Anders',
          lastName: 'Hjertqvist',
          status: 'sick',
          isBooked: true
        },
        { 
          id: '4',
          firstName: 'Klara',
          lastName: 'Hjertqvist',
          status: 'pending_sick',
          isBooked: false
        },
        { 
          id: '5',
          firstName: 'Erik',
          lastName: 'Hjertqvist',
          status: 'pending_sick',
          isBooked: true
        },
        { 
          id: '6',
          firstName: 'Erik',
          lastName: 'Eriksson',
          status: 'active',
          isBooked: false
        },
        { 
          id: '7',
          firstName: 'Johan',
          lastName: 'Hell',
          status: 'sick',
          isBooked: true
        }
      ]
    }
  }, */
  /* {
    id: 'booked-sick-1',
    type: 'bookedSickConsultants',
    title: 'Bokade sjuka konsulter',
    color: 'bg-red-800',
    position: { x: 20, y: 20 },
    data: {
      consultants: [
        {
          id: '1',
          firstName: 'Johan',
          lastName: 'Hell',
          status: 'sick',
          isBooked: true
        }
      ]
    }
  }, */
]

const widgetTemplates = [
  { type: 'didYouKnow', title: 'Visste du att...', color: 'bg-blue-600' },
  { type: 'dataIntegrity', title: 'Data och integritet', color: 'bg-red-500' },
  { type: 'highlights', title: 'Höjdpunkter', color: 'bg-indigo-900' },
  { type: 'highlights2024', title: 'Dina höjdpunkter från 2024', color: 'bg-indigo-900' },
  { type: 'jobStats', title: 'Jobbstatistik', color: 'bg-emerald-600' },
  { type: 'jobs', title: 'Mina jobb', color: 'bg-gray-800' },
  { type: 'productUpdates', title: 'Produktuppdateringar', color: 'bg-indigo-600' },
  { type: 'recentConnections', title: 'Nyligen connectade', color: 'bg-gray-800' },
  { type: 'consultants', title: 'Tillgängliga konsulter', color: 'bg-gray-800' },
  { type: 'bookedSickConsultants', title: 'Bokade sjuka konsulter', color: 'bg-gray-800' },
]

export default function Home() {
  const [widgets, setWidgets] = useState<WidgetType[]>(initialWidgets)

  const handleAddWidget = (type: string) => {
    // Validate that the type is a valid WidgetType
    const template = widgetTemplates.find(t => t.type === type)
    if (!template) {
      console.error(`Invalid widget type: ${type}`)
      return
    }

    // Create initial data based on widget type
    const initialData: Record<string, any> = {}
    switch (type) {
      case 'didYouKnow':
        initialData.didYouKnow = { message: 'Click to edit this tip' }
        break
      case 'dataIntegrity':
        initialData.dataIntegrity = { deletions: 0, missing: 0 }
        break
      case 'highlights':
        initialData.highlights = { message: 'Add your highlight here' }
        break
      case 'highlights2024':
        initialData.highlights2024 = { message: 'Add 2024 highlight here' }
        break
      case 'jobStats':
        initialData.jobStats = { visits: 0, applications: 0, connected: 0 }
        break
      case 'recentConnections':
        initialData.recentConnections = []
        break
      case 'jobs':
        initialData.jobs = { current: 0 }
        break
      case 'productUpdates':
        initialData.productUpdates = { message: 'Add product update here' }
        break
    }

    const newWidget: WidgetType = {
      id: `${type}-${Date.now()}`,
      type: template.type,
      title: template.title,
      color: template.color,
      position: {
        x: Math.random() * (window.innerWidth - 320),
        y: Math.random() * (window.innerHeight - 200)
      },
      data: initialData
    }

    setWidgets(prev => [...prev, newWidget])
  }

  const handleRemoveWidget = (id: string) => {
    setWidgets(prev => prev.filter(widget => widget.id !== id))
  }

  const handlePositionChange = useCallback((id: string, position: { x: number; y: number }) => {
    setWidgets(prev =>
      prev.map(widget =>
        widget.id === id ? { ...widget, position } : widget
      )
    )
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Välkommen, John </h1>
        <WidgetLibrary onAddWidget={handleAddWidget} />
      </header>
      <main className="relative p-4 h-[calc(100vh-73px)]">
        {widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            onRemove={handleRemoveWidget}
            onPositionChange={handlePositionChange}
          />
        ))}
      </main>
    </div>
  )
}
