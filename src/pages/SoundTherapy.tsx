
import { useLanguage } from "@/context/LanguageContext";

const SoundTherapy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" : "/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png"} 
        alt={language === 'ko' ? "사운드 테라피" : "Sound Therapy"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default SoundTherapy;
