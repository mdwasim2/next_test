"use client";

import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  badgeCount?: number;
  label?: string;
}

export default function IconButton({
  icon: IconComp,
  badgeCount = 0,
  label,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`relative inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      {...props}
      aria-label={label}
    >
      <IconComp className="h-6 w-6 text-gray-700" />
      {badgeCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {badgeCount}
        </span>
      )}
    </button>
  );
}
