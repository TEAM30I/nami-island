import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import qrImage from "/7/QR.png";

const Reservation = () => {
  const { language } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 'all'>(1);
  
  const reservationUrl = "https://naminara.net/main/page/product_detail.php?pr_cate=55&pr_idx=112";

  // 언어별 텍스트 정의 (모든 필수 속성 포함)
  const texts = {
    ko: {
      title: "예약 - 남이섬 웰니스 프로그램 예약",
      description: "남이섬에서 진행되는 웰니스 프로그램의 예약 페이지입니다. 상세 일정과 프로그램 정보를 확인하고 간편하게 예약하세요.",
      scheduleTitle: "프로그램 일정",
      locationTitle: "위치 안내",
      contactTitle: "문의하기",
      day1: "1일차 (5월 10일)",
      day2: "2일차 (5월 11일)",
      fullSchedule: "전체 일정",
      programNames: {
        yoga: "요가",
        ayurveda: "아유르베다",
        artTherapy: "아트 테라피",
        soundTherapy: "사운드 테라피",
        drumCircle: "드럼서클",
        meditation: "명상",
        specialSession: "특별 세션: 웰니스 뮤직 콘서트"
      },
      addressTitle: "주소",
      phoneTitle: "전화",
      emailTitle: "이메일",
      hoursTitle: "운영시간",
      infoCenterTitle: "안내센터",
      websiteTitle: "웹사이트",
      noticeTitle: "주의사항",
      address: "강원특별자치도 춘천시 남산면 남이섬길 1",
      phone: "031-580-8015",
      email: "wellness@namitour.com",
      hours: {
        weekday: "09:00 - 18:00 (월-금)",
        always: "07:30 - 21:30 (연중무휴)"
      },
      programInquiry: "프로그램 문의",
      tourInfo: "남이섬 관광 안내",
      infoCenter: "031-580-8114",
      website: "www.namisum.com",
      publicTransportTitle: "대중교통으로 오시는 법",
      publicTransportItems: [
        {
          title: "기차",
          description: "경춘선 가평역 하차 → 남이섬 방면 버스 또는 택시 이용"
        },
        {
          title: "버스",
          description: "서울 동서울터미널에서 가평 방면 버스 → 남이섬 입구 하차"
        },
        {
          title: "셔틀버스",
          description: "서울 인사동, 명동에서 남이섬 직행 셔틀버스 운행"
        }
      ],
      carTransportTitle: "자가용으로 오시는 법",
      carTransportItems: [
        {
          title: "서울방면",
          description: "경춘고속도로 → 가평IC → 남이섬 방면"
        },
        {
          title: "주차",
          description: "남이섬 선착장 주변 공영주차장 이용"
        }
      ]
    },
    en: {
      title: "Reservation - Book Your Wellness Experience",
      description: "Book your wellness experience at Namisum. Check detailed schedules and program information to reserve your spot easily.",
      scheduleTitle: "Program Schedule",
      locationTitle: "Location",
      contactTitle: "Contact Us",
      day1: "Day 1 (May 10)",
      day2: "Day 2 (May 11)",
      fullSchedule: "Full Schedule",
      programNames: {
        yoga: "Yoga",
        ayurveda: "Ayurveda",
        artTherapy: "Art Therapy",
        soundTherapy: "Sound Therapy",
        drumCircle: "Drum Circle",
        meditation: "Meditation",
        specialSession: "Special Session: Wellness Music Concert"
      },
      addressTitle: "Address",
      phoneTitle: "Phone",
      emailTitle: "Email",
      hoursTitle: "Hours",
      infoCenterTitle: "Information Center",
      websiteTitle: "Website",
      noticeTitle: "Notice",
      address: "1 Nami Island Road, Namsan-myeon, Chuncheon-si, Gangwon-do",
      phone: "+82 31-580-8015",
      email: "wellness@namitour.com",
      hours: {
        weekday: "09:00 - 18:00 (Mon-Fri)",
        always: "07:30 - 21:30 (Everyday)"
      },
      programInquiry: "Program Inquiry",
      tourInfo: "Tour Information",
      infoCenter: "+82 31-580-8114",
      website: "www.namisum.com",
      publicTransportTitle: "Public Transportation",
      publicTransportItems: [
        {
          title: "Train",
          description: "Take the Gyeongchun Line to Gapyeong Station → Transfer to a bus or taxi to Nami Island"
        },
        {
          title: "Bus",
          description: "Take a bus from Dong Seoul Terminal to Gapyeong → Get off at Nami Island entrance"
        },
        {
          title: "Shuttle Bus",
          description: "Direct shuttle buses operate from Insadong and Myeongdong in Seoul"
        }
      ],
      carTransportTitle: "By Car",
      carTransportItems: [
        {
          title: "From Seoul",
          description: "Take the Gyeongchun Expressway → Exit at Gapyeong IC → Follow signs to Nami Island"
        },
        {
          title: "Parking",
          description: "Use the public parking lot near the Nami Island ferry dock"
        }
      ]
    }
  };

  const currentTexts = language === 'ko' ? texts.ko : texts.en;

  return (
    <>
      <Helmet>
        <title>{currentTexts.title}</title>
        <meta name="description" content={currentTexts.description} />
        <link rel="canonical" href="https://nami.bodhis.kr/reservation" />
      </Helmet>
      <section className="relative pb-20 mb-12 max-w-lg mx-auto">
      <img 
        src={qrImage} 
        alt={
          language === 'ko'
            ? "남이섬 웰니스 프로그램 예약 페이지로 연결되는 QR 코드 이미지"
            : "QR code used to reserve wellness programs at Nami Island retreat"
        } 
        className="w-full h-auto object-cover"
      />
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {currentTexts.scheduleTitle}
          </h2>
          
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md shadow-sm bg-gray-100 p-1">
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedDay === 1 ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedDay(1)}
              >
                {currentTexts.day1}
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedDay === 2 ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedDay(2)}
              >
                {currentTexts.day2}
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedDay === 'all' ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedDay('all')}
              >
                {currentTexts.fullSchedule}
              </button>
            </div>
          </div>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentTexts.programNames.yoga}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentTexts.programNames.ayurveda}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentTexts.programNames.artTherapy}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentTexts.programNames.soundTherapy}</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{currentTexts.programNames.drumCircle}</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(selectedDay === 1 || selectedDay === 'all') && (
                  <>
                    <tr className="bg-gray-100">
                      <td colSpan={6} className="px-6 py-2 text-sm font-medium">
                        {currentTexts.day1}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        14:30-15:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.drumCircle}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        16:00-17:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.yoga}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.ayurveda}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.artTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.soundTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.drumCircle}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        18:00-19:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.yoga}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.ayurveda}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.artTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.soundTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        20:00-21:00
                      </td>
                      <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-center">
                        {currentTexts.programNames.specialSession}
                      </td>
                    </tr>
                  </>
                )}
                
                {(selectedDay === 2 || selectedDay === 'all') && (
                  <>
                    <tr className="bg-gray-100">
                      <td colSpan={6} className="px-6 py-2 text-sm font-medium">
                        {currentTexts.day2}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        07:00-08:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.meditation}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        09:30-10:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.drumCircle}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        11:00-12:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.yoga}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.ayurveda}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.artTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.soundTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        13:00-14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.yoga}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.ayurveda}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.artTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.soundTherapy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {currentTexts.programNames.drumCircle}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{currentTexts.locationTitle}</h2>
              <p className="mb-6">
                <strong>Nami Island</strong>
                <br />
                <strong>{currentTexts.addressTitle}:</strong> {currentTexts.address}
                <br />
                <strong>{currentTexts.phoneTitle}:</strong> 
                <a href={`tel:${currentTexts.phone.replace(/\D/g, '')}`} className="text-wellness-accent hover:underline ml-1">
                  {currentTexts.phone}
                </a>
              </p>
              
              {/* 대중교통 정보 (언어별 동적 표시) */}
              <h3 className="text-lg font-medium mb-2">{currentTexts.publicTransportTitle}</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {currentTexts.publicTransportItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              
              {/* 자가용 정보 (언어별 동적 표시) */}
              <h3 className="text-lg font-medium mb-2">{currentTexts.carTransportTitle}</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                {currentTexts.carTransportItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.description}
                  </li>
                ))}
              </ul>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <p className="text-sm text-gray-600">
                  <strong>{currentTexts.noticeTitle}:</strong> {language === 'ko' 
                    ? "남이섬은 섬으로 되어 있어 선착장에서 배를 타고 이동해야 합니다. 승선권 구매 후 페리를 이용해 주세요."
                    : "Nami Island is an island, so you must take a ferry from the dock. Please purchase a ferry ticket before boarding."}
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="aspect-square w-full bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.868573643067!2d127.52541766483207!3d37.79431051634369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35637ffd04c986b9%3A0x8c96ab481db0a59a!2z64KY7J2M7ISc!5e0!3m2!1sko!2skr!4v1657286146540!5m2!1sko!2skr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {currentTexts.contactTitle}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">{currentTexts.programInquiry}</h3>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '전화' : 'Phone'}:</strong> {currentTexts.phone}
                </p>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '이메일' : 'Email'}:</strong> {currentTexts.email}
                </p>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '운영시간' : 'Hours'}:</strong> {currentTexts.hours.weekday}
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">{currentTexts.tourInfo}</h3>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '안내센터' : 'Information Center'}:</strong> {currentTexts.infoCenter}
                </p>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '웹사이트' : 'Website'}:</strong>
                  <a 
                    href={`http://${currentTexts.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-wellness-accent hover:underline ml-1"
                  >
                    {currentTexts.website}
                  </a>
                </p>
                <p className="mb-2">
                  <strong>{language === 'ko' ? '운영시간' : 'Hours'}:</strong> {currentTexts.hours.always}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-10 md:bottom-0 left-1/2 transform -translate-x-1/2">
        <a 
          href={reservationUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#2DB400] hover:bg-[#2DB400] text-white font-bold 
                     text-sm sm:text-base md:text-lg lg:text-xl 
                     py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-5 lg:px-10 
                     rounded shadow-lg transition-all duration-200
                     font-sans"
        >
          {language === 'ko' ? '예약하기' : 'Reservation'}
        </a>
      </div>

    </>
  );
};

export default Reservation;
