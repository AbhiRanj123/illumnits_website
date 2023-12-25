import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import data from "../../../data/carousel.json";
import { Icon } from "@iconify/react";

import heroBackground from "../../../assets/images/Hero_bg.svg";

import "./Hero.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-bg">
        <img className="Hero-bg_img" src={heroBackground} alt="Background" />
        <div className="Hero-side-box"></div>
      </div>
      <div className="carousel-box">
        <div className="title">
          <span className="title-Illumi">ILLUMI</span>NITS
        </div>
        <div className="carousel">
          <Swiper
            style={{
              "--swiper-pagination-bullet-inactive-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="Swiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.image} alt={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="carousel-tags">
          <ul>
            <li>Literary</li>
            <li>Publication</li>
            <li>Fine Arts</li>
          </ul>
        </div>
      </div>
      <div className="LPFA">LPFA</div>
      <div className="social-handles">
        <a className="icon" rel="noreferrer" href="https://www.facebook.com/Illuminits?mibextid=kFxxJD" target="_blank">
          <Icon width="32" color="white" icon="et:facebook" />
        </a>
        <a className="icon" rel="noreferrer" href="https://www.instagram.com/illuminits?igsh=YTQwZjQ0NmI0OA==" target="_blank">
          <Icon width="32" color="white" icon="fe:instagram" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
