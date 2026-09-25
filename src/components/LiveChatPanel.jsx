import React, { useState } from 'react';
import { useMultiplayer } from '../context/MultiplayerContext';
import { BOATS } from '../data/boats';

export function LiveChatPanel() {
  const { messages, sendMessage, currentUser } = useMultiplayer();
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText('');
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="glass-card rounded-2xl flex flex-col h-[500px] overflow-hidden border border-cyan-500/20 shadow-2xl">
      <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <h3 className="font-display font-semibold text-white tracking-wide">Live Showroom Chat</h3>
        </div>
        <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">Multiplayer</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 custom-scroll">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-2.5 group">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-900 text-xs mt-0.5 ring-1 ring-white/10"
              style={{ backgroundColor: m.color || '#22d3ee' }}
            >
              {m.avatar || m.userName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-200 truncate">
                  {m.userName}
                </span>
                {m.isDealer && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold tracking-wide">
                    DEALER
                  </span>
                )}
                <span className="text-[10px] text-slate-500 ml-auto font-mono">{m.time}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mt-0.5 break-words">
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-white/10 bg-deep-800/40">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-slate-900 text-xs"
            style={{ backgroundColor: currentUser.color }}
          >
            {currentUser.avatar}
          </div>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Message the live showroom…"
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-500/60 transition"
          />
          <button
            onClick={handleSend}
            disabled={!text.trim()}
            className="px-3.5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0-8.5-8.5M12 12l3-3m-3 3l-3 3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}