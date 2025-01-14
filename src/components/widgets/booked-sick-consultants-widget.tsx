'use client'

interface BookedSickConsultantWidgetProps {
  data: Array<{
    id: string
    firstName: string
    lastName: string
    status: 'active' | 'sick' | 'pending_sick'
    isBooked: boolean
  }>
}

export function BookedSickConsultantWidget({ data }: BookedSickConsultantWidgetProps) {
  const filteredData = data?.filter(consultant => 
    consultant.isBooked && (consultant.status === 'sick' || consultant.status === 'pending_sick')
  );

  if (!filteredData?.length) {
    return (
      <div className="h-full">
        <h3 className="font-semibold text-white mb-4">Bokade sjuka konsulter</h3>
        <div className="text-white/60">Inga bokade sjuka konsulter</div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sick':
        return 'bg-red-500';
      case 'pending_sick':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="h-full">
      <h3 className="font-semibold text-white mb-4">Bokade sjuka konsulter</h3>
      <div className="space-y-4">
        {filteredData.map((consultant, index) => {
          const initials = `${consultant.firstName[0]}${consultant.lastName[0]}`;
          return (
            <div key={index} className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-semibold">{initials}</span>
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full ${getStatusColor(consultant.status)}`} />
              </div>
              <div className="flex flex-col">
                <span className="text-white">
                  {consultant.firstName} {consultant.lastName}
                </span>
                <span className="text-white/60 text-sm">
                  {consultant.status === 'sick' ? 'Sjuk' : 'Väntar på sjukstatus'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}