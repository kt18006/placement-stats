import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, ChevronRight, Home, Building2, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { AppSidebar } from './AppSidebar';
import { useCompany } from '../context/CompanyContext';

export const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { selectedSummary } = useCompany();
  const location = useLocation();

  const isSkillsPage = location.pathname.includes('/skills');
  const currentSectionName = isSkillsPage ? "Skill Intelligence" : "Company Intelligence";

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex text-slate-800">
      {/* Sidebar */}
      <AppSidebar
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col min-w-0 transition-all duration-200 ${
        collapsed ? 'lg:pl-16' : 'lg:pl-64'
      }`}>
        {/* Top Header / Breadcrumbs Bar */}
        <header className="sticky top-0 z-30 h-14 bg-white border-b border-[#E5E7EB] px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            {/* Mobile Toggle Trigger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Desktop Collapse Toggle */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle sidebar collapse"
            >
              {collapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </button>

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 truncate" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
                <Home className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Directory</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
              {selectedSummary && (
                <>
                  <span className="font-semibold text-slate-800 truncate">
                    {selectedSummary.name}
                  </span>
                  <ChevronRight className="h-3 w-3 text-slate-400 shrink-0" />
                </>
              )}
              <span className="text-blue-600 font-medium truncate">
                {currentSectionName}
              </span>
            </nav>
          </div>

          {/* Quick Header Right Actions */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Building2 className="h-3.5 w-3.5 text-slate-500" />
              <span className="hidden sm:inline">Switch Company</span>
            </Link>
          </div>
        </header>

        {/* Nested Route Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#FFFFFF]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
