import { Button } from "@/components/ui/button"
import { Settings } from 'lucide-react'

interface HighlightsWidgetProps {
  data: {
    message: string
  }
}

export function HighlightsWidget({ data }: HighlightsWidgetProps) {
  return (
    <div className="h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxsaW5lIHgxPSIwIiB5PSIwIiB4Mj0iMCIgeTI9IjQwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-white text-xl">Dina höjdpunkter från 2024</h3>
        <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
      <p className="text-white/90 mb-6">{data.message}</p>
      <Button className="bg-pink-600 hover:bg-pink-700 text-white">
        Se höjdpunkter från 2024
      </Button>
    </div>
  )
}