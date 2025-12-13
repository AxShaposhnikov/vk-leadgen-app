import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { SearchFormScreen } from './components/SearchFormScreen';
import { SplashScreen } from './components/SplashScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'splash' | 'welcome' | 'about' | 'search'>('splash');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {currentScreen === 'splash' && (
        <SplashScreen onFinish={() => setCurrentScreen('welcome')} />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen 
          onNavigateToAbout={() => setCurrentScreen('about')}
          onNavigateToSearch={() => setCurrentScreen('search')}
        />
      )}
      {currentScreen === 'about' && (
        <AboutScreen onBack={() => setCurrentScreen('welcome')} />
      )}
      {currentScreen === 'search' && (
        <SearchFormScreen onBack={() => setCurrentScreen('welcome')} />
      )}
    </div>
  );
}
