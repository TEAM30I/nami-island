
import { useLanguage } from "@/context/LanguageContext";

const Yoga = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center font-serif">
                <span className="text-wellness-dark">요가</span>
                <span className="ml-4 text-gray-600">YOGA</span>
              </h1>
              <div className="h-1 w-20 bg-wellness-accent mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png" 
                alt="Yoga" 
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
                    src="/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png" 
                    alt="Surbhi Sachdeva" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">Surbhi Sachdeva</h2>
                <p className="text-center text-gray-600 mb-4">@yogascapesbysurbhi</p>
                
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
                <p>남이장대</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Yoga Styles</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <span className="font-medium">빈야사 요가</span> - Vinyasa Yoga
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <span className="font-medium">아쉬탕가 요가</span> - Ashtanga Yoga
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <div>
                    <span className="font-medium">하타 요가</span> - Hatha Yoga
                  </div>
                </li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <img 
                  src="/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png" 
                  alt="Yoga Practice 1" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/d229f688-34af-4f34-8c69-1221f39c4cc6.png" 
                  alt="Yoga Practice 2" 
                  className="rounded-lg"
                />
              </div>
              
              <div className="border-l-4 border-wellness-accent pl-6 py-2">
                <p className="text-lg">
                  인도에서 온 전문 강사와 함께 다양한 요가 스타일을 배우며<br />
                  몸과 마음의 균형을 찾고 내면의 평온함을 경험해 보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Yoga;
