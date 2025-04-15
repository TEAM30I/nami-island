import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/1/ko.png";
import en_image from "../../public/1/en.png";
import intro_image from "../../public/1/intro.jpg";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-12">
      <div className="relative w-full flex justify-center">
        <img 
          src={intro_image} 
          alt="소개" 
          className="max-w-full h-auto backdrop-blur-sm"
        />
        <div className="absolute bottom-10 md:bottom-15 left-1/2 transform -translate-x-1/2">
          <a 
            href="https://naver.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#2DB400] hover:bg-[#2DB400] text-white font-bold 
                       text-sm sm:text-base md:text-lg lg:text-xl 
                       py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 
                       rounded shadow-lg transition-all duration-200"
          >
            예약하기
          </a>
        </div>
      </div>
      
      <div className="w-80 mx-5 border-b border-gray-300"></div>
      
      <img 
        src={ko_image} 
        alt="웰니스 온 아일랜드" 
        className="max-w-full md:max-w-1/2 md:mx-8 h-auto"
      />
      <img 
        src={en_image} 
        alt="Wellness on Island" 
        className="max-w-full md:max-w-1/2 md:mx-8 h-auto"
      />
    </div>
  );
};

export default Index;