import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-pink-400 text-2xl bg-amber-300 p-4">{children}</h2>
  );
}
