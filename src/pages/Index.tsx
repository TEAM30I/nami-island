import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/1/ko.png";
import en_image from "/1/en.png";
import intro_1 from "/1/1.jpg";
import intro_2 from "/1/2.png";
import intro_3 from "/1/3.png";
import intro_4 from "/1/4.png";

const Index = () => {
  const { language } = useLanguage();
  
  // 언어 상태 확인
  console.log("Current language:", language);
  
  // 언어에 따라 표시할 이미지 선택
  const contentImage = language === 'ko' ? ko_image : en_image;
  const imageAlt = language === 'ko' ? "웰니스 온 아일랜드" : "Wellness on Island";
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="relative w-full max-w-6xl mx-auto">
          <img 
            src={intro_1} 
            alt="소개" 
            className="max-w-full h-auto mx-auto backdrop-blur-sm lg:max-w-[50%]"
          />
          <div className="absolute bottom-10 md:bottom-15 left-1/2 transform -translate-x-1/2">
            <a 
              href="https://booking.naver.com/booking/12/bizes/575861/items/6587856?area=pll&lang=ko&startDateTime=2025-05-10T00%3A00%3A00%2B09%3A00&theme=place" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#2DB400] hover:bg-[#2DB400] text-white font-bold 
                         text-sm sm:text-base md:text-lg lg:text-xl 
                         py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 
                         rounded shadow-lg transition-all duration-200"
            >
              {language === 'ko' ? '예약하기' : 'Reservation'}
            </a>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <img 
            src={intro_2} 
            alt="소개" 
            className="max-w-full h-auto mx-auto backdrop-blur-sm lg:max-w-[50%]"
          />
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <img 
            src={intro_3} 
            alt="소개" 
            className="max-w-full h-auto mx-auto backdrop-blur-sm lg:max-w-[50%]"
          />
        </div>
        <div className="w-full max-w-6xl mx-auto">
          <img 
            src={intro_4} 
            alt="소개" 
            className="max-w-full h-auto mx-auto backdrop-blur-sm lg:max-w-[50%]"
          />
        </div>
      </div>
      
      <div className="w-80 mx-auto border-b border-gray-300"></div>
      
      {/* 언어에 따른 이미지 표시 */}
      <div className="w-full max-w-2xl mx-auto px-4">
        <img 
          src={contentImage} 
          alt={imageAlt} 
          className="max-w-full h-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Index;
