import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-wellness-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Wellness on Island</h3>
            <p className="mb-4 text-gray-300">
              남이섬에서 만나는 웰니스 프로그램
            </p>
            <p className="text-sm text-gray-400">
              © 2025 Nami Island Wellness Program.<br />
              All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/yoga" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.yoga')}
                </Link>
              </li>
              <li>
                <Link to="/ayurveda" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.ayurveda')}
                </Link>
              </li>
              <li>
                <Link to="/art-therapy" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.artTherapy')}
                </Link>
              </li>
              <li>
                <Link to="/sound-therapy" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.soundTherapy')}
                </Link>
              </li>
              <li>
                <Link to="/drum-circle" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.drumCircle')}
                </Link>
              </li>
              <li>
                <Link to="/reservation" className="text-gray-300 hover:text-white transition-colors">
                  {t('nav.reservation')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">{t('reservation.scheduleTitle')}</h4>
            <p className="mb-2 text-gray-300">5월 10일 (토) - 5월 11일 (일)</p>
            <p className="mb-4 text-gray-300">09:00 AM - 09:00 PM</p>
            
            <h4 className="text-lg font-medium mb-2 mt-4">{t('reservation.location')}</h4>
            <p className="text-gray-300">남이섬 (가평)</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">{t('nav.contact')}</h4>
            <p className="flex items-center mb-2 text-gray-300">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              031-580-8015
            </p>
            <p className="flex items-center mb-2 text-gray-300">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              wellness@namitour.com
            </p>
            <p className="flex items-center text-gray-300">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              강원특별자치도 춘천시 남산면 남이섬길 1
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>이 웹사이트는 남이섬 웰니스 프로그램을 위해 제작되었습니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
