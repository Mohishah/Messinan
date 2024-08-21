import Layouts from "@layouts/Layouts";

import { useEffect } from "react";

import { accordion } from "../../common/utilits";

import Link from "next/link";

import CallToActionSection from "@components/sections/CallToAction";

const ServiceDetail = ( { serviceData } ) => {
  


  useEffect(() => {
    accordion();
  }, []);

  return (
    <Layouts>

      {/* service */}
      <div className="container mil-content-frame mil-appearance mil-p-120-120">

            <div className="row justify-content-between mt-5 pt-5">
                <div className="col-lg-4 mil-mb-120">
                    <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">خدمات ما</span>
                    <h3 className="mil-appearance mil-mb-30">{serviceData.title}</h3>

                    <p className="mil-appearance mil-mb-30 mt-5">{serviceData.description}</p>

                    <Link href="/services" className="mil-button mil-button-lg mil-scale-down-trigger mil-accent-trigger mt-5">
                        <span>مشاهده دیگر خدمات</span>
                    </Link>
                </div>
                <div className="col-lg-6">
                    <div className="mil-accordion">
                        
                        {serviceData.items.map((item, key) => (

                        <div className="mil-accordion-group mil-appearance" key={`service-list-${key}`}>
                            <div className="mil-accordion-menu">
                                <h6>{item.label}</h6>

                                <div className="mil-accordion-plus">+</div>
                                <div className="mil-accordion-minus">-</div>
                            </div>
                            <div className="mil-accordion-content" dangerouslySetInnerHTML={{__html : item.value}} />
                        </div>

                        ))}

                    </div>
                </div>
            </div>
      </div>
      {/* service end */}
      

      

      <CallToActionSection />
      
    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/service')
  const post = await res.json()
  const paths = post.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: "blocking"
  }
}

export async function getStaticProps(context){
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/service/${params.id}`)
  const serviceData = await res.json()
  return {
      props : {
        serviceData : serviceData,
      },
      revalidate : 10
  }
}