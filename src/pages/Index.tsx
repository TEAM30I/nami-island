
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/3/ko.png";
import en_image from "../../public/3/en.png";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "웰니스 온 아일랜드" : "Wellness on Island"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Index;
