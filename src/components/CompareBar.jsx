import React, { useState, useEffect } from 'react';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS } from '../data/boats';

export function CompareBar() {
  const { compareList, toggleCompare } = useMultiplayer();
  const [expanded, setExpanded] = useState(true);

  if (compareList.length === 0) return null;

  const boats = compareList.map(id => BOATS.find(b => b.id === id)).filter(Boolean);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-cyan-500/30 bg-deep-900/98 backdrop-blur-2xl shadow-2xl animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-cyan-300 font-semibold whitespace-nowrap">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Compare Vessels ({boats.length}/4)
        </div>

        <div className="flex-1 flex items-center gap-3 overflow-x-auto py-1">
          {boats.map((b) => (
            <div key={b.id} className="flex items-center gap-2 bg-white/5 rounded-lg p-1.5 border border-white/10 min-w-[200px]">
              <img
                src={b.image}
                alt={b.title}
                className="w-10 h-10 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-white truncate">{b.title}</div>
                <div className="text-[10px] text-cyan-300/80 font-mono">{b.priceLabel} · {b.length}</div>
              </div>
              <button
                onClick={() => toggleCompare(b.id)}
                className="text-slate-400 hover:text-rose-400 text-xs w-5 h-5 flex items-center justify-center rounded hover:bg-white/10"
                title="Remove from compare"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-slate-400 hover:text-white transition whitespace-nowrap"
        >
          {expanded ? 'Hide ▲' : 'Show ▼'}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-white/10 px-4 py-4 max-w-7xl mx-auto w-full animate-fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="text-slate-400 border-b border-white/10">
                  <th className="text-left py-2 px-3 font-medium w-24">Spec</th>
                  {boats.map((b) => (
                    <th key={b.id} className="text-left py-2 px-3 min-w-[160px]">
                      <div className="flex items-center gap-2">
                        <img src={b.image} alt="" className="w-8 h-8 rounded object-cover" />
                        <span className="font-semibold text-white text-[13px] truncate">{b.brand}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Year', 'year'],
                  ['Condition', 'condition'],
                  ['Price', 'priceLabel'],
                  ['Length', 'length'],
                  ['Beam', 'beam'],
                  ['Horsepower', 'hp'],
                  ['Engine', 'engine'],
                  ['Fuel', 'fuel'],
                  ['Draft', 'draft'],
                  ['Weight', 'weight'],
                  ['Hours', 'hours'],
                  ['Category', 'category']
                ].map(([label, key]) => (
                  <tr key={key} className="border-b border-white/5">
                    <td className="py-2 px-3 text-slate-400 font-medium">{label}</td>
                    {boats.map((b) => (
                      <td key={b.id} className="py-2 px-3 text-slate-200 font-mono">
                        {b[key] !== undefined ? b[key] : '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}