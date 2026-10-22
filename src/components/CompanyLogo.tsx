import React, { useState } from 'react';

interface CompanyLogoProps {
  name: string;
  logoUrl?: string;
  websiteUrl?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  name,
  logoUrl,
  websiteUrl,
  className = "",
  size = 'md'
}) => {
  const [hasError, setHasError] = useState(false);

  // Logo.dev support if publishable key is present
  const logoDevKey = import.meta.env.VITE_LOGO_DEV_PUBLISHABLE_KEY;
  let computedUrl = logoUrl;

  if (logoDevKey && websiteUrl && (!logoUrl || hasError)) {
    try {
      const domain = new URL(websiteUrl).hostname.replace(/^www\./, '');
      computedUrl = `https://img.logo.dev/${domain}?token=${logoDevKey}&size=128`;
    } catch {
      // ignore url parse error
    }
  }

  const sizeClasses = {
    sm: "h-8 w-8 text-xs",
    md: "h-11 w-11 text-sm font-semibold",
    lg: "h-14 w-14 text-base font-bold",
    xl: "h-16 w-16 text-xl font-bold"
  }[size];

  const initial = name ? name.charAt(0).toUpperCase() : "C";

  if (!computedUrl || hasError) {
    // Elegant fallback initial circle
    return (
      <div 
        className={`${sizeClasses} rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0 select-none shadow-xs ${className}`}
        aria-label={`${name} Logo`}
      >
        <span>{initial}</span>
      </div>
    );
  }

  return (
    <div className={`${sizeClasses} rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1.5 shrink-0 overflow-hidden shadow-xs ${className}`}>
      <img
        src={computedUrl}
        alt={`${name} Logo`}
        className="w-full h-full object-contain"
        onError={() => setHasError(true)}
        loading="lazy"
      />
    </div>
  );
};
