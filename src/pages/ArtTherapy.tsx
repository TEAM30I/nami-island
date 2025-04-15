
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/4/ko.png";
import en_image from "../../public/4/en.png";

const ArtTherapy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "아트 테라피" : "Art Therapy"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default ArtTherapy;
