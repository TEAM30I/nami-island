
import { useLanguage } from "@/context/LanguageContext";

const Yoga = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png" : "/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png"} 
        alt={language === 'ko' ? "요가" : "Yoga"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Yoga;
