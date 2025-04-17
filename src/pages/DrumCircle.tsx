import React from "react";
import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import ko_image from "/6/ko.png";
import en_image from "/6/en.png";

const DrumCircle = () => {
  const { language } = useLanguage();

  const title = language === "ko"
    ? "드럼서클 - 함께 만드는 리듬과 에너지"
    : "Drum Circle - Creating Rhythm and Energy Together";
  const description = language === "ko"
    ? "드럼서클에 참여하여 리듬과 에너지를 공유하며 공동체의 활기를 느껴보세요."
    : "Join our Drum Circle to share rhythmic energy and experience the vibrant spirit of community.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://nami.bodhis.kr/drum-circle" />
      </Helmet>
      <div className="flex justify-center">
        <div className="max-w-[80%] mx-auto">
          <img 
            src={language === 'ko' ? ko_image : en_image} 
            alt={
              language === 'ko'
                ? "남이섬 웰니스 이벤트 드럼서클에서 참가자들이 리듬을 만들며 함께 연주하는 장면"
                : "Participants drumming together in a wellness drum circle event on Nami Island, creating communal rhythm"
            }
            className="object-contain w-full h-auto lg:max-w-[50%] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default DrumCircle;
