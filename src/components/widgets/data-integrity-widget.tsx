interface DataIntegrityWidgetProps {
    data: {
      deletions: number
      missing: number
    }
  }
  
  export function DataIntegrityWidget({ data }: DataIntegrityWidgetProps) {
    return (
      <div className="h-full">
        <h3 className="font-semibold text-white mb-4">Data och integritet</h3>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-4xl font-bold text-white">{data.deletions}</span>
              <span className="text-white/70 text-xs">ℹ️</span>
            </div>
            <p className="text-white/90 text-sm">Förfrågningar om borttagning</p>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-4xl font-bold text-white">{data.missing}</span>
              <span className="text-white/70 text-xs">ℹ️</span>
            </div>
            <p className="text-white/90 text-sm">Medgivanden som saknas</p>
          </div>
        </div>
      </div>
    )
  }