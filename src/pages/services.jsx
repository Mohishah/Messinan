import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

import Link from "next/link";

const Services = ({service,header}) => {
  
  return (
    <Layouts>

      {/* services */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between mt-5 pt-5">
              <div className="col-lg-4 mil-mb-120">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">خدمات ما</span>
                  <h3 className="mil-appearance mil-mb-30 mt-5">{header.subtitle}</h3>

                  <p className="mil-appearance mil-mb-30 mt-5">{header.description1}</p>
                  <p className="mil-appearance mil-mb-30">{header.description2}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
              <div className="col-lg-7">
                  <div className="row">
                      {service.map((item, key) => (
                      <div className="col-xl-6 col-lg-12" key={`services-item-${key}`}>

                          {/* service card */}
                          <Link href={`/services/${item.id}`} className="mil-service-card mil-appearance mil-icon-2-trigger mil-mb-30">
                              <div className="mil-card-content">
                                  {/* icon */}
                                  <img src={item.image} alt={item.title} className="mil-card-icon" />
                                  <div>
                                      {/* text */}
                                      <h5 className="mil-mb-10">{item.title}</h5>
                                      <p className="mil-softened-40">{item.short}</p>
                                  </div>
                              </div>
                          </Link>
                          {/* service card end */}

                      </div>
                      ))}                      
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">

              </div>
          </div>
      </div>
      {/* services end */}
      
      <CallToActionSection />
      
    </Layouts>
  );
};
export default Services;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/service")
  const service = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/service/header")
  const header = await res1.json()
  return {
      props : {
        service : service,
        header : header,
      },
      revalidate : 10
  }
}