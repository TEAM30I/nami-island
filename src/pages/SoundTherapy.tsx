import { useLanguage } from "@/context/LanguageContext";
import ko_image from "../../public/5/ko.png";
import en_image from "../../public/5/en.png";

const SoundTherapy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="max-w-[80%] mx-auto">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={language === 'ko' ? "사운드 테라피" : "Sound Therapy"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default SoundTherapy;
