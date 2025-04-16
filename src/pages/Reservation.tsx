import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import qrImage from "/7/QR.png";

const Reservation = () => {
  const { t, language } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 'all'>(1);
  
  const reservationUrl = "https://naminara.net/main/page/product_detail.php?pr_cate=55&pr_idx=112";

  // SEO 최적화용 타이틀과 설명
  const title = language === "ko" 
    ? "예약 - 남이섬 웰니스 프로그램 예약" 
    : "Reservation - Book Your Wellness Experience";
  const description = language === "ko"
    ? "남이섬에서 진행되는 웰니스 프로그램의 예약 페이지입니다. 상세 일정과 프로그램 정보를 확인하고 간편하게 예약하세요."
    : "Book your wellness experience at Namisum. Check detailed schedules and program information to reserve your spot easily.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/reservation" />
      </Helmet>
      <section className="relative pb-20 mb-12 max-w-lg mx-auto">
        <img 
          src={qrImage} 
          alt="Reservation Header" 
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            {t('reservation.scheduleTitle')}
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
                Day 1 (5월 10일)
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedDay === 2 ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedDay(2)}
              >
                Day 2 (5월 11일)
              </button>
              <button
                type="button"
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  selectedDay === 'all' ? 'bg-white shadow-sm' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedDay('all')}
              >
                Full Schedule
              </button>
            </div>
          </div>
          
          {/* Schedule Table */}
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Yoga</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ayurveda</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Art Therapy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sound Therapy</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drum Circle</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {(selectedDay === 1 || selectedDay === 'all') && (
                  <>
                    <tr className="bg-gray-100">
                      <td colSpan={6} className="px-6 py-2 text-sm font-medium">
                        Day 1 (5월 10일)
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
                        드럼서클
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        16:00-17:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        요가
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아유르베다
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아트 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        사운드 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        드럼서클
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        18:00-19:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        요가
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아유르베다
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아트 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        사운드 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        20:00-21:00
                      </td>
                      <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium text-center">
                        Special Session: 웰니스 뮤직 콘서트
                      </td>
                    </tr>
                  </>
                )}
                
                {(selectedDay === 2 || selectedDay === 'all') && (
                  <>
                    <tr className="bg-gray-100">
                      <td colSpan={6} className="px-6 py-2 text-sm font-medium">
                        Day 2 (5월 11일)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        07:00-08:00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        명상
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
                        드럼서클
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        11:00-12:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        요가
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아유르베다
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아트 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        사운드 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        13:00-14:30
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        요가
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아유르베다
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        아트 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        사운드 테라피
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">
                        드럼서클
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
              <h2 className="text-2xl font-bold mb-4">{t('reservation.location')}</h2>
              <p className="mb-6">
                <strong>남이섬</strong>
                <br />
                강원특별자치도 춘천시 남산면 남이섬길 1
                <br />
                <a href="tel:+82315808015" className="text-wellness-accent hover:underline">
                  031-580-8015
                </a>
              </p>
              
              <h3 className="text-lg font-medium mb-2">대중교통으로 오시는 법</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>
                  <strong>기차:</strong> 경춘선 가평역 하차 → 남이섬 방면 버스 또는 택시 이용
                </li>
                <li>
                  <strong>버스:</strong> 서울 동서울터미널에서 가평 방면 버스 → 남이섬 입구 하차
                </li>
                <li>
                  <strong>셔틀버스:</strong> 서울 인사동, 명동에서 남이섬 직행 셔틀버스 운행
                </li>
              </ul>
              
              <h3 className="text-lg font-medium mb-2">자가용으로 오시는 법</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>
                  <strong>서울방면:</strong> 경춘고속도로 → 가평IC → 남이섬 방면
                </li>
                <li>
                  <strong>주차:</strong> 남이섬 선착장 주변 공영주차장 이용
                </li>
              </ul>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <p className="text-sm text-gray-600">
                  <strong>주의사항:</strong> 남이섬은 섬으로 되어 있어 선착장에서 배를 타고 이동해야 합니다. 승선권 구매 후 페리를 이용해 주세요.
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
            {t('nav.contact')}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">프로그램 문의</h3>
                <p className="mb-2">
                  <strong>전화:</strong> 031-580-8015
                </p>
                <p className="mb-2">
                  <strong>이메일:</strong> wellness@namitour.com
                </p>
                <p className="mb-2">
                  <strong>운영시간:</strong> 09:00 - 18:00 (월-금)
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4">남이섬 관광 안내</h3>
                <p className="mb-2">
                  <strong>안내센터:</strong> 031-580-8114
                </p>
                <p className="mb-2">
                  <strong>웹사이트:</strong>
                  <a 
                    href="http://www.namisum.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-wellness-accent hover:underline"
                  >
                    www.namisum.com
                  </a>
                </p>
                <p className="mb-2">
                  <strong>운영시간:</strong> 07:30 - 21:30 (연중무휴)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
