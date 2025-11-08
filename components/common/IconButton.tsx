"use client";

import React from "react";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ElementType;
  badgeCount?: number;
  label?: string;
}

export default function IconButton({
  icon: Icon,
  badgeCount = 0,
  label,
  className = "",
  ...props
}: IconButtonProps) {
  return (
    <button className="relative p-2 hover:bg-white rounded-full transition-all duration-200 group">
      <Icon className="h-5 w-5 text-primary-black transition-colors" />
      {badgeCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
          {badgeCount}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
