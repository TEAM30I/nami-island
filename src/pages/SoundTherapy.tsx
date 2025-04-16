import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/5/ko.png";
import en_image from "/5/en.png";

const SoundTherapy = () => {
  const { language } = useLanguage();

  const title = language === "ko" 
    ? "사운드 테라피 - 소리의 치유와 명상" 
    : "Sound Therapy - Healing and Meditation through Sound";
  const description = language === "ko"
    ? "부드러운 소리와 리듬을 통해 심신의 안정과 치유를 경험하세요. 사운드 테라피로 내면의 평화와 명상의 깊이를 느껴보세요."
    : "Experience mental and physical healing through soothing sounds. Discover inner peace and a deep meditative state with sound therapy.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/sound-therapy" />
      </Helmet>
      <main className="max-w-[80%] mx-auto">
        <img 
          src={language === 'ko' ? ko_image : en_image} 
          alt={language === 'ko' ? "사운드 테라피" : "Sound Therapy"} 
          className="max-w-full h-auto"
        />
      </main>
    </>
  );
};

export default SoundTherapy;
