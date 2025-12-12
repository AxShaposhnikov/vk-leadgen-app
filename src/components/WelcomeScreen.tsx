import { Sparkles, Users, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onNavigateToAbout: () => void;
}

export function WelcomeScreen({ onNavigateToAbout }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center max-w-md">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform">
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-4 border-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AI LeadGen VK
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Умный помощник для поиска целевой аудитории в социальных сетях
        </p>

        {/* Features preview */}
        <div className="flex justify-center gap-4 mb-10">
          <div className="flex flex-col items-center gap-2 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs text-gray-600">VK & TG</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs text-gray-600">AI поиск</span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onNavigateToAbout}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
        >
          <span>О проекте</span>
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
}
