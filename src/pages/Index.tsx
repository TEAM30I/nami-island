
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center">
      <img 
        src={language === 'ko' ? "/lovable-uploads/b7bf2886-6536-4c38-81ee-ca6c13c41246.png" : "/lovable-uploads/b7bf2886-6536-4c38-81ee-ca6c13c41246.png"} 
        alt={language === 'ko' ? "웰니스 온 아일랜드" : "Wellness on Island"} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Index;
