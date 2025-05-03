// This is a placeholder error component that can be used throughout the application
// to handle and display errors gracefully

import React from 'react';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="p-4 border border-red-200 rounded-md bg-red-50">
      <h2 className="text-lg font-bold text-red-800 mb-2">Something went wrong</h2>
      <pre className="text-sm bg-white p-3 rounded border border-red-300 mb-4 max-w-full overflow-auto">
        {error?.message || 'An unknown error occurred'}
      </pre>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorFallback;
