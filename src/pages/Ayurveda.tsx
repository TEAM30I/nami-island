
import { useLanguage } from "@/context/LanguageContext";

const Ayurveda = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" : "/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png"} 
        alt={language === 'ko' ? "아유르베다" : "Ayurveda"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Ayurveda;
