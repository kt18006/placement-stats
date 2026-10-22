import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/TooltipProvider';
import { Toaster, Sonner } from './components/ui/Toaster';
import { CompanyProvider } from './context/CompanyContext';
import { AppLayout } from './components/AppLayout';
import { Index } from './pages/Index';
import { CompanyIntelligence } from './pages/CompanyIntelligence';
import { SkillIntelligence } from './pages/SkillIntelligence';
import { NotFound } from './pages/NotFound';

// Configure React Query Client with required options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5min
      gcTime: 10 * 60 * 1000,   // 10min
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CompanyProvider>
          <BrowserRouter>
            <Suspense fallback={
              <div className="min-h-screen flex items-center justify-center bg-white text-slate-500 text-xs">
                Loading JSSATE Intelligence Platform...
              </div>
            }>
              <Routes>
                <Route path="/" element={<Index />} />

                <Route path="/company" element={<AppLayout />}>
                  <Route index element={<Navigate to="intelligence" replace />} />
                  <Route path="intelligence" element={<CompanyIntelligence />} />
                  <Route path="skills" element={<SkillIntelligence />} />
                </Route>

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CompanyProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
