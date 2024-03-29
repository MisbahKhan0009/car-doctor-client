import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./BannerItem.css";
import BannerItem from "./BannerItem";
import img1 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/1.jpg";
import img2 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/2.jpg";
import img3 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/3.jpg";
import img4 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/4.jpg";
import img5 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/5.jpg";
import img6 from "/Users/misbah/Documents/PH/WD Projects/car-doctor-client/src/assets/images/banner/6.jpg";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];
const Banner = () => {
  return (
    <div className="carousel">
      {bannerData.map((slide) => (
        <BannerItem key={slide.id} slide={slide} />
      ))}

      {/* <BannerItem image={img1} /> */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src="/src/assets/images/banner/2.jpg" className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle text-xl font-light">
            <FaArrowLeft />
          </a>
          <a href="#slide3" className="btn btn-circle text-xl font-light ms-3">
            <FaArrowRight />
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
