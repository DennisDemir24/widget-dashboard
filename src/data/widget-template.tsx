import { WidgetType } from '../types/widget'

interface WidgetTemplate {
  id: string
  type: WidgetType
  title: string
  description: string
  color: string
  icon: keyof typeof import('lucide-react')
}

export const widgetTemplates: WidgetTemplate[] = [
  {
    id: 'didYouKnow',
    type: 'didYouKnow',
    title: 'Did you know?',
    description: 'This widget displays a random fact or trivia.',
    color: 'bg-blue-600',
    icon: 'Lightbulb'
  },
  {
    id: 'dataIntegrity',
    type: 'dataIntegrity',
    title: 'Data integrity',
    description: 'This widget displays the integrity of the data in the system.',
    color: 'bg-red-500',
    icon: 'Shield'
  },
  {
    id: 'highlights',
    type: 'highlights',
    title: 'Highlights',
    description: 'This widget displays the highlights of the system.',
    color: 'bg-indigo-900',
    icon: 'Sparkles'
  },
  {
    id: 'jobStats',
    type: 'jobStats',
    title: 'Job stats',
    description: 'This widget displays the stats of the jobs in the system.',
    color: 'bg-emerald-600',
    icon: 'BarChart2'
  },
  {
    id: 'recentConnections',
    type: 'recentConnections',
    title: 'Recent connections',
    description: 'This widget displays the recent connections of the system.',
    color: 'bg-gray-800',
    icon: 'Users'
  },
  {
    id: 'consultants',
    type: 'consultants',
    title: 'Consultants',
    description: 'This widget displays the consultants in the system.',
    color: 'bg-purple-600',
    icon: 'Users'
  },
  {
    id: 'bookedSickConsultants',
    type: 'bookedSickConsultants',
    title: 'Booked Sick Consultants',
    description: 'This widget displays the booked sick consultants in the system.',
    color: 'bg-orange-600',
    icon: 'Users'
  }
]
