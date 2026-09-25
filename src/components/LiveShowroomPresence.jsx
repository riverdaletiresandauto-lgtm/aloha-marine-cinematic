import React, { useState } from 'react';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS } from '../data/boats';

export function LiveShowroomPresence() {
  const { onlineUsers, currentUser, updateUserName } = useMultiplayer();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(currentUser.name);

  const getBoatTitle = (id) => {
    const b = BOATS.find(x => x.id === id);
    return b ? b.title : 'Browsing Showroom';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-deep-800/95 border border-cyan-500/40 text-white shadow-2xl backdrop-blur-xl hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 group"
      >
        <div className="relative flex items-center">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
        </div>
        
        {/* Avatars Stack */}
        <div className="flex -space-x-2 overflow-hidden">
          {onlineUsers.slice(0, 4).map((u, i) => (
            <div
              key={u.id || i}
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-slate-900 ring-2 ring-deep-900"
              style={{ backgroundColor: u.color || '#22d3ee' }}
              title={u.name}
            >
              {u.avatar || u.name[0]}
            </div>
          ))}
        </div>

        <div className="text-left text-xs pr-1">
          <span className="font-semibold text-cyan-300 block">{onlineUsers.length} Online Shoppers</span>
          <span className="text-[10px] text-slate-400 hidden sm:block">Live Showroom Sync</span>
        </div>
      </button>

      {/* Expanded Live Room Drawer */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 sm:w-96 rounded-2xl bg-deep-900/95 border border-cyan-500/30 shadow-2xl backdrop-blur-2xl p-5 text-slate-200 animate-fade-up">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="font-display font-semibold text-white tracking-wide">Multiplayer Showroom</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10"
            >
              Close ✕
            </button>
          </div>

          {/* Current User Bar */}
          <div className="bg-deep-700/60 p-3 rounded-xl border border-cyan-500/20 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-900 text-sm"
                style={{ backgroundColor: currentUser.color }}
              >
                {currentUser.avatar}
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">You are browsing as</div>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    onBlur={() => {
                      updateUserName(tempName);
                      setIsEditing(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        updateUserName(tempName);
                        setIsEditing(false);
                      }
                    }}
                    className="bg-black/50 border border-cyan-500 text-cyan-300 text-xs px-2 py-0.5 rounded outline-none w-36"
                    autoFocus
                  />
                ) : (
                  <span className="text-sm font-semibold text-cyan-300 flex items-center gap-1.5">
                    {currentUser.name}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-[10px] text-slate-400 hover:text-white underline ml-1"
                    >
                      (Edit)
                    </button>
                  </span>
                )}
              </div>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono">
              Live
            </span>
          </div>

          {/* Shoppers Activity List */}
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-1">
              Active Shoppers in Showroom
            </div>
            {onlineUsers.map((u) => (
              <div
                key={u.id}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition border border-white/5 text-xs"
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-900 text-xs mt-0.5"
                  style={{ backgroundColor: u.color || '#22d3ee' }}
                >
                  {u.avatar || u.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-200 truncate">{u.name}</span>
                    {u.id === currentUser.id && (
                      <span className="text-[10px] text-cyan-400 font-mono">(You)</span>
                    )}
                  </div>
                  <div className="text-[11px] text-cyan-300/90 truncate flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {getBoatTitle(u.viewingBoatId)}
                  </div>
                  {u.status && (
                    <div className="text-[10px] text-slate-400 italic mt-0.5">{u.status}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Cross-tab & live multiplayer synchronization active
          </div>
        </div>
      )}
    </div>
  );
}
