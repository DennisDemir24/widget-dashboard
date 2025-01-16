'use client'

import { useParams } from 'next/navigation'
import { consultantsData } from '@/data/consultants'

export default function ConsultantDetailsPage() {
  const params = useParams()
  const consultant = consultantsData.find(c => c.id === params.id)
  
  if (!consultant) {
    return <div className="p-6">Consultant not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex gap-8">
        {/* Left column with circle */}
        <div className="w-1/3">
          <div 
            className={`w-24 h-24 rounded-full ${
              consultant.status === 'active' 
                ? 'bg-green-500' 
                : 'bg-orange-400'
            }`}
          />
        </div>

        {/* Right column with form */}
        <div className="w-2/3 space-y-8">
          <h1 className="text-xl font-semibold">Personlig information (Endast läsbar)</h1>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="space-y-1">
              <label className="text-sm text-gray-500">För- och efternamn</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-200 rounded-lg" 
                value={`${consultant.firstName} ${consultant.lastName}`}
                readOnly 
              />
            </div>
            
            <div className="space-y-1">
              <label className="text-sm text-gray-500">Födelsedatum</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-500">Telefonnummer</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-500">E-postadress</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-500">Kontor</label>
              <input 
                type="text" 
                defaultValue="Malmö"
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-500">Konsultchef</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm text-gray-500">ID</label>
              <input 
                type="text" 
                value="691"
                className="w-full p-2 border border-gray-200 rounded-lg" 
                readOnly 
              />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Kompetenser</h2>
            <textarea 
              className="w-full p-2 border border-gray-200 rounded-lg h-32" 
              readOnly 
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Anteckningar (OBS! Synligt för konsulten)</h2>
            <textarea 
              className="w-full p-2 border border-gray-200 rounded-lg h-32" 
              placeholder="Anteckningar (OBS! Synligt för konsulten)"
              readOnly 
            />
          </div>
        </div>
      </div>
    </div>
  )
}