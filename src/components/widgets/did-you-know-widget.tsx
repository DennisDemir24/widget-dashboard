import { Lightbulb } from 'lucide-react'

interface DidYouKnowWidgetProps {
  data: {
    message: string
  }
}

export function DidYouKnowWidget({ data }: DidYouKnowWidgetProps) {
  return (
    <div className="h-full">
      <div className="flex items-start gap-3">
        <Lightbulb className="h-5 w-5 text-white mt-1" />
        <div>
          <h3 className="font-semibold text-white mb-2">Visste du att...</h3>
          <p className="text-white/90">{data.message}</p>
        </div>
      </div>
    </div>
  )
}