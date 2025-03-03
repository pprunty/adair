import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-4 rounded">
      {children}
    </div>
  );
}
