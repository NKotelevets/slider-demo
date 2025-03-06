import { useEffect, useState, useLayoutEffect } from "react";
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
import { isMobile } from "react-device-detect";

export function SwiperComponent() {
  const [activeSlide, setActiveSlide] = useState(new Set());
  const defineAdditionalClassName = (index, withIndex) => {
    if (index == 0 || index == 6) {
      return withIndex ? `triangle_${index}` : "triangle";
    } else if (index == 2 || index == 4) {
      return withIndex ? `circle_${index}` : "circle";
    } else if (index == 3) {
      return withIndex ? `star_${index}` : "star";
    } else if (index == 1 || index == 5) {
      return withIndex ? `square_${index}` : "square";
    } else {
      return "";
    }
  };

  const definePaginationImage = (index) => {
    if (index == 0 || index == 6) {
      return `<svg
          id="Page_7"
          data-name="Page 7"
          width="9"
          height="9"
          viewBox="0 0 12 12"
        >
          <g id="Polygon_1" data-name="Polygon 1" fill="rgba(255,255,255,0.1)">
            <path d="M6,0l6,12H0Z" stroke="none" />
            <path
              d="M 6 2.236069679260254 L 1.618035316467285 11 L 10.38196468353271 11 L 6 2.236069679260254 M 6 0 L 12 12 L 0 12 L 6 0 Z"
              stroke="none"
              fill="rgba(147,149,151,0.5)"
            />
          </g>
        </svg>`;
    } else if (index == 2 || index == 4) {
      return `<svg
          id="Page_5"
          data-name="Page 5"
          width="9"
          height="9"
          viewBox="0 0 12 12"
        >
          <g
            id="Dot_1"
            data-name="Dot 1"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(147,149,151,0.5)"
            stroke-width="1"
          >
            <circle cx="6" cy="6" r="6" stroke="none" />
            <circle cx="6" cy="6" r="5.5" fill="none" />
          </g>
        </svg>`;
    } else if (index == 3) {
      return `<svg width="11" height="11" viewBox="0 0 14.507 14.563">
          <g id="Page_4" data-name="Page 4" transform="translate(1.268 1.367)">
            <path
              id="Path_31"
              data-name="Path 31"
              d="M505.46,1539.69l1.635-4.444,1.859,4.444h4.158l-3.076,2.966,1.31,4.59-4.251-2.822-4.036,2.822,1.229-4.59-3.176-2.966Z"
              transform="translate(-501.113 -1535.246)"
              fill="rgba(255,255,255,0.1)"
              stroke="rgba(147,149,151,0.5)"
              stroke-width="1"
            />
          </g>
        </svg>`;
    } else if (index == 1 || index == 5) {
      return `
        <svg
          id="Page_6"
          data-name="Page 6"
          width="8"
          height="8"
          viewBox="0 0 11 11"
        >
          <g
            id="Rectangle_2"
            data-name="Rectangle 2"
            fill="rgba(255,255,255,0.1)"
            stroke="rgba(147,149,151,0.5)"
            stroke-width="1"
          >
            <rect width="11" height="11" stroke="none" />
            <rect x="0.5" y="0.5" width="10" height="10" fill="none" />
          </g>
        </svg>
      `;
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
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width, height] = useWindowSize();

  useEffect(() => {
    if (isMobile || height > width) {
      var element = document.getElementById("root");
      element.classList.remove("isWeb");
    } else if (!isMobile && height < width) {
      var element = document.getElementById("root");
      element.classList.add("isWeb");
    }
  }, [isMobile, width, height]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      const test = definePaginationImage(index);
      console.log(test);
      return (
        '<span class="' +
        className +
        " " +
        defineAdditionalClassName(index, false) +
        '" ' +
        'data-value="' +
        defineAdditionalClassName(index, true) +
        '">' +
        test +
        "</span>"
      );
    },
  };

  const handleSlideChange = (swiper) => {
    !isMobile &&
      setActiveSlide((prev) => new Set(prev).add(swiper.previousIndex));
  };

  return (
    <div className="wrapper wrapper-mob">
      <Swiper
        onSlideChange={handleSlideChange}
        pagination={pagination}
        navigation={{
          nextEl: ".next",
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={false}
        slidesPerView={1}
        className="mySwiper"
        effect={"fade"}
        loop={true}
        modules={[Pagination, EffectFade, Keyboard, Mousewheel, Navigation]}
        speed="1000"
        allowTouchMove={isMobile ? true : false}
      >
        {isMobile && (
          <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
            <div className="slide-wrapper8">
              <div className="slide-content"></div>
            </div>
          </SwiperSlide>
        )}
        <SwiperSlide className={`swiper-slide slide1 ${isMobile && "next"}`}>
          <div className="slide-wrapper1">
            <div
              className={`slide1-bg-1 slide-bg ${
                activeSlide.has(0) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide1-bg-2 slide-bg ${
                activeSlide.has(0) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide1-bg-3 slide-bg ${
                activeSlide.has(0) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide1-bg-4 slide-bg ${
                activeSlide.has(0) && "no-animation"
              }`}
            ></div>

            <div className="slide-content">
              {!isMobile ? (
                <div className="text-wrapper">
                  <p className="slide-text first-slide-text">
                    LeftFront is a group of expert executives. <br />
                    pioneers, operators, academics, scientists + engineers.{" "}
                    <br />
                    artists + filmmakers, writers, designers, creators. <br />{" "}
                    you may know us by our past work.
                  </p>
                  <p className="slide-text">
                    our North Star is imagination. <br />
                    because the genius in you stimulates the genius in us.
                  </p>
                </div>
              ) : (
                <div className="text-wrapper">
                  <p className="slide-text first-slide-text">
                    LeftFront is
                    <br /> a group of expert executives.
                    <br /> pioneers, operators, academics, <br />
                    scientists + engineers.
                    <br /> artists + filmmakers, writers,
                    <br /> designers, creators.
                  </p>
                  <p className="slide-text">
                    our North Star is imagination. <br />
                    because the genius in you
                    <br />
                    stimulates the genius in us.
                  </p>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide slide2 ${isMobile && "next"}`}>
          <div className="slide-wrapper2">
            <div
              className={`slide2-bg-1 slide-bg  ${
                activeSlide.has(1) && "no-animation"
              }`}
            ></div>

            {!isMobile ? (
              <div className="slide-content show-for-web">
                <p>
                  we work on projects that change things. <br />
                  mainly, these three:
                  <br />
                  revenue agents + independent studio + gathering place
                </p>
              </div>
            ) : (
              <div className="slide-content show-for-web">
                <p>
                  we work on <br />
                  projects that change things. <br />
                  mainly, these three:
                </p>
                <p>
                  revenue agents
                  <br /> + <br />
                  independent studio
                  <br /> +<br /> gathering place
                </p>
              </div>
            )}
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
          <div className="slide-wrapper3">
            <div
              className={`slide3-bg-1 slide-bg ${
                activeSlide.has(2) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide3-bg-2 slide-bg ${
                activeSlide.has(2) && "no-animation"
              }`}
            ></div>
            <div className="slide-content show-for-web">
              <div className="slide-content-slide3 slide-content-slide3-web">
                <p className="slide3-description">
                  as revenue agents,
                  <br /> we carry out <br />
                  bespoke transformational
                  <br />
                  business assignments.
                </p>
                <p className="slide3-description">
                  from countless start-ups, <br />
                  to legacy enterprises
                  <br /> such as{" "}
                  <span className="slide3-description-italic">
                    The New York Times
                  </span>
                  , <br />
                  and iconic talent
                  <br /> like Annie Leibovitz.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
          <div className="slide-wrapper4">
            <div
              className={`slide4-bg-1 slide-bg ${
                activeSlide.has(3) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide4-bg-2 slide-bg ${
                activeSlide.has(3) && "no-animation"
              }`}
            ></div>

            <div className="slide-content show-for-web">
              <p>
                we underwrite
                <br /> insert society here.
              </p>
              <p>
                an independent studio <br />
                that offers representation + capital
                <br /> for young people <br />
                to develop
                <br /> their own ideas.
              </p>
              <p>monologue. dialogue. campaign.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
          <div className="slide-wrapper5">
            <div
              className={`slide5-bg-1 slide-bg ${
                activeSlide.has(4) && "no-animation"
              }`}
            ></div>
            <div
              className={`slide5-bg-2 slide-bg ${
                activeSlide.has(4) && "no-animation"
              }`}
            ></div>
            <div className="slide-content show-for-web">
              <p>
                we run <br />a gathering place <br />
                called RIFF.
              </p>
              <p>
                radical ideas for future
                <br /> + <br />
                songlines by <br />
                inspired professionals
                <br />
                who happen to live <br />
                somewhere
                <br /> in california.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
          <div className="slide-wrapper6">
            <div
              className={`slide6-bg-1 slide-bg ${
                activeSlide.has(5) && "no-animation"
              }`}
            ></div>
            {isMobile && (
              <>
                <div
                  className={`slide6-bg-2 slide-bg ${
                    activeSlide.has(5) && "no-animation"
                  }`}
                ></div>
                <div
                  className={`slide6-bg-3 slide-bg ${
                    activeSlide.has(5) && "no-animation"
                  }`}
                ></div>
              </>
            )}
            <div className="slide-content show-for-web">
              <p>
                feel free to <br />
                call 818-963–2116
              </p>
              {isMobile ? (
                <>
                  <p>
                    it will be neither <br />
                    defined, <br />
                    nor designed.
                    <br />
                  </p>
                  <p>
                    sometimes <br />
                    jaw-dropping. <br />
                    sometimes simple. <br />
                    kind of like
                    <br />
                    surfing for the mind.
                  </p>
                </>
              ) : (
                <p>
                  it will be neither <br />
                  defined, <br />
                  nor designed.
                  <br /> sometimes <br />
                  jaw-dropping. <br />
                  sometimes simple. <br />
                  kind of like
                  <br />
                  surfing for the mind.
                </p>
              )}
            </div>
          </div>
        </SwiperSlide>
        {!isMobile && (
          <SwiperSlide className={`swiper-slide ${isMobile && "next"}`}>
            <div className="slide-wrapper8">
              <div className="slide-content"></div>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
