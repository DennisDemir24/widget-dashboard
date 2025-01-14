interface RecentConnectionsWidgetProps {
    data: Array<{
      id: string
      email: string
      industry: string
      time: string
      initial: string
    }>
  }
  
  export function RecentConnectionsWidget({ data }: RecentConnectionsWidgetProps) {
    return (
      <div className="h-full">
        <h3 className="font-semibold text-white mb-4">Nyligen connectade</h3>
        <div className="space-y-3">
          {data.map((connection) => (
            <div key={connection.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white">
                  {connection.initial}
                </div>
                <div>
                  <p className="text-white text-sm">{connection.email}</p>
                  <p className="text-gray-400 text-xs">{connection.industry}</p>
                </div>
              </div>
              <span className="text-gray-400 text-xs">{connection.time}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  