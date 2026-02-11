import React, { useEffect, useState } from 'react';
import { MapPin, ArrowRightLeft, Smartphone, Building2, Bitcoin, RefreshCw, TrendingUp } from 'lucide-react';
import { getFinancialInsight } from '../services/geminiService';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MOCK_DATA = [
  { name: 'Mon', rate: 2500 },
  { name: 'Tue', rate: 2550 },
  { name: 'Wed', rate: 2540 },
  { name: 'Thu', rate: 2600 },
  { name: 'Fri', rate: 2580 },
  { name: 'Sat', rate: 2610 },
  { name: 'Sun', rate: 2650 },
];

export const Home: React.FC = () => {
  const [tip, setTip] = useState<string>("Loading daily wisdom...");
  const [location, setLocation] = useState<string | null>(null);
  const [loadingLoc, setLoadingLoc] = useState(false);

  useEffect(() => {
    getFinancialInsight().then(setTip);
  }, []);

  const handleGetLocation = () => {
    setLoadingLoc(true);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // In a real app, we'd reverse geocode this. For now, show coords.
          setLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
          setLoadingLoc(false);
        },
        (error) => {
          console.error(error);
          setLocation("Location access denied");
          setLoadingLoc(false);
        }
      );
    } else {
      setLocation("Geolocation not supported");
      setLoadingLoc(false);
    }
  };

  return (
    <div className="space-y-6 pb-24 animate-fade-in">
      {/* Header */}
      <header className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gold-500 tracking-tight">TOTOPAY</h1>
          <p className="text-sm text-brown-100/70">Secure. Fast. Global.</p>
        </div>
        <div className="bg-brown-800 p-2 rounded-xl border border-brown-700">
           <Bitcoin className="text-gold-500 w-6 h-6" />
        </div>
      </header>

      {/* AI Insight */}
      <div className="bg-gradient-to-r from-brown-900 to-brown-800 p-4 rounded-2xl border border-brown-700 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/10 rounded-full blur-xl -mr-8 -mt-8"></div>
        <h3 className="text-gold-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
          <TrendingUp size={12} /> Gemini Insight
        </h3>
        <p className="text-sm text-brown-100 italic">"{tip}"</p>
      </div>

      {/* Location Feature */}
      <div className="bg-brown-900/50 p-4 rounded-xl border border-brown-700/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <div className="bg-brown-800 p-2 rounded-full">
                <MapPin className="text-amber-500 w-5 h-5" />
            </div>
            <div>
                <p className="text-xs text-brown-100/60 font-semibold">CURRENT LOCATION</p>
                <p className="text-sm font-medium text-white">{location || "Unknown Location"}</p>
            </div>
        </div>
        <button 
            onClick={handleGetLocation}
            disabled={loadingLoc}
            className="text-xs bg-brown-800 hover:bg-brown-700 text-gold-500 px-3 py-1.5 rounded-lg transition-colors border border-brown-700">
            {loadingLoc ? "Locating..." : "Update"}
        </button>
      </div>

      {/* Currency Rates Chart */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-white">USD/TZS Trends</h2>
            <span className="text-xs text-green-400 font-mono">+1.2% Today</span>
        </div>
        <div className="h-40 w-full bg-brown-900 rounded-2xl p-2 border border-brown-800 shadow-inner">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_DATA}>
                  <defs>
                    <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d4af37" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#d4af37" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#261a15', borderColor: '#553e32', borderRadius: '8px', fontSize: '12px' }}
                    itemStyle={{ color: '#d4af37' }}
                  />
                  <Area type="monotone" dataKey="rate" stroke="#d4af37" fillOpacity={1} fill="url(#colorRate)" strokeWidth={2} />
                </AreaChart>
             </ResponsiveContainer>
        </div>
      </div>

      {/* Payments Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <ArrowRightLeft className="w-5 h-5 text-gold-500" /> Payments
        </h2>

        {/* Banks */}
        <div className="space-y-2">
            <p className="text-xs text-brown-100/50 uppercase font-bold tracking-widest pl-1">Bank Transfer</p>
            <div className="grid grid-cols-3 gap-3">
                {['CRDB', 'NMB', 'NBC'].map(bank => (
                    <button key={bank} className="bg-brown-900 hover:bg-brown-800 border border-brown-700 rounded-xl p-4 flex flex-col items-center gap-2 transition-all hover:border-gold-500/50 group">
                        <Building2 className="w-6 h-6 text-brown-100 group-hover:text-gold-500 transition-colors" />
                        <span className="text-xs font-bold text-brown-100">{bank}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* Mobile */}
        <div className="space-y-2">
            <p className="text-xs text-brown-100/50 uppercase font-bold tracking-widest pl-1">Mobile Money</p>
            <div className="grid grid-cols-2 gap-3">
                {[
                    { name: 'M-PESA', color: 'text-red-500' }, 
                    { name: 'AIRTEL', color: 'text-red-400' }, 
                    { name: 'TIGOPESA', color: 'text-blue-400' }, 
                    { name: 'HALOPESA', color: 'text-orange-400' }
                ].map(mobile => (
                    <button key={mobile.name} className="bg-brown-900 hover:bg-brown-800 border border-brown-700 rounded-xl p-3 flex items-center justify-between px-4 transition-all hover:border-gold-500/50">
                        <span className="text-xs font-bold text-brown-100">{mobile.name}</span>
                        <Smartphone className={`w-5 h-5 ${mobile.color}`} />
                    </button>
                ))}
            </div>
        </div>

        {/* Crypto */}
        <div className="space-y-2">
            <p className="text-xs text-brown-100/50 uppercase font-bold tracking-widest pl-1">Crypto Assets</p>
            <a href="https://www.binance.com" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-gradient-to-r from-yellow-900/40 to-brown-900 border border-yellow-700/30 rounded-xl p-4 flex items-center justify-between hover:bg-brown-800 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#F0B90B]/10 p-2 rounded-full">
                            <Bitcoin className="w-6 h-6 text-[#F0B90B]" />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-white group-hover:text-[#F0B90B] transition-colors">Connect Binance Wallet</p>
                            <p className="text-xs text-brown-100/50">Direct integration active</p>
                        </div>
                    </div>
                    <RefreshCw className="w-4 h-4 text-brown-100/40 group-hover:text-[#F0B90B]" />
                </div>
            </a>
        </div>
      </div>
    </div>
  );
};