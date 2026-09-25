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
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/90 border border-sky-300 text-slate-900 shadow-xl backdrop-blur-xl hover:border-sky-400 hover:shadow-sky-500/30 transition-all duration-300 group"
      >
        <div className="relative flex items-center">
          <span className="flex h-3 w-3 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-600"></span>
          </span>
        </div>
        
        {/* Avatars Stack */}
        <div className="flex -space-x-2 overflow-hidden">
          {onlineUsers.slice(0, 4).map((u, i) => (
            <div
              key={u.id || i}
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2 ring-white"
              style={{ backgroundColor: u.color || '#0ea5e9' }}
              title={u.name}
            >
              {u.avatar || u.name[0]}
            </div>
          ))}
        </div>

        <div className="text-left text-xs pr-1">
          <span className="font-semibold text-sky-600 block">{onlineUsers.length} Online Shoppers</span>
          <span className="text-[10px] text-slate-500 hidden sm:block">Live Showroom Sync</span>
        </div>
      </button>

      {/* Expanded Live Room Drawer */}
      {isOpen && (
        <div className="absolute bottom-14 right-0 w-80 sm:w-96 rounded-2xl bg-white/95 border border-sky-300 shadow-2xl backdrop-blur-2xl p-5 text-slate-900 animate-fade-up">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="font-display font-semibold text-slate-900 tracking-wide">Multiplayer Showroom</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700 text-xs px-2 py-1 rounded bg-slate-100 hover:bg-slate-200"
            >
              Close ✕
            </button>
          </div>

          {/* Current User Bar */}
          <div className="bg-slate-100 p-3 rounded-xl border border-sky-200 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: currentUser.color }}
              >
                {currentUser.avatar}
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">You are browsing as</div>
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
                    className="bg-white border border-sky-400 text-slate-900 text-xs px-2 py-0.5 rounded outline-none w-36 focus:ring-1 focus:ring-sky-400"
                    autoFocus
                  />
                ) : (
                  <span className="text-sm font-semibold text-sky-600 flex items-center gap-1.5">
                    {currentUser.name}
                    <button
                      onClick={() => setIsEditing(true)}
                      className="text-[10px] text-slate-400 hover:text-slate-600 underline ml-1"
                    >
                      (Edit)
                    </button>
                  </span>
                )}
              </div>
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-sky-100 text-sky-600 border border-sky-200 font-mono">
              Live
            </span>
          </div>

          {/* Shoppers Activity List */}
          <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 px-1">
              Active Shoppers in Showroom
            </div>
            {onlineUsers.map((u) => (
              <div
                key={u.id}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition border border-slate-200 text-xs"
              >
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs mt-0.5"
                  style={{ backgroundColor: u.color || '#0ea5e9' }}
                >
                  {u.avatar || u.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-900 truncate">{u.name}</span>
                    {u.id === currentUser.id && (
                      <span className="text-[10px] text-sky-600 font-mono">(You)</span>
                    )}
                  </div>
                  <div className="text-[11px] text-sky-600/90 truncate flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {getBoatTitle(u.viewingBoatId)}
                  </div>
                  {u.status && (
                    <div className="text-[10px] text-slate-500 italic mt-0.5">{u.status}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] text-slate-500 text-center flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
            Cross-tab & live multiplayer synchronization active
          </div>
        </div>
      )}
    </div>
  );
}