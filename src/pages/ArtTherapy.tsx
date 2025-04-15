
import { useLanguage } from "@/context/LanguageContext";

const ArtTherapy = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png" : "/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png"} 
        alt={language === 'ko' ? "아트 테라피" : "Art Therapy"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default ArtTherapy;
