import Layouts from "@/src/layouts/Layouts";

import CallToActionSection from "../components/sections/CallToAction";
import AwardsSection from "../components/sections/Awards";
import CountersSection from "../components/sections/Counters";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const About = ( props ) => {

  return (
    <Layouts>
      
      {/* about */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between mt-5 pt-5">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">درباره ما</span>
                  <h3 className="mil-appearance mil-mb-30 mt-5">{props.about.subtitle}</h3>
              </div>
              <div className="col-lg-6">
                  <div className="row">
                      <div className="col-lg-6">

                          <p className=" mil-appearance mil-mb-30">
                            {props.about.text1}
                          </p>

                      </div>
                      <div className="col-lg-6">

                          <p className="mil-appearance mil-mb-30">
                            {props.about.text2}
                          </p>

                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* about end */}

      {/* gallery */}
      <div className="container mil-content-frame mil-gallery-1 mil-p-0-90">
          <div className="row justify-content-between align-items-center mil-appearance">
            <Gallery>
              {props.about.images.map((item, key) => (
              <div className="col-md-6 col-xl-3 mil-mb-30" key={`gallery-iten-${key}`}>
                  <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={400}
                      height={800}
                  >
                  {({ ref, open }) => (
                  <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className={`mil-just-image${key % 2 == 0 ? " mil-image-vert" : " mil-image-square" } mil-icon-3-trigger`} style={{ "cursor" : "pointer" }}>
                      <img src={item.image} alt="img" className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                  </a>
                  )}
                  </Item>
              </div>
              ))}
            </Gallery>
          </div>
      </div>
      {/* gallery end */}
      
      <CountersSection counter={props.counter} />
      <AwardsSection award={props.award} />
      <CallToActionSection />
    </Layouts>
  );
};
export default About;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/about/")
  const about = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/about/award")
  const award = await res1.json()
  const res2 = await fetch("http://127.0.0.1:8000/about/counter")
  const counter = await res2.json()
  return {
      props : {
          about : about,
          award : award,
          counter : counter
      },
      revalidate : 10
  }
}

