
import { useLanguage } from "@/context/LanguageContext";

const DrumCircle = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" : "/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png"} 
        alt={language === 'ko' ? "드럼서클" : "Drum Circle"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default DrumCircle;
