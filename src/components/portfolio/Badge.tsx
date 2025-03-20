import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  status: "available" | "busy" | "offline";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, className }) => {
  const statusConfig = {
    available: {
      color: "text-green-500",
      indicatorColor: "bg-green-500 border-green-800",
      label: "Available",
    },
    busy: {
      color: "text-yellow-500",
      indicatorColor: "bg-yellow-500 border-yellow-800",
      label: "Busy",
    },
    offline: {
      color: "text-gray-500",
      indicatorColor: "bg-gray-500 border-gray-800",
      label: "Offline",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-sm font-semibold whitespace-nowrap leading-none rounded-[32px]",
        config.color,
        className,
      )}
    >
      <div
        className={cn(
          "stroke-[3px] self-stretch flex w-2.5 shrink-0 h-2.5 my-auto rounded-[50%] border-solid border-[3px]",
          config.indicatorColor,
        )}
      />
      <div className="self-stretch my-auto">{config.label}</div>
    </div>
  );
};

export default Badge;
