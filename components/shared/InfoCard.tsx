import { ReactNode } from "react";

type InfoCardProps = {
  children: ReactNode;
  className?: string;
};

export default function InfoCard({ children, className = "" }: InfoCardProps) {
  return (
    <div
      className={`rounded-md border border-[#d7e6d7] bg-white shadow-[0_18px_40px_rgba(20,51,22,0.08)] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
