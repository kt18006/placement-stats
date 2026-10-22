import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 text-center">
      <div className="h-16 w-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2 font-heading">
        404 - Page Not Found
      </h1>
      <p className="text-sm text-slate-500 max-w-md mb-6 font-body">
        The requested URL does not exist on the JSSATE Noida Placement & Corporate Intelligence Platform.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
      >
        <Home className="h-4 w-4" />
        <span>Return to Companies Directory</span>
      </Link>
    </div>
  );
};
