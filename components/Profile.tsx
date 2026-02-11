import React, { useState, useRef } from 'react';
import { Camera, User, Calendar, Mail, Phone, Flag, Save } from 'lucide-react';
import { UserProfile } from '../types';

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Toto User',
    totoId: 'TOTO-8821-X',
    birthday: '',
    email: '',
    indianPhone: '+91 ',
    nationality: 'Tanzanian',
    avatarUrl: undefined
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProfile(prev => ({ ...prev, avatarUrl: url }));
    }
  };

  return (
    <div className="space-y-8 pb-24 animate-fade-in">
      <h2 className="text-2xl font-bold text-gold-500 mb-6">My Profile</h2>

      {/* Avatar Section */}
      <div className="flex flex-col items-center">
        <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
          <div className="w-32 h-32 rounded-full border-4 border-brown-800 overflow-hidden bg-brown-900 flex items-center justify-center shadow-xl">
            {profile.avatarUrl ? (
              <img src={profile.avatarUrl} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <User className="w-12 h-12 text-brown-100/30" />
            )}
          </div>
          <div className="absolute bottom-0 right-0 bg-gold-500 p-2 rounded-full shadow-lg border-2 border-brown-950">
            <Camera className="w-5 h-5 text-brown-950" />
          </div>
        </div>
        <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleImageUpload} 
            className="hidden" 
            accept="image/*"
        />
        <p className="mt-4 text-white font-bold text-lg">{profile.name}</p>
        <p className="text-gold-500/80 font-mono text-sm">{profile.totoId}</p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        
        {/* Name */}
        <div className="space-y-1">
            <label className="text-xs text-brown-100/60 uppercase font-semibold pl-1">Full Name</label>
            <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-brown-700" />
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full bg-brown-900 border border-brown-700 rounded-xl py-3 pl-10 pr-4 text-brown-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="Enter full name"
                />
            </div>
        </div>

        {/* Birthday */}
        <div className="space-y-1">
            <label className="text-xs text-brown-100/60 uppercase font-semibold pl-1">Birthday</label>
            <div className="relative">
                <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-brown-700" />
                <input
                    type="date"
                    name="birthday"
                    value={profile.birthday}
                    onChange={handleChange}
                    className="w-full bg-brown-900 border border-brown-700 rounded-xl py-3 pl-10 pr-4 text-brown-100 focus:outline-none focus:border-gold-500 transition-colors [color-scheme:dark]"
                />
            </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
            <label className="text-xs text-brown-100/60 uppercase font-semibold pl-1">Email Address</label>
            <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-brown-700" />
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full bg-brown-900 border border-brown-700 rounded-xl py-3 pl-10 pr-4 text-brown-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="you@example.com"
                />
            </div>
        </div>

        {/* Indian Phone */}
        <div className="space-y-1">
            <label className="text-xs text-brown-100/60 uppercase font-semibold pl-1">Indian Phone Number</label>
            <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-5 h-5 text-brown-700" />
                <input
                    type="tel"
                    name="indianPhone"
                    value={profile.indianPhone}
                    onChange={handleChange}
                    className="w-full bg-brown-900 border border-brown-700 rounded-xl py-3 pl-10 pr-4 text-brown-100 focus:outline-none focus:border-gold-500 transition-colors"
                    placeholder="+91 99999 99999"
                />
            </div>
        </div>

        {/* Nationality */}
        <div className="space-y-1">
            <label className="text-xs text-brown-100/60 uppercase font-semibold pl-1">Nationality</label>
            <div className="relative">
                <Flag className="absolute left-3 top-3.5 w-5 h-5 text-brown-700" />
                <select
                    name="nationality"
                    value={profile.nationality}
                    onChange={handleChange}
                    className="w-full bg-brown-900 border border-brown-700 rounded-xl py-3 pl-10 pr-4 text-brown-100 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                >
                    <option value="Tanzanian">Tanzanian</option>
                    <option value="Indian">Indian</option>
                    <option value="Kenyan">Kenyan</option>
                    <option value="Ugandan">Ugandan</option>
                    <option value="Other">Other</option>
                </select>
            </div>
        </div>

      </div>

      <button className="w-full bg-gold-500 hover:bg-gold-400 text-brown-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg">
        <Save className="w-5 h-5" />
        Save Profile
      </button>
    </div>
  );
};