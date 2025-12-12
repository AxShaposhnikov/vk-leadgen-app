import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AboutScreen } from './components/AboutScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'about'>('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onNavigateToAbout={() => setCurrentScreen('about')} />
      )}
      {currentScreen === 'about' && (
        <AboutScreen onBack={() => setCurrentScreen('welcome')} />
      )}
    </div>
  );
}
