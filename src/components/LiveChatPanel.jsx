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
    <div className="fixed bottom-6 left-6 z-50 w-96 max-w-[90vw] rounded-2xl bg-white border border-slate-200 shadow-2xl flex flex-col h-[500px] overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
          <h3 className="font-display font-semibold text-slate-900 tracking-wide">Live Showroom Chat</h3>
        </div>
        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Multiplayer</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
        {messages.map((m) => (
          <div key={m.id} className="flex gap-2.5 group">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs mt-0.5 ring-1 ring-slate-200"
              style={{ backgroundColor: m.color || '#0ea5e9' }}
            >
              {m.avatar || m.userName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-900 truncate">
                  {m.userName}
                </span>
                {m.isDealer && (
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 border border-amber-200 font-bold tracking-wide">
                    DEALER
                  </span>
                )}
                <span className="text-[10px] text-slate-500 ml-auto font-mono">{m.time}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mt-0.5 break-words">
                {m.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-200 bg-slate-50">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white text-xs"
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
            className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2 text-sm text-slate-900 placeholder-slate-500 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-400/30 transition"
          />
          <button
            onClick={handleSend}
            disabled={!text.trim()}
            className="px-3.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
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