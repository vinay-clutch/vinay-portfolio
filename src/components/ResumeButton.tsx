import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React from "react";
import { FileText } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ResumeButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "icon" | "full";
  showSubtitle?: boolean;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  className,
  variant = "full",
  showSubtitle = false,
  ...props
}) => {
  if (variant === "icon") {
    return (
      <a
        href="/Vinay_BS_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
        className={cn(
          "relative group p-2 flex items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300",
          className
        )}
        {...props}
      >
        <FileText className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Resume
        </span>
      </a>
    );
  }

  return (
    <div className="flex flex-col items-start gap-1">
      <a
        href="/Vinay_BS_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium shadow-lg shadow-zinc-500/20 hover:shadow-xl hover:shadow-zinc-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        <FileText className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3" />
        <span>Download My Resume</span>
      </a>
      {showSubtitle && (
        <span className="text-[10px] text-zinc-400 font-medium ml-4">
          PDF • 332KB
        </span>
      )}
    </div>
  );
};
