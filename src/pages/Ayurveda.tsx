
import { useLanguage } from "@/context/LanguageContext";

const Ayurveda = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center font-serif">
                <span className="text-wellness-dark">아유르베다</span>
                <span className="ml-4 text-gray-600">AYURVEDA</span>
              </h1>
              <div className="h-1 w-20 bg-wellness-accent mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" 
                alt="Ayurveda" 
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
                    src="/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" 
                    alt="Vaidya Sajna. C" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">Vaidya Sajna. C</h2>
                <p className="text-center text-gray-600 mb-1">@vaidyagramaayurveda</p>
                <p className="text-center text-gray-600 mb-4">(B.A.M.S)</p>
                
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
                <p>세미나홀</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Ayurveda</h2>
              <p className="mb-4">※ B.A.M.S. (Bachelor of Ayurvedic Medicine & Surgery) : 아유르베다 의학 및 외과 학사</p>
              
              <p className="mb-6 text-lg">
                <span className="font-medium">아유르베다</span> - Ayurveda<br />
                : 인도의 고대 전통의학으로 '생명의 과학' 또는 '삶의 지혜'를 뜻한다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src="/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" 
                  alt="Ayurveda Practice 1" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/7a0e9648-3d27-4530-b2cf-3afe6a204d0c.png" 
                  alt="Ayurveda Practice 2" 
                  className="rounded-lg"
                />
              </div>
              
              <div className="border-l-4 border-wellness-accent pl-6 py-2">
                <p className="text-lg">
                  인도 전통 의학 아유르베다를 경험하며 신선한 허브를 기반으로 한<br />
                  건강한 식재료로 나만의 웰니스 레시피를 완성해 보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ayurveda;
