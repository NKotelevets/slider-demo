import {useEffect, useState, useLayoutEffect} from 'react'
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectFade,
  Keyboard,
  Mousewheel,
  Navigation,
} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import icon1 from "../../assets/web/tr-1.png";
import icon2 from "../../assets/web/tr-2.png";
import icon3 from "../../assets/web/tr-3.png";
import { isMobile } from 'react-device-detect';

export function SwiperComponent() {
  const defineAdditionalClassName = (index) => {
    if (index == 0 || index == 4) {
      return "triangle";
    } else if (index == 1 || index == 5) {
      return "circle";
    } else if (index == 2 || index == 6) {
      return "star";
    } else if (index == 3 || index == 7) {
      return "square";
    } else {
      return "";
    }
  };

  function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const [width, height] = useWindowSize();

  useEffect(()=>{
if (isMobile || height > width) {
  var element = document.getElementById("root");
  element.classList.remove("isWeb");
} else if (!isMobile && height < width) {
  var element = document.getElementById("root");
  element.classList.add("isWeb");
}

},[isMobile, width, height])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        " " +
        defineAdditionalClassName(index) +
        '" ' +
        'data-value="' +
        defineAdditionalClassName(index) +
        '">' +
        "</span>"
      );
    },
  };
  return (
    <div className="wrapper wrapper-mob">
      <Swiper
        pagination={pagination}
        navigation={{
          nextEl: ".next",
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        slidesPerView={1}
        className="mySwiper"
        effect={"fade"}
        loop={true}
        modules={[Pagination, EffectFade, Keyboard, Mousewheel, Navigation]}
        speed="1000"
        allowTouchMove={isMobile ? true : false}
      >
        <SwiperSlide className={`swiper-slide slide1 ${isMobile && 'next'}`}>
          <div className="slide-wrapper1">
            <div className="slide1-bg-middle slide-bg"></div>
            <div className="slide1-bg-finish slide-bg"></div>
            <div className="slide-content">
              <p className="slide-title">Hello.</p>
              <div className="text-wrapper">
                <p className="slide-text first-slide-text">
                  {" "}
                  LeftFront is a{" "}
                  <span className="font-medium">societal accelerator.</span>
                </p>
                <p className="slide-text">
                  We shape the future of our economy{" "}
                  <span className="show-for-web">and</span>{" "}
                  <span className="show-for-mob">+ </span>culture <br />
                  in real time.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide slide2 ${isMobile && 'next'}`}>
          <div className="slide-wrapper2">
            <div className="slide2-bg-finish slide-bg"></div>{" "}
            <div className="slide-content show-for-web">
              <p>
                {" "}
                Established by a group of expert executives with a <br />{" "}
                remarkable record as pioneers, operators, creators,
                <br /> artists and academics, LeftFront undertakes <br />{" "}
                Daedalian problems with a rare level of proficiency,
                <br /> integrity + efficacy.{" "}
              </p>
              <p>
                {" "}
                Our North Star is <span className="font-medium">resonance</span>
                .<br /> Because the genius in you stimulates the genius in us.
              </p>
            </div>
            <div className="slide-content show-for-mob">
              <p>
                {" "}
                Established by a group of
                <br /> expert executives <br />
                with a remarkable record as pioneers,
                <br /> operators, creators, artists and academics, <br />
                LeftFront undertakes Daedalian
                <br /> problems with a rare level of
                <br /> proficiency, integrity + efficacy.
              </p>
              <p>
                Our North Star is <span className="font-medium">resonance</span>
                .<br /> Because the genius in you stimulates
                <br /> the genius in us.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper3">
            <div className="slide3-bg-finish slide-bg"></div>
            <div className="slide-content show-for-web">
              {" "}
              <div className="slide-content-slide3 slide-content-slide3-web">
                <span className="slide3-info">We are</span>
                <div className="slide3-info-wrapper">
                  <div className="slide3-icon-wrapper ">
                    <img src={icon1} alt="Visual element!" />
                    <span>publishing house</span>
                  </div>
                  <div className="slide3-icon-wrapper">
                    <img src={icon2} alt="Visual element!" />
                    <span>value engine</span>
                  </div>
                  <div className="slide3-icon-wrapper">
                    <img src={icon3} alt="Visual element!" />
                    <span>community.</span>
                  </div>
                </div>
              </div>
              <p className="slide3-description">
                Undertaking all 3 <br />
                makes us better <br />
                at each one of them.
              </p>
            </div>
            <div className="slide-content show-for-mob">
              {" "}
              <div className="slide-content-slide3">
                <span>We are</span>
                <div className="slide3-info-wrapper">
                  <div className="slide3-icon-wrapper ">
                    <img src={icon1} alt="Visual element!" />
                    <span>publishing house</span>
                  </div>
                  <div className="slide3-icon-wrapper">
                    <img src={icon2} alt="Visual element!" />
                    <span>value engine</span>
                  </div>
                  <div className="slide3-icon-wrapper">
                    <img src={icon3} alt="Visual element!" />
                    <span>community.</span>
                  </div>
                </div>
              </div>
              <p className="slide3-description show-for-mob">
                Undertaking all 3 makes us better <br />
                at each one of them.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper4">
            <div className="slide4-bg-finish slide-bg"></div>
            <div className="slide-content show-for-web">
              <p>Publishing House.</p>
              <p>
                With the help of creative minds around the globe,
                <br /> we fund Insert Society Here (ISH).
              </p>
              <p>
                A portal for authentic expression,
                <br /> ISH broadcasts various forms of content <br /> created by
                teens.
                <br /> All teens, maneuvering and understanding
                <br /> their evolving world.
              </p>
              <p>
                <span className="font-medium">
                  For, of, about, by… their generation.
                </span>{" "}
                <br />
                Monologue. Dialogue. Campaign.
              </p>
            </div>
            <div className="slide-content show-for-mob">
              <p>Publishing House.</p>
              <p>
                With the help of creative minds
                <br /> around the globe, we fund <br />
                Insert Society Here (ISH).
              </p>
              <p>
                A portal for authentic expression,
                <br /> ISH broadcasts various forms of <br />
                content <span className="font-medium">created by teens.</span>
                <br /> All teens, maneuvering + understanding
                <br /> their evolving world.
              </p>
              <p>
                For, of, about, by… their generation.
                <br />
                Monologue. Dialogue. Campaign.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper5">
            <div className="slide5-bg-finish slide-bg"></div>{" "}
            <div className="slide-content show-for-web">
              <p>Value Engine.</p>
              <p>
                {" "}
                We are a group of{" "}
                <span className="font-medium">difference-makers, </span>
                high-
                <br />
                performing individuals who have built exceptionally
                <br />
                successful companies, launched products used by
                <br /> millions, and along the way created
                <br /> billions in commercial value.
              </p>
              <p>
                Our clients range from countless start-ups
                <br /> to widely known brands such as{" "}
                <span className="italic-font">
                  The New York <br />
                  Times,
                </span>{" "}
                Apple and creative work by Annie Leibovitz.
              </p>
            </div>
            <div className="slide-content show-for-mob">
              <p>Value Engine.</p>
              <p>
                {" "}
                We are a group of{" "}
                <span className="font-medium">difference-makers, </span> <br />
                high-performing individuals <br /> who have built exceptionally
                successful <br />
                companies, launched products used by
                <br /> millions, and along the way created
                <br /> billions in commercial value.
              </p>
              <p>
                Our clients range from countless
                <br /> start-ups to widely known brands
                <br /> such as{" "}
                <span className="italic-font">The New York Times,</span> <br />
                Apple and creative work
                <br /> by Annie Leibovitz.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper6">
            <div className="slide6-bg-finish slide-bg"></div>
            <div className="slide-content show-for-web">
              <p>Community.</p>
              <p>
                We formed and manage RIFF, Radical Imagination
                <br /> For Future, a members only clubhouse for the next
                <br />
                generation of creative, media, and technology executives
                <br /> (who happen to live
                <span className="font-medium"> somewhere in California</span>).
              </p>
              <p>
                Together, we put forward a narrative of horizons.
                <br /> Embracing complex subjects, contextualized ideas. <br />
                Giving rise to a life, rich with possibility and play.
              </p>
            </div>
            <div className="slide-content show-for-mob">
              <p>Community.</p>
              <p>
                We formed and manage RIFF,
                <br /> Radical Imagination For Future,
                <br /> a members only clubhouse for the <br />
                next generation of creative,
                <br /> media, and technology executives
                <br /> (who happen to live
                <span className="font-medium"> somewhere in California</span>).
              </p>
              <p>
                Together, we put forward
                <br /> a narrative of horizons.
                <br /> Embracing complex subjects,
                <br /> contextualized ideas. <br />
                Giving rise to a life,
                <br /> rich with possibility + play.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper7">
            <div className="slide7-bg-finish slide-bg"></div>
            <div className="slide-content show-for-web">
              <p>
                Working with LeftFront is{" "}
                <span className="font-medium"> surfing for the mind.</span>{" "}
                <br />
                Sometimes jaw-dropping. Sometimes simple. <br />
                Always honest.{" "}
              </p>
              <p>
                Finally, yet importantly: we are about the human
                <br /> touch. Feel free to connect.
                <br /> +1–818–963–2116
              </p>
            </div>
            <div className="slide-content show-for-mob">
              <p>
                Working with LeftFront is
                <br />
                <span className="font-medium"> surfing for the mind.</span>{" "}
                <br />
                Sometimes jaw-dropping.
                <br /> Sometimes simple. <br />
                Always honest.{" "}
              </p>
              <p>
                Feel free to connect.
                <br /> +1–818–963–2116
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && 'next'}`}>
          <div className="slide-wrapper8">
            <div className="slide-content"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
