import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/6/ko.png";
import en_image from "../../public/6/en.jpg";

const DrumCircle = () => {
  const { language } = useLanguage();
  
  return (
    <div>
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "드럼서클" : "Drum Circle"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default DrumCircle;
