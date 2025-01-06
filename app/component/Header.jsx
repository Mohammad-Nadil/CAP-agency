import React from "react";
import Image from "next/image";
import Container from "./layer/Container";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import facebook from "../assets/facebook.png";
import facebookOFF from "../assets/facebookOFF.png";
import tweet from "../assets/tweet.png";
import tweetOFF from "../assets/tweetOFF.png";
import linkdin from "../assets/linkdin.png";
import linkdinOFF from "../assets/linkdinOFF.png";
import youtube from "../assets/youtube.png";
import youtubeOFF from "../assets/youtubeOFF.png";

const Header = () => {
  return (
    <div className=" relative after:absolute after:top-0 after:right-1/2 after:w-full after:h-full after:z-[-1]  after:bg-primary">
      <Container className=" flex justify-between items-center text-sm leading-6 text-white bg-primary py-2 rounded-full ">
        <div className="left flex gap-x-7">
          <p className="welcome">
            <a href="" className="block">
              Welcome to Ortencey Digital Market Agency
            </a>
          </p>
          <div className=" w-0.5 bg-[#708FFF]"></div>
          <p className="number flex items-center gap-x-2">
            <Image className="w-4 " src={phone} alt="phone icon" />
            <a href="" className="block">
              +88 ( 5548 ) 6548
            </a>
          </p>
          <div className=" w-0.5 bg-[#708FFF]"></div>
          <p className="mail flex items-center gap-x-3">
            <Image className="w-5" src={mail} alt="mail icon" />
            <a href="" className="block">
              infoyour@gmail.com
            </a>
          </p>
        </div>
        <div className="right">
          <div className="language"></div>
          <div className="links flex gap-x-4">
            <a href="" className="block relative">
              <Image className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300" src={facebook} />
              <Image className="h-4" src={facebookOFF} />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300" src={linkdin} />
              <Image className="h-4" src={linkdinOFF} />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300" src={tweet} />
              <Image className="h-4" src={tweetOFF} />
            </a>
            <div className=" w-0.5 bg-[#708FFF]"></div>
            <a href="" className="block relative">
              <Image className="h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-0 hover:opacity-100 duration-300" src={youtube} />
              <Image className="h-4" src={youtubeOFF} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
