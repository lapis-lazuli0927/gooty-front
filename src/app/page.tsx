'use client';

import { useState } from 'react';

export default function Home() {
  const [apiStatus, setApiStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const checkApiHealth = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3002/health');
      const data = await response.json();
      setApiStatus(`API Status: ${data.status} - ${data.service} (${data.timestamp})`);
    } catch (error) {
      setApiStatus(`API Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Gooty Frontend
        </h1>
        
        <div className="space-y-4">
          <button
            onClick={checkApiHealth}
            disabled={isLoading}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            {isLoading ? 'Checking...' : 'Check API Health'}
          </button>
          
          
          {apiStatus && (
            <div className="p-4 bg-gray-50 rounded border">
              <p className="text-sm text-gray-700">{apiStatus}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Next.js + TypeScript + Tailwind CSS</p>
          <p>API: Rails 8.0.3 + MySQL</p>
          <p>API Port: 3002, Frontend Port: 3001</p>
        </div>
      </div>
    </div>
  );
}
