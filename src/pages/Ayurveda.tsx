import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/3/ko.png";
import en_image from "../../public/3/en.png";

const Ayurveda = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-[80%] mx-auto">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "아유르베다" : "Ayurveda"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Ayurveda;
