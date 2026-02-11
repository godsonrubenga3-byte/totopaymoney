import React from 'react';
import { Home, User, Gift, Wallet } from 'lucide-react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'thanksgiving', icon: Gift, label: 'Thanksgiving' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-brown-900 border-t border-brown-800 pb-safe pt-2 px-6 shadow-2xl z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id as View)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-300 ${
                isActive ? 'text-gold-500 transform -translate-y-1' : 'text-brown-100/60 hover:text-brown-100'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium tracking-wide uppercase">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};