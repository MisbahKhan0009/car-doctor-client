import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price For Car <br /> Servicing
        </h1>
      </div>

      <div className="absolute flex justify-end w-2/5 transform -translate-y-1/2 left-24 top-1/2">
        <p className="text-white text-xl mt-12">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute  flex justify-start w-2/5 transform -translate-y-1/2 left-24 top-3/4">
        <button className="btn font-semibold btn-error text-white mr-5">
          Discover More
        </button>
        <button className="btn btn-default font-semibold">
          Latest Project
        </button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle text-xl font-light">
          <FaArrowLeft />
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle text-xl font-light ms-3"
        >
          <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
