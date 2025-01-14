import { Lightbulb, Shield, Sparkles, BarChart2, Users } from 'lucide-react'
import { WidgetType } from '../types/widget'

interface WidgetTemplate {
  id: string
  type: WidgetType
  title: string
  color: string
  icon: keyof typeof import('lucide-react')
}

export const widgetTemplates: WidgetTemplate[] = [
  {
    id: 'didYouKnow',
    type: 'didYouKnow',
    title: 'Did you know?',
    color: 'bg-blue-600',
    icon: 'Lightbulb'
  },
  {
    id: 'dataIntegrity',
    type: 'dataIntegrity',
    title: 'Data integrity',
    color: 'bg-red-500',
    icon: 'Shield'
  },
  {
    id: 'highlights',
    type: 'highlights',
    title: 'Highlights',
    color: 'bg-indigo-900',
    icon: 'Sparkles'
  },
  {
    id: 'jobStats',
    type: 'jobStats',
    title: 'Job stats',
    color: 'bg-emerald-600',
    icon: 'BarChart2'
  },
  {
    id: 'recentConnections',
    type: 'recentConnections',
    title: 'Recent connections',
    color: 'bg-gray-800',
    icon: 'Users'
  },
  {
    id: 'consultants',
    type: 'consultants',
    title: 'Consultants',
    color: 'bg-purple-600',
    icon: 'Users'
  },
  {
    id: 'bookedSickConsultants',
    type: 'bookedSickConsultants',
    title: 'Booked Sick Consultants',
    color: 'bg-orange-600',
    icon: 'Users'
  }
]
