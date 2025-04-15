
import { useLanguage } from "@/context/LanguageContext";

const ArtTherapy = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center font-serif">
                <span className="text-wellness-dark">아트 테라피</span>
                <span className="ml-4 text-gray-600">ART THERAPY</span>
              </h1>
              <div className="h-1 w-20 bg-wellness-accent mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png" 
                alt="Art Therapy" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png" 
                    alt="Puneeta Roy" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">Puneeta Roy</h2>
                <p className="text-center text-gray-600 mb-4">@yuvaektaf</p>
                
                <h3 className="text-lg font-medium mb-2">{t('common.schedule')}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="bg-white px-4 py-2 rounded-lg mb-2 font-medium">5월 10일</div>
                    <ul className="space-y-1 pl-4">
                      <li>16:00-17:30</li>
                      <li>18:00-19:30</li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white px-4 py-2 rounded-lg mb-2 font-medium">5월 11일</div>
                    <ul className="space-y-1 pl-4">
                      <li>11:00-12:30</li>
                      <li>13:00-14:30</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-2">{t('common.location')}</h3>
                <p>별천지</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Art Therapy</h2>
              
              <p className="mb-6 text-lg">
                <span className="font-medium">아트 테라피</span> - Art Therapy<br />
                : 미술, 음악 그리고 다양한 도구를 통한 자기 이해 (감정, 기억 처리)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src="/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png" 
                  alt="Art Therapy Session 1" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/fecb3cdc-ce18-4541-b1bf-dd1ae34c43e3.png" 
                  alt="Art Therapy Session 2" 
                  className="rounded-lg"
                />
              </div>
              
              <div className="border-l-4 border-wellness-accent pl-6 py-2">
                <p className="text-lg">
                  다양한 색을 마주할 때 어떤 감정이 떠오르나요?<br />
                  색을 통해 나 자신을 더 깊이 이해하는 시간을 가져보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArtTherapy;
