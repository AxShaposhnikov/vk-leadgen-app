import { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { motion, AnimatePresence } from 'motion/react';

interface SearchFormScreenProps {
  onBack: () => void;
}

export function SearchFormScreen({ onBack }: SearchFormScreenProps) {
  const [keywords, setKeywords] = useState('');
  const [gender, setGender] = useState('');
  const [likes, setLikes] = useState(false);
  const [comments, setComments] = useState(false);
  const [reposts, setReposts] = useState(false);
  const [commentLength, setCommentLength] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleStartSearch = () => {
    // Here you would typically validate and submit the data
    setShowSuccessModal(true);
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    onBack();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Назад</span>
        </button>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Параметры поиска
        </h2>

        <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          {/* Keywords */}
          <div className="space-y-2">
            <Label htmlFor="keywords">Ключевые слова (через запятую)</Label>
            <Input
              id="keywords"
              placeholder="бизнес, маркетинг, продажи"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label htmlFor="gender">Пол</Label>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Выберите пол" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Мужчины</SelectItem>
                <SelectItem value="female">Женщины</SelectItem>
                <SelectItem value="any">Любой</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Criteria */}
          <div className="space-y-4">
            <Label className="text-base">Критерий поиска</Label>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="likes" className="font-normal cursor-pointer">Лайки</Label>
              <Switch id="likes" checked={likes} onCheckedChange={setLikes} />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="comments" className="font-normal cursor-pointer">Комментарии</Label>
              <Switch id="comments" checked={comments} onCheckedChange={setComments} />
            </div>

            <AnimatePresence>
              {comments && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden pl-4"
                >
                  <div className="pt-2 pb-1 space-y-2">
                    <Label htmlFor="commentLength" className="text-sm text-gray-600">
                      Минимальная длина комментария (символов)
                    </Label>
                    <Input
                      id="commentLength"
                      type="number"
                      placeholder="10"
                      value={commentLength}
                      onChange={(e) => setCommentLength(e.target.value)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between">
              <Label htmlFor="reposts" className="font-normal cursor-pointer">Репосты</Label>
              <Switch id="reposts" checked={reposts} onCheckedChange={setReposts} />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2 pt-2 border-t border-gray-100">
            <Label htmlFor="email">Ваш E-mail адрес</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Start Button */}
        <div className="mt-8">
          <Button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25"
            onClick={handleStartSearch}
          >
            Начать поиск
          </Button>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <DialogTitle className="text-center">Настройки сохранены</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Функционал находится в разработке. Мы отправим данные на указанный вами e-mail: <span className="font-medium text-gray-900">{email || '...'}</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center mt-4">
            <Button 
              onClick={handleSuccessClose}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white min-w-[120px]"
            >
              Согласен
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
