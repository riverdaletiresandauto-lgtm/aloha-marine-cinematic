import React, { useState, useEffect } from 'react';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS } from '../data/boats';

export function CompareBar() {
  const { compareList, toggleCompare } = useMultiplayer();
  const [expanded, setExpanded] = useState(true);

  if (compareList.length === 0) return null;

  const boats = compareList.map(id => BOATS.find(b => b.id === id)).filter(Boolean);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-sky-300 bg-white/98 backdrop-blur-2xl shadow-2xl animate-fade-up">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-sky-600 font-semibold whitespace-nowrap">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Compare Vessels ({boats.length}/4)
        </div>

        <div className="flex-1 flex items-center gap-3 overflow-x-auto py-1">
          {boats.map((b) => (
            <div key={b.id} className="flex items-center gap-2 bg-slate-100 rounded-lg p-1.5 border border-slate-200 min-w-[200px]">
              <img
                src={b.image}
                alt={b.title}
                className="w-10 h-10 rounded object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-slate-900 truncate">{b.title}</div>
                <div className="text-[10px] text-sky-600/80 font-mono">{b.priceLabel} · {b.length}</div>
              </div>
              <button
                onClick={() => toggleCompare(b.id)}
                className="text-slate-400 hover:text-rose-500 text-xs w-5 h-5 flex items-center justify-center rounded hover:bg-slate-200"
                title="Remove from compare"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-slate-500 hover:text-slate-700 transition whitespace-nowrap"
        >
          {expanded ? 'Hide ▲' : 'Show ▼'}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-slate-200 px-4 py-4 max-w-7xl mx-auto w-full animate-fade-up">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="text-slate-500 border-b border-slate-200">
                  <th className="text-left py-2 px-3 font-medium w-24">Spec</th>
                  {boats.map((b) => (
                    <th key={b.id} className="text-left py-2 px-3 min-w-[160px]">
                      <div className="flex items-center gap-2">
                        <img src={b.image} alt="" className="w-8 h-8 rounded object-cover" />
                        <span className="font-semibold text-slate-900 text-[13px] truncate">{b.brand}</span>
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
                  <tr key={key} className="border-b border-slate-100">
                    <td className="py-2 px-3 text-slate-500 font-medium">{label}</td>
                    {boats.map((b) => (
                      <td key={b.id} className="py-2 px-3 text-slate-900 font-mono">
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