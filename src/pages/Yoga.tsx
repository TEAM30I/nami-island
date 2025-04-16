import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/2/ko.png";
import en_image from "/2/en.png";

const Yoga = () => {
  const { language } = useLanguage();
  
  // 언어별 타이틀과 설명 설정
  const title = language === "ko" 
    ? "요가 - 내면의 평화를 찾다" 
    : "Yoga - Find Your Inner Peace";
  const description = language === "ko" 
    ? "요가를 통해 몸과 마음의 균형을 찾고 내면의 평화를 경험하세요. 집중과 이완의 순간을 누리며 건강한 삶을 시작해보세요."
    : "Experience balance and inner peace through yoga. Embrace moments of focus and relaxation to start a healthier, more mindful life.";
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/yoga" />
      </Helmet>
      <main className="max-w-[80%] mx-auto">
        <img 
          src={language === 'ko' ? ko_image : en_image} 
          alt={language === 'ko' ? "요가" : "Yoga"} 
          className="max-w-full h-auto"
        />
      </main>
    </>
  );
};

export default Yoga;
