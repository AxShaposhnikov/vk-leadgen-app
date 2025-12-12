import { ArrowLeft, Shield, Target, TrendingUp, CheckCircle2 } from 'lucide-react';

interface AboutScreenProps {
  onBack: () => void;
}

export function AboutScreen({ onBack }: AboutScreenProps) {
  return (
    <div className="min-h-screen flex flex-col p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400/20 to-pink-400/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header with back button */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Назад</span>
          </button>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          {/* Title section */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full mb-4 shadow-lg">
              <Target className="w-4 h-4" />
              <span className="text-sm">О проекте</span>
            </div>
            <h2 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
              AI LeadGen VK
            </h2>
          </div>

          {/* Main description card */}
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-100 mb-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Приложение помогает находить целевую аудиторию в открытых сообществах VK и Telegram, фильтровать по интересам и аккуратно предлагать участие в курсе. Работает через официальные API, соблюдает правила платформы, не использует скрытые данные и не рассылает спам.
            </p>

            {/* Feature highlights */}
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-50/50 rounded-2xl border border-blue-100">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/30">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Точный таргетинг</h3>
                  <p className="text-sm text-gray-600">Поиск по интересам в открытых сообществах</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-purple-50/50 rounded-2xl border border-purple-100">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Безопасность</h3>
                  <p className="text-sm text-gray-600">Официальные API и соблюдение правил</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-green-50/50 rounded-2xl border border-green-100">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/30">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-1">Аккуратный подход</h3>
                  <p className="text-sm text-gray-600">Без спама и скрытых данных</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-3 rounded-full border border-gray-200">
              <TrendingUp className="w-4 h-4 text-gray-600" />
              <span className="text-sm text-gray-600">Эффективный лидогенерация</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
