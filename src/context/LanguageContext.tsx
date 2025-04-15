
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // Navigation
    'nav.home': '남이섬',
    'nav.yoga': '요가',
    'nav.ayurveda': '아유르베다',
    'nav.artTherapy': '아트 테라피',
    'nav.soundTherapy': '사운드 테라피',
    'nav.drumCircle': '드럼서클',
    'nav.reservation': '예약하기',
    'nav.contact': '문의하기',
    
    // Home page
    'home.title': 'WELLNESS on ISLAND',
    'home.subtitle1': '바쁘게 채워기만 했던 일상,',
    'home.subtitle2': '이젠 \'릴어내는 연습\'이 필요합니다.',
    'home.description': '몸도, 마음도, 삶도 가볍게,\n남이섬에서 맞이하는 웰니스',
    
    // Program info
    'program.date': '기간: 2025. 5. 10.(토) ~ 11.(일)',
    'program.venue': '장소: 남이섬 (강원특별자치도 춘천시 남산면 남이섬길)',
    'program.contact': '문의: 031-580-8015',
    'program.price1day': '1일차 이용권',
    'program.price2day': '2일차 이용권',
    'program.priceAllday': '전일 이용권',
    'program.won': '원',
    
    // Reservation
    'reservation.button': '예약하기',
    'reservation.scheduleTitle': '프로그램 일정표',
    'reservation.location': '오시는 길',
    'reservation.contact': '연락처',
    
    // Common
    'common.learnMore': '더 알아보기',
    'common.instructor': '강사',
    'common.location': '장소',
    'common.schedule': '일정',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.yoga': 'Yoga',
    'nav.ayurveda': 'Ayurveda',
    'nav.artTherapy': 'Art Therapy',
    'nav.soundTherapy': 'Sound Therapy',
    'nav.drumCircle': 'Drum Circle',
    'nav.reservation': 'Reservations',
    'nav.contact': 'Contact',
    
    // Home page
    'home.title': 'WELLNESS on ISLAND',
    'home.subtitle1': 'After a busy everyday life,',
    'home.subtitle2': 'It\'s time to practice letting go.',
    'home.description': 'Lighten your body, mind, and life,\nExperience wellness at Nami Island',
    
    // Program info
    'program.date': 'Date: May 10-11, 2025',
    'program.venue': 'Venue: Nami Island',
    'program.contact': 'Contact: 031-580-8015',
    'program.price1day': 'Day 1 Pass',
    'program.price2day': 'Day 2 Pass',
    'program.priceAllday': 'Full Event Pass',
    'program.won': 'KRW',
    
    // Reservation
    'reservation.button': 'Make a Reservation',
    'reservation.scheduleTitle': 'Program Schedule',
    'reservation.location': 'Location',
    'reservation.contact': 'Contact',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.instructor': 'Instructor',
    'common.location': 'Location',
    'common.schedule': 'Schedule',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
