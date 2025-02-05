import { useEffect } from 'react';

import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import { cursorSwiperAnimation } from "@/src/common/cursor";

const TestimonialSlider = ({test}) => {
  useEffect(() => {
    cursorSwiperAnimation();
  }, []);

  return (
    <div className="mil-reviews-section">
        <div className="container mil-relative mil-p-120-0">
            <div className="row justify-content-between align-items-center">
                <div className="col-lg-12 col-xl-3 mil-relative mil-mb-120">

                    <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">{test.title}</h3>
                    <h5 className="mil-appearance mil-mb-30">{test.subtitle}</h5>

                </div>
                <div className="col-lg-12 col-xl-9 mil-mb-120">

                          <Swiper
                            {...sliderProps.milReviSlider}
                            className="swiper-container mil-reviews-slider mil-appearance"
                          >
                            {test.tetsItems.map((item, key) => (
                            <SwiperSlide className="swiper-slide" key={`testimonial-slider-item-${key}`}>

                                {/* review */}
                                <div className="mil-review">
                                    <i className="fas fa-quote-right mil-mb-30"></i>
                                    <p className=" mil-mb-30">{item.text}</p>
                                    <div className="mil-user-details">
                                        <div className="mil-avatar mil-mr-15 ms-4">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div>
                                            <h6 className="mil-mb-5">{item.name}</h6>
                                            <div className="mil-text-sm mil-softened-40">{item.role}</div>
                                        </div>
                                    </div>
                                </div>
                                {/* review end */}

                            </SwiperSlide>
                            ))}
                          </Swiper>
            </div>

            {/* slider pagination */}
            <div className="mil-pagination-frame">
                <div className="mil-slider-pagination"></div>
            </div>

        </div>
        </div>
    </div>
  );
};
export default TestimonialSlider;
