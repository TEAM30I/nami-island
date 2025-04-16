import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/2/ko.png";
import en_image from "../../public/2/en.png";

const Yoga = () => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full p-0 m-0">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "요가" : "Yoga"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Yoga;