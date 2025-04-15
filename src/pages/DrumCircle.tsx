
import { useLanguage } from "@/context/LanguageContext";

const DrumCircle = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center font-serif">
                <span className="text-wellness-dark">드럼서클</span>
                <span className="ml-4 text-gray-600">DRUM CIRCLE</span>
              </h1>
              <div className="h-1 w-20 bg-wellness-accent mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" 
                alt="Drum Circle" 
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
                    src="/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" 
                    alt="Narendra Solanki" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">Narendra Solanki</h2>
                <p className="text-center text-gray-600 mb-1">드럼서클 Drum Circle</p>
                
                <h3 className="text-lg font-medium mb-2 mt-6">{t('common.schedule')}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="bg-white px-4 py-2 rounded-lg mb-2 font-medium">5월 10일</div>
                    <ul className="space-y-1 pl-4">
                      <li>14:30-15:30</li>
                      <li>16:00-17:00</li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-white px-4 py-2 rounded-lg mb-2 font-medium">5월 11일</div>
                    <ul className="space-y-1 pl-4">
                      <li>9:30-10:30</li>
                      <li>13:00-14:00</li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-2">{t('common.location')}</h3>
                <p>화석정</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Drum Circle</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src="/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" 
                  alt="Drum Circle Session 1" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/aa7df7b8-876c-4ff6-a9a7-f4cd06c924f7.png" 
                  alt="Drum Circle Session 2" 
                  className="rounded-lg"
                />
              </div>
              
              <div className="border-l-4 border-wellness-accent pl-6 py-2 mb-8">
                <p className="text-lg">
                  인도의 드럼 음악가와 함께 타악기를 연주하며<br />
                  활기차고 에너지 넘치는 시간을 즐겨보세요.
                </p>
              </div>
              
              <h3 className="text-xl font-medium mb-4">드럼서클이란?</h3>
              <p className="text-base mb-6">
                드럼서클은 다양한 타악기를 사용하여 참가자들이 원형으로 모여 즉흥적으로 음악을 연주하는 활동입니다. 
                리듬과 비트를 통해 소통하고 표현하며, 공동체 의식과 스트레스 해소, 창의성 향상 등 다양한 웰빙 효과를 
                경험할 수 있습니다. 음악적 경험이 없어도 누구나 쉽게 참여할 수 있는 활동입니다.
              </p>
              
              <p className="text-lg font-medium mb-2">Makrand Sanon - 퍼커션 Percussion</p>
              <p className="text-base mb-4">
                인도의 유명한 퍼커셔니스트로, 다양한 전통 및 현대 타악기를 연주합니다. 
                그의 워크샵은 활기차고 에너지 넘치는 분위기로 유명합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DrumCircle;
