import React from "react";
import { Carousel } from "flowbite-react";
import Img1 from "../../assets/img/flowbiteimg1.png";
import Img2 from "../../assets/img/flowbiteimg2.png";
import Img3 from "../../assets/img/flowbiteimg3.png";
import Img4 from "../../assets/img/flowbiteimg4.png";

const CarouselShrishti = () => {
  return (
    <div className="h-[85vh] ml-52 md:h-[85vh] p-3 border-2 border-zinc-300 rounded-lg" style={{width:"calc(100% - 260px)", marginTop:"-40px"}}>
      <Carousel pauseOnHover>
        <img src={Img1} alt="..." />
        <img src={Img2} alt="..." />
        <img src={Img3} alt="..." />
        <img src={Img4} alt="..." />
      </Carousel>
    </div>
  );
};

export default CarouselShrishti;
