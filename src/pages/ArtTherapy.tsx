import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/4/ko.png";
import en_image from "/4/en.png";

const ArtTherapy = () => {
  const { language } = useLanguage();

  const title = language === "ko"
    ? "아트 테라피 - 창조적 치유와 자기표현"
    : "Art Therapy - Creative Healing and Self-Expression";
  const description = language === "ko"
    ? "아트 테라피를 통해 창조적인 자기표현과 심리적 치유를 경험하세요. 예술의 힘으로 내면의 변화를 이끌어보세요."
    : "Experience creative healing and self-expression through Art Therapy. Let the power of art inspire inner transformation.";
  
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/art-therapy" />
      </Helmet>
      <div className="max-w-[80%] mx-auto">
        <img 
          src={language === 'ko' ? ko_image : en_image} 
          alt={language === 'ko' ? "아트 테라피" : "Art Therapy"} 
          className="max-w-full h-auto"
        />
      </div>
    </>
  );
};

export default ArtTherapy;
