
import { useLanguage } from "@/context/LanguageContext";

const SoundTherapy = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Header Section */}
      <section className="relative py-20 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 opacity-50" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png')" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center font-serif">
                <span className="text-wellness-dark">사운드 테라피</span>
                <span className="ml-4 text-gray-600">SOUND THERAPY</span>
              </h1>
              <div className="h-1 w-20 bg-wellness-accent mb-6"></div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                alt="Sound Therapy" 
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
                    src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                    alt="Kartikeya Vashist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2 text-center">Kartikeya Vashist</h2>
                <p className="text-center text-gray-600 mb-4">@kartikeyavashist</p>
                
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
                <p>경포정</p>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Sound Therapy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <img 
                  src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                  alt="Sound Therapy Instrument 1" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                  alt="Sound Therapy Instrument 2" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                  alt="Sound Therapy Instrument 3" 
                  className="rounded-lg"
                />
                <img 
                  src="/lovable-uploads/a2ffa7e8-8b09-4e62-88c2-6b9bf31a3113.png" 
                  alt="Sound Therapy Instrument 4" 
                  className="rounded-lg"
                />
              </div>
              
              <div className="border-l-4 border-wellness-accent pl-6 py-2 mb-8">
                <p className="text-lg">
                  아름다운 공간 속에서 울려 퍼지는 신비로운 인도의 선율을 들으며,<br />
                  몸과 마음을 편안함과 치유의 흐름 속으로 이끌어 보세요.
                </p>
              </div>
              
              <p className="text-lg font-medium mb-2">사용 악기: 반수리 (Bansuri - 인도 전통 대나무 플루트)</p>
              <p className="text-base mb-6">
                반수리는 인도의 전통적인 대나무 횡취 플루트로, 약 14-36인치의 길이를 가지며 소리의 치유력이 있다고 알려져 있습니다. 
                깊고 부드러운 음색은 듣는 이에게 평온함과 집중력을 가져다 줍니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoundTherapy;
