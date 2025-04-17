import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // 현재 경로 정보를 가져오기 위한 useLocation

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: t('nav.yoga'), path: '/yoga' },
    { name: t('nav.ayurveda'), path: '/ayurveda' },
    { name: t('nav.artTherapy'), path: '/art-therapy' },
    { name: t('nav.soundTherapy'), path: '/sound-therapy' },
    { name: t('nav.drumCircle'), path: '/drum-circle' },
    { name: t('nav.reservation'), path: '/reservation' },
  ];

  // 링크 클릭 시 현재 경로와 이동할 경로가 같은 경우 스크롤 최상단으로 이동
  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    }
    // 모바일 메뉴 사용 시, 메뉴 닫기 처리
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            onClick={() => handleLinkClick('/')}
            className="text-lg md:text-xl font-bold text-wellness-dark hover:text-wellness-accent transition-colors font-serif"
          >
            Wellness on Island
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`text-sm font-medium hover:text-wellness-accent transition-colors
                  ${link.path === '/' ? 'font-bold' : ''}
                  ${isScrolled ? 'text-wellness-dark' : 'text-wellness-dark'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <span className="text-sm font-medium text-wellness-dark mr-2">
                {language === 'ko' ? '언어' : 'Language'}
              </span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-wellness-dark">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Toggle language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage('ko')} className={language === 'ko' ? 'bg-muted' : ''}>
                    한국어
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-muted' : ''}>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* 모바일 메뉴 버튼 - 아이콘 추가 */}
            <button
              className="ml-2 md:hidden text-wellness-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className="text-wellness-dark hover:text-wellness-accent transition-colors py-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
