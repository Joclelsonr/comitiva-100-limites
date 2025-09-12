import { ReactNode } from "react";

type CardProps = {
  title: string;
  icon: ReactNode;
  cliks: number;
  description: string;
};

export function Card({ title, icon, cliks, description }: CardProps) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h1 className="text-sm font-medium">{title}</h1>
        {/* <MousePointer className="text-muted-foreground h-4 w-4" /> */}
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold">{cliks}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  );
}
