import { useState, useCallback, useRef } from 'react'
import { Position } from '../types/widget'

interface DraggableState {
  isDragging: boolean
  origin: Position
  translation: Position
}

export function useDraggable(initialPosition: Position) {
  const [state, setState] = useState<DraggableState>({
    isDragging: false,
    origin: { x: 0, y: 0 },
    translation: initialPosition,
  })

  const lastPosition = useRef(initialPosition)

  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    const { pageX, pageY } = event
    setState(prev => ({
      ...prev,
      isDragging: true,
      origin: { x: pageX - prev.translation.x, y: pageY - prev.translation.y }
    }))
  }, [])

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { pageX, pageY } = event
    setState(prev => ({
      ...prev,
      translation: {
        x: pageX - prev.origin.x,
        y: pageY - prev.origin.y
      }
    }))
  }, [])

  const handleMouseUp = useCallback(() => {
    setState(prev => {
      lastPosition.current = prev.translation
      return { ...prev, isDragging: false }
    })
  }, [])

  return {
    isDragging: state.isDragging,
    position: state.translation,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    lastPosition: lastPosition.current
  }
}

