import React from 'react';

interface TeamFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
  count?: number;
}

export const TeamFilter = ({ currentFilter, onFilterChange, count }: TeamFilterProps) => {
  const filters = ['All', 'Guides', 'Drivers'];

  return (
    <div className="flex flex-col items-end gap-4">
      <div className="flex bg-audit-white border-2 border-slate-200 p-1.5 rounded-2xl shadow-sm">
        {filters.map((filter) => (
          <button 
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-8 py-3 font-black text-[11px] uppercase tracking-widest transition-all rounded-xl ${
              currentFilter === filter ? 'bg-authority-navy text-white shadow-lg' : 'hover:bg-slate-50 text-slate-500'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {count !== undefined && (
        <p className="font-mono text-[11px] text-slate-500 uppercase tracking-widest">
          Showing: {count} Verified Assets
        </p>
      )}
    </div>
  );
};
