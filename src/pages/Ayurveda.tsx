import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/3/ko.png";
import en_image from "/3/en.png";

const Ayurveda = () => {
  const { language } = useLanguage();

  const title = language === "ko"
    ? "아유르베다 - 전통 인도 건강법과 조화"
    : "Ayurveda - Traditional Indian Healing and Harmony";
  const description = language === "ko"
    ? "아유르베다의 자연 치유법으로 몸과 마음의 균형을 찾아보세요. 전통 인도 건강법의 지혜를 경험해보세요."
    : "Discover balance and wellness through Ayurveda – the traditional Indian system of natural healing and holistic wellness.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/ayurveda" />
      </Helmet>
      <div className="max-w-[80%] mx-auto">
      <img 
        src={language === 'ko' ? ko_image : en_image} 
        alt={
          language === 'ko'
            ? "남이섬 웰니스 아유르베다 세션에서 전통 인도 오일과 허브를 활용해 치유를 경험하는 모습"
            : "Guests engaging in traditional Indian Ayurveda healing with oils and herbs during a wellness session on Nami Island"
        }
        className="max-w-full h-auto"
      />
      </div>
    </>
  );
};

export default Ayurveda;
