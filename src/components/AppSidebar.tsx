import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Database, Lightbulb, ArrowLeft, Building2 } from 'lucide-react';
import { useCompany } from '../context/CompanyContext';
import { CompanyLogo } from './CompanyLogo';

interface AppSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  collapsed = false,
  mobileOpen = false,
  onCloseMobile
}) => {
  const { selectedSummary } = useCompany();

  const navItems = [
    {
      to: "/company/intelligence",
      label: "Company Intelligence",
      icon: <Database className="h-4 w-4 shrink-0" />
    },
    {
      to: "/company/skills",
      label: "Skill Intelligence",
      icon: <Lightbulb className="h-4 w-4 shrink-0" />
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col justify-between transition-all duration-200 border-r ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${collapsed ? 'w-16' : 'w-64'} bg-[#F8FAFC] border-[#E5E7EB] text-[#334155]`}
      >
        {/* Top: Brand & Active Company Indicator */}
        <div>
          {/* Platform Pill Header */}
          <div className="h-16 px-4 border-b border-[#E5E7EB] flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2.5 overflow-hidden group"
              title="Return to Directory"
            >
              <div className="h-8 w-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                JSS
              </div>
              {!collapsed && (
                <div className="flex flex-col truncate">
                  <span className="font-bold text-sm text-slate-900 leading-tight">
                    JSSATE Noida
                  </span>
                  <span className="text-[10px] font-semibold text-blue-600 tracking-wider uppercase">
                    Intelligence Platform
                  </span>
                </div>
              )}
            </Link>
          </div>

          {/* Active Target Company Summary Card */}
          {selectedSummary && !collapsed && (
            <div className="p-3 m-3 bg-white border border-[#E5E7EB] rounded-xl shadow-2xs">
              <div className="flex items-center gap-2.5">
                <CompanyLogo
                  name={selectedSummary.name}
                  logoUrl={selectedSummary.logo_url}
                  websiteUrl={selectedSummary.website_url}
                  size="sm"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {selectedSummary.name}
                  </h4>
                  <span className="inline-block text-[10px] font-medium text-slate-500 truncate">
                    {selectedSummary.company_type} Recruiter
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Main Navigation Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={onCloseMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB] shadow-2xs'
                      : 'text-[#334155] hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
                title={collapsed ? item.label : undefined}
              >
                {item.icon}
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer: Return to All Companies */}
        <div className="p-3 border-t border-[#E5E7EB]">
          <Link
            to="/"
            onClick={onCloseMobile}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-slate-400 group-hover:text-blue-600" />
            {!collapsed && <span>All Companies</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};
