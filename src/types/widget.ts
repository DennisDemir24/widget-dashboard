export interface Position {
  x: number
  y: number
}

export interface WidgetData {
  jobs?: {
    current: number
  }
  productUpdates?: {
    message: string
  }
  recentConnections?: Array<{
    id: string
    email: string
    industry: string
    time: string
    initial: string
  }>
  highlights2024?: {
    message: string
  }
  didYouKnow?: {
    message: string
  }
  dataIntegrity?: {
    deletions: number
    missing: number
  }
  jobStats?: {
    visits: number
    applications: number
    connected: number
  }
    consultants?: Array<{
      id: string
      firstName: string
      lastName: string
      status: 'active' | 'sick' | 'pending_sick'
      isBooked: boolean
    }>
}

export type WidgetType = 
  | 'didYouKnow'
  | 'dataIntegrity'
  | 'highlights'
  | 'jobStats'
  | 'recentConnections'
  | 'jobs'
  | 'productUpdates'
  | 'highlights2024'
  | 'consultants'
  | 'bookedSickConsultants';

export interface Widget {
  id: string
  type: WidgetType
  title: string
  color: string
  position: Position
  data: WidgetData
  isDragging?: boolean
}
