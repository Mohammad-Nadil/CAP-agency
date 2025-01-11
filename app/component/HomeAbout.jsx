import React from "react";
import Container from "./layer/Container";
import Image from "next/image";
import BtnCustom from "./layer/BtnCustom";
import bannerImg from "../assets/AboutOurCompanyIMG.png";
import blueTick from "../assets/blueTick.png";

const HomeAbout = () => {
  return (
    <div className="banner HomeAboutBG overflow-hidden">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-y-16 gap-x-10 xl:gap-x-16 pt-20 sm:pt-24 lg:pt-40 xl:pt-44 pb-12 sm:pb-16 lg:pb-20">
        <div className="left sm:w-1/2  ">
          <Image src={bannerImg} alt={bannerImg} />
        </div>
        <div className="right sm:w-1/2  flex flex-col gap-y-8 xl:gap-y-12">
          <div className="top flex flex-col gap-y-5 lg:gap-y-8 ">
            <p className=" text-lg lg:text-2xl font-DM text-primaryOrange font-medium">
              About Our Company
            </p>
            <h2 className=" text-3xl lg:text-5xl font-nunito text-black font-bold">
              Learn How to Grow your Business in Days
            </h2>
            <p className="text-sm lg:text-base xl:text-xl font-DM text-textBrown font-medium ">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised word which don't look even sligh
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing.
            </p>
            <ul>
                <li className="flex items-center gap-x-3" > <Image src={blueTick} alt="blueTick" className="aspect-square h-full" /> 01. Best market Research Policy.</li>
                <li className="flex items-center gap-x-3" > <Image src={blueTick} alt="blueTick" className="aspect-square h-full" /> 02. 24/7 Days super Support.</li>
            </ul>
          </div>
          <div className="btn ">
            <BtnCustom
              text="Read More"
              className=" py-2 sm:py-4 px-4 sm:px-8 bg-gradient-to-r text-white text-base sm:text-lg "
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
