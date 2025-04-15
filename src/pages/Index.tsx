import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/lovable-uploads/b7bf2886-6536-4c38-81ee-ca6c13c41246.png')" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
            {t('home.title')}
          </h1>
          <div className="space-y-2 mb-8 font-light">
            <p className="text-lg md:text-xl lg:text-2xl">{t('home.subtitle1')}</p>
            <p className="text-lg md:text-xl lg:text-2xl">{t('home.subtitle2')}</p>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl max-w-2xl font-light whitespace-pre-line">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* Program Info Section */}
      <section className="py-16 md:py-24 bg-wellness-beige/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
                NAMBOOK 2025
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center">
                WELLNESS on ISLAND
              </h3>

              <div className="space-y-4 mb-8 text-center">
                <p className="text-lg">{t('program.date')}</p>
                <p className="text-lg">{t('program.venue')}</p>
                <p className="text-lg">{t('program.contact')}</p>
              </div>

              {/* Pricing */}
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                <div className="bg-gray-100 rounded-full px-6 py-3 text-center">
                  <span className="font-medium">{t('program.price1day')}</span> 69,000{t('program.won')}
                </div>
                <div className="bg-gray-100 rounded-full px-6 py-3 text-center">
                  <span className="font-medium">{t('program.price2day')}</span> 59,000{t('program.won')}
                </div>
                <div className="bg-gray-100 rounded-full px-6 py-3 text-center">
                  <span className="font-medium">{t('program.priceAllday')}</span> 109,000{t('program.won')}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link to="/reservation">
                  <Button size="lg" className="bg-wellness-accent hover:bg-wellness-accent/90 text-white">
                    {t('reservation.button')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Program Image */}
            <div className="aspect-video w-full">
              <img 
                src="/lovable-uploads/3163b895-90cf-459a-b226-3cf39206d6c7.png" 
                alt="Wellness on Island Program" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Programs Highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProgramCard 
              title={t('nav.yoga')}
              imageSrc="/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png"
              link="/yoga"
            />
            <ProgramCard 
              title={t('nav.ayurveda')}
              imageSrc="/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" 
              link="/ayurveda"
            />
            <ProgramCard 
              title={t('nav.artTherapy')}
              imageSrc="/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png"
              link="/art-therapy"
            />
            <ProgramCard 
              title={t('nav.soundTherapy')}
              imageSrc="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
              link="/sound-therapy"
            />
            <ProgramCard 
              title={t('nav.drumCircle')}
              imageSrc="/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" 
              link="/drum-circle"
            />
            <ProgramCard 
              title={t('nav.reservation')}
              imageSrc="/lovable-uploads/284bd5a3-2157-46c1-bdd1-051c3c00a45f.png" 
              link="/reservation"
            />
          </div>
        </div>
      </section>
    </>
  );
};

interface ProgramCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProgramCard = ({ title, imageSrc, link }: ProgramCardProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <Link to={link}>
          <Button variant="link" className="text-wellness-accent p-0">
            {t('common.learnMore')} →
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
