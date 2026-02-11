import React from 'react';
import { Gift, Lock, CheckCircle, Clock } from 'lucide-react';
import { Achievement } from '../types';

const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'The Loyal Customer',
    description: 'Make 25 transactions within 2 months',
    progress: 18,
    maxProgress: 25,
    reward: '5000 TOTO Points',
    completed: false,
    icon: 'transaction'
  },
  {
    id: '2',
    title: 'High Roller',
    description: 'Transfer more than $500 in a single transaction',
    progress: 1,
    maxProgress: 1,
    reward: 'Gold Badge',
    completed: true,
    icon: 'transfer'
  },
  {
    id: '3',
    title: 'Night Owl',
    description: 'Make a transfer between 2 AM and 4 AM',
    progress: 0,
    maxProgress: 1,
    reward: '50 Credits',
    completed: false,
    icon: 'time'
  }
];

export const Thanksgiving: React.FC = () => {
  return (
    <div className="space-y-8 pb-24 animate-fade-in">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gold-500">Thanksgiving Rewards</h2>
        <p className="text-brown-100/70 text-sm max-w-xs mx-auto">Complete tasks to earn exclusive rewards and random bonuses.</p>
      </div>

      <div className="bg-gradient-to-br from-gold-500 to-yellow-600 rounded-2xl p-6 shadow-xl text-brown-950 relative overflow-hidden">
        <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1">Weekly Mystery Box</h3>
            <p className="text-sm opacity-90 mb-4">You have 1 unopened gift!</p>
            <button className="bg-brown-950 text-gold-500 px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                Open Now
            </button>
        </div>
        <Gift className="absolute -bottom-4 -right-4 w-32 h-32 text-yellow-700/20 rotate-12" />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white pl-1">Active Quests</h3>
        
        {ACHIEVEMENTS.map((quest) => (
            <div key={quest.id} className={`p-4 rounded-xl border ${quest.completed ? 'bg-brown-900/40 border-gold-500/30' : 'bg-brown-900 border-brown-700'} relative overflow-hidden transition-all`}>
                <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-3">
                        <div className={`p-2 rounded-lg ${quest.completed ? 'bg-green-900/30 text-green-500' : 'bg-brown-800 text-gold-500'}`}>
                            {quest.completed ? <CheckCircle size={20} /> : <Clock size={20} />}
                        </div>
                        <div>
                            <h4 className={`font-bold text-sm ${quest.completed ? 'text-gold-500' : 'text-brown-100'}`}>{quest.title}</h4>
                            <p className="text-xs text-brown-100/50">{quest.description}</p>
                        </div>
                    </div>
                    {quest.completed ? (
                        <span className="text-xs font-bold bg-gold-500 text-brown-950 px-2 py-1 rounded">CLAIMED</span>
                    ) : (
                        <Lock size={16} className="text-brown-700" />
                    )}
                </div>

                {!quest.completed && (
                    <div className="mt-3">
                        <div className="flex justify-between text-xs text-brown-100/50 mb-1">
                            <span>Progress</span>
                            <span>{quest.progress} / {quest.maxProgress}</span>
                        </div>
                        <div className="h-2 bg-brown-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gold-500 transition-all duration-500" 
                                style={{ width: `${(quest.progress / quest.maxProgress) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )}
                
                <div className="mt-3 pt-3 border-t border-brown-800 flex justify-between items-center">
                    <span className="text-xs text-brown-100/40">Reward</span>
                    <span className="text-xs font-bold text-gold-400">{quest.reward}</span>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};