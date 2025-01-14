'use client'

import { useState } from 'react'

interface ConsultantWidgetProps {
      data: Array<{
        id: string
        firstName: string
        lastName: string
        status: 'active' | 'sick' | 'pending_sick'
      }>
  }

  
  export function ConsultantWidget({ data }: ConsultantWidgetProps) {
    const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'sick' | 'pending_sick'>('all');
  
    const filteredData = data?.filter(consultant => 
      selectedStatus === 'all' ? true : consultant.status === selectedStatus
    );
  
    if (!data?.length) {
      return (
        <div className="h-full">
          <h3 className="font-semibold text-white mb-4">Tillgängliga konsulter</h3>
          <div className="text-white/60">Inga tillgängliga konsulter</div>
        </div>
      );
    }
  
    const getStatusColor = (status: string) => {
      switch (status) {
        case 'active':
          return 'bg-green-500';
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
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-white">Tillgängliga konsulter</h3>
          <select 
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as any)}
            className="bg-white/10 text-white border border-white/20 rounded px-2 py-1"
          >
            <option value="all">Alla</option>
            <option value="active">Aktiva</option>
            <option value="sick">Sjuka</option>
            <option value="pending_sick">Väntar på sjukstatus</option>
          </select>
        </div>
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
                <span className="text-white">
                  {consultant.firstName} {consultant.lastName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }