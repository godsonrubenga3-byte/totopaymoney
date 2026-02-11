import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Profile } from './components/Profile';
import { Thanksgiving } from './components/Thanksgiving';
import { View } from './types';

export default function App() {
  const [currentView, setView] = useState<View>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'profile':
        return <Profile />;
      case 'thanksgiving':
        return <Thanksgiving />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-brown-950 text-brown-100 font-sans selection:bg-gold-500 selection:text-brown-950">
      <div className="max-w-md mx-auto min-h-screen relative bg-brown-950 shadow-2xl overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="fixed top-0 left-0 w-full h-64 bg-gradient-to-b from-brown-900 to-transparent opacity-20 pointer-events-none"></div>
        <div className="fixed top-[-10%] right-[-20%] w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <main className="relative z-10 p-6">
            {renderView()}
        </main>
        
        <Navigation currentView={currentView} setView={setView} />
      </div>
    </div>
  );
}