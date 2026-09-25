import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const MultiplayerContext = createContext(null);

// Random realistic boat shopper names & avatars
const SHOPPER_NAMES = [
  "Capt. Mike (Naples)", "Sarah W. (Fort Myers)", "Dave K. (Cape Coral)",
  "Elena R. (Sanibel)", "Capt. Brian (Pine Island)", "Tom & Lisa (Marco)",
  "Brad H. (Sarasota)", "Capt. Tyler (Boca Grande)", "Chris P. (Tampa)", "Jordan V. (Bonita)"
];

const COLORS = [
  "#22d3ee", "#38bdf8", "#818cf8", "#c084fc", "#f472b6", "#fb923c", "#4ade80", "#facc15"
];

const STORAGE_KEY = 'aloha_multiplayer_session';
const BROADCAST_CHANNEL = 'aloha_marine_showroom_v1';

export function MultiplayerProvider({ children }) {
  // My Identity
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    const name = SHOPPER_NAMES[Math.floor(Math.random() * SHOPPER_NAMES.length)];
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const id = 'user_' + Math.random().toString(36).substring(2, 9);
    const user = { id, name, color, avatar: name[0], viewingBoatId: 'sea-born-fx24-bay-2026', cursor: { x: 50, y: 50 } };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(user)); } catch (e) {}
    return user;
  });

  // Active online peers
  const [onlineUsers, setOnlineUsers] = useState(() => {
    // Initial simulated active shoppers in the showroom
    return [
      { id: 'sim_1', name: 'Capt. Mike (Naples)', color: '#22d3ee', avatar: 'C', viewingBoatId: 'sea-born-fx24-bay-2026', status: 'Inspecting Specs', lastSeen: Date.now() },
      { id: 'sim_2', name: 'Sarah & Dan (Fort Myers)', color: '#f472b6', avatar: 'S', viewingBoatId: 'sea-born-lx26-2021', status: 'Calculating Financing', lastSeen: Date.now() },
      { id: 'sim_3', name: 'Dave K. (Cape Coral)', color: '#4ade80', avatar: 'D', viewingBoatId: 'robalo-266-cayman-2023', status: 'Booking Sea Trial', lastSeen: Date.now() }
    ];
  });

  // Shared Showroom Live Chat
  const [messages, setMessages] = useState([
    { id: 'm1', userId: 'sim_1', userName: 'Capt. Mike (Naples)', color: '#22d3ee', text: 'Has anyone taken the new 2026 FX24 out in the Sound yet? That 13" draft looks incredible.', time: '10:14 AM' },
    { id: 'm2', userId: 'sim_2', userName: 'Sarah & Dan (Fort Myers)', color: '#f472b6', text: 'We just looked at the LX26 center console — the twin Suzuki 250s are super quiet.', time: '10:18 AM' },
    { id: 'm3', userId: 'dealer_1', userName: 'Aloha Concierge', color: '#fbbf24', isDealer: true, text: 'Welcome to the live showroom! Feel free to compare vessels, join shared inspections, or message us for same-day sea trials.', time: '10:20 AM' }
  ]);

  // Shared Compare Deck
  const [compareList, setCompareList] = useState(['sea-born-fx24-bay-2026', 'sea-born-lx26-2021']);

  // Shared Wishlist
  const [savedBoats, setSavedBoats] = useState(['sea-born-fx24-bay-2026']);

  // BroadcastChannel for cross-tab multi-user syncing
  const bcRef = useRef(null);

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        const bc = new BroadcastChannel(BROADCAST_CHANNEL);
        bcRef.current = bc;

        bc.onmessage = (event) => {
          const { type, payload } = event.data;
          if (type === 'USER_PING') {
            setOnlineUsers(prev => {
              const others = prev.filter(u => u.id !== payload.id);
              return [...others, payload];
            });
          } else if (type === 'NEW_CHAT') {
            setMessages(prev => [...prev, payload]);
          } else if (type === 'COMPARE_SYNC') {
            setCompareList(payload);
          }
        };

        // Ping my presence
        bc.postMessage({ type: 'USER_PING', payload: currentUser });
      }
    } catch (e) {
      console.warn('BroadcastChannel fallback', e);
    }

    // Periodic heartbeat to simulated shoppers
    const interval = setInterval(() => {
      setOnlineUsers(prev => {
        return prev.map(u => {
          if (u.id.startsWith('sim_')) {
            const boatIds = ['sea-born-fx24-bay-2026', 'sea-born-lx26-2021', 'robalo-266-cayman-2023', 'yamaha-255-fsh-sport-e-2023'];
            const statuses = ['Browsing 360 Gallery', 'Inspecting Engine Specs', 'Reviewing Sound System', 'Comparing Live'];
            if (Math.random() > 0.7) {
              return {
                ...u,
                viewingBoatId: boatIds[Math.floor(Math.random() * boatIds.length)],
                status: statuses[Math.floor(Math.random() * statuses.length)],
                lastSeen: Date.now()
              };
            }
          }
          return u;
        });
      });
    }, 12000);

    return () => {
      clearInterval(interval);
      if (bcRef.current) bcRef.current.close();
    };
  }, [currentUser]);

  const updateViewingBoat = useCallback((boatId) => {
    setCurrentUser(prev => {
      const updated = { ...prev, viewingBoatId: boatId };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch (e) {}
      if (bcRef.current) {
        bcRef.current.postMessage({ type: 'USER_PING', payload: updated });
      }
      return updated;
    });
  }, []);

  const updateUserName = useCallback((name) => {
    setCurrentUser(prev => {
      const updated = { ...prev, name, avatar: name[0] || 'U' };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch (e) {}
      if (bcRef.current) {
        bcRef.current.postMessage({ type: 'USER_PING', payload: updated });
      }
      return updated;
    });
  }, []);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: 'm_' + Date.now(),
      userId: currentUser.id,
      userName: currentUser.name,
      color: currentUser.color,
      text: text.trim(),
      time
    };
    setMessages(prev => [...prev, newMsg]);
    if (bcRef.current) {
      bcRef.current.postMessage({ type: 'NEW_CHAT', payload: newMsg });
    }
  }, [currentUser]);

  const toggleCompare = useCallback((boatId) => {
    setCompareList(prev => {
      const exists = prev.includes(boatId);
      let updated;
      if (exists) {
        updated = prev.filter(id => id !== boatId);
      } else {
        if (prev.length >= 4) updated = [...prev.slice(1), boatId];
        else updated = [...prev, boatId];
      }
      if (bcRef.current) {
        bcRef.current.postMessage({ type: 'COMPARE_SYNC', payload: updated });
      }
      return updated;
    });
  }, []);

  const toggleSave = useCallback((boatId) => {
    setSavedBoats(prev => {
      if (prev.includes(boatId)) return prev.filter(id => id !== boatId);
      return [...prev, boatId];
    });
  }, []);

  return (
    <MultiplayerContext.Provider value={{
      currentUser,
      onlineUsers: [currentUser, ...onlineUsers.filter(u => u.id !== currentUser.id)],
      messages,
      compareList,
      savedBoats,
      updateViewingBoat,
      updateUserName,
      sendMessage,
      toggleCompare,
      toggleSave
    }}>
      {children}
    </MultiplayerContext.Provider>
  );
}

export function useMultiplayer() {
  const context = useContext(MultiplayerContext);
  if (!context) throw new Error('useMultiplayer must be used within MultiplayerProvider');
  return context;
}
