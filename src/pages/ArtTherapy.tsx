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
        alt={
          language === 'ko'
            ? "남이섬 아트 테라피 워크숍에서 그림과 색채를 통해 자기표현을 하는 참가자 모습"
            : "Participants expressing themselves through painting and color in an art therapy workshop at Nami Island wellness retreat"
        }
        className="max-w-full h-auto"
      />
      </div>
    </>
  );
};

export default ArtTherapy;
