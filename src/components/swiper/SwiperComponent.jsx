import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Keyboard, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import icon1 from "../../assets/web/tr-1.png";
import icon2 from "../../assets/web/tr-2.png";
import icon3 from "../../assets/web/tr-3.png";
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
    <div className="wrapper">
      <Swiper
        pagination={pagination}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        slidesPerView={1}
        className="mySwiper"
        effect={"fade"}
        modules={[Pagination, EffectFade, Keyboard, Mousewheel]}
      >
        <SwiperSlide className="swiper-slide slide1">
          <div className="slide-wrapper1">
            <div className="slide-content">
              <p>Hello.</p>
              <p>
                {" "}
                LeftFront is a <strong>societal accelerator.</strong>
              </p>
              <p>
                We shape the future of our economy and culture in real time.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide slide2">
          <div className="slide-wrapper2">
            {" "}
            <div className="slide-content">
              <p>
                {" "}
                Established by a group of expert executives with a remarkable
                record as pioneers, operators, creators, artists and academics,
                LeftFront undertakes Daedalian problems with a rare level of
                proficiency, integrity + efficacy.{" "}
              </p>
              <p>
                {" "}
                Our North Star is <strong>resonance</strong>. Because the genius
                in you stimulates the genius in us.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper3">
            <div className="slide-content ">
              {" "}
              <div className="slide-content-slide3">
                <span>We are</span>
                <div className="slide3-info-wrapper">
                  <div className="slide3-icon-wrapper">
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
                Undertaking all 3 makes us better at each one of them.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper4">
            <div className="slide-content">
              <p>Publishing House.</p>
              <p>
                With the help of creative minds around the globe, we fund Insert
                Society Here (ISH).
              </p>
              <p>
                A portal for authentic expression,
                <br /> ISH broadcasts various forms of content created by teens.
                <br /> All teens, maneuvering and understanding their evolving
                world.
              </p>
              <p>
                <strong>For, of, about, by… their generation.</strong> <br />
                Monologue. Dialogue. Campaign.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper5">
            {" "}
            <div className="slide-content">
              <p>Value Engine.</p>
              <p>
                {" "}
                We are a group of <strong>difference-makers,</strong>{" "}
                high-performing individuals who have built exceptionally
                successful companies, launched products used by millions, and
                along the way created billions in commercial value.
              </p>
              <p>
                Our clients range from countless start-ups to widely known
                brands such as <i>The New York Times,</i> Apple and creative
                work by Annie Leibovitz.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper6">
            <div className="slide-content">
              <p>Community.</p>
              <p>
                We formed and manage RIFF, Radical Imagination
                <br /> For Future, a members only clubhouse for the next
                generation of creative, media, and technology executives
                <br /> (who happen to live
                <strong> somewhere in California</strong>).
              </p>
              <p>
                Together, we put forward a narrative of horizons.
                <br /> Embracing complex subjects, contextualized ideas. <br />
                Giving rise to a life, rich with possibility and play.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper7">
            <div className="slide-content">
              <p>
                Working with LeftFront is{" "}
                <strong> surfing for the mind.</strong> <br />
                Sometimes jaw-dropping. Sometimes simple. <br />
                Always honest.{" "}
              </p>
              <p>
                Finally, yet importantly: we are about the human touch. Feel
                free to connect.
                <br /> +1–818–963–2116
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="slide-wrapper8">
            <div className="slide-content"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
