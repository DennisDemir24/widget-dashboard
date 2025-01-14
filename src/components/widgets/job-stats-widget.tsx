interface JobStatsWidgetProps {
    data: {
      visits: number
      applications: number
      connected: number
    }
  }
  
  export function JobStatsWidget({ data }: JobStatsWidgetProps) {
    return (
      <div className="h-full">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-white">Jobbstatistik</h3>
          <span className="text-white/70 text-sm">Sedan förra veckan</span>
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-4xl font-bold text-white">{data.visits}K</span>
              <span className="text-emerald-400 text-sm">↑ 55%</span>
            </div>
            <p className="text-white/90 text-sm">Besök</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-4xl font-bold text-white">{data.applications}K</span>
              <span className="text-emerald-400 text-sm">↑ 69%</span>
            </div>
            <p className="text-white/90 text-sm">Ansökningar</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-4xl font-bold text-white">{data.connected}</span>
              <span className="text-emerald-400 text-sm">↑ 70%</span>
            </div>
            <p className="text-white/90 text-sm">Connectade</p>
          </div>
        </div>
      </div>
    )
  }
  
  