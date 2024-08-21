import { useEffect } from "react";
import { countersAnimation } from "@/src/common/counters";

const AboutTwoSection = ({about2}) => {
  useEffect(() => {
    countersAnimation();
  }, []);

  return (
    <div className="container mil-p-120-0">

        <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="mil-12 col-xl-6 mil-mb-120">

                <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">{about2.title}</h3>
                <h3 className="mil-appearance mil-mb-30" dangerouslySetInnerHTML={{__html : about2.subtitle}} />
                <p className="mil-appearance mil-mb-30">{about2.description}</p>

                {/* counters */}
                <div className="mil-flex">
                    {about2.counter.map((item, key) => (
                    <div key={`number-item-${key}`} className="mil-mr-30">
                        <p className="mil-link mil-softened-60 mil-appearance">{item.label}</p>
                        <div className="mil-h2 mil-bold mil-appearance"><span className="mil-counter" data-number={item.value}>0</span><span className="mil-accent">+</span></div>
                    </div>
                    ))}
                </div>
                {/* counters end */}

            </div>
            <div className="mil-12 col-xl-5 mil-mb-120">

                {/* collage */}
                <div className="mil-collage-2 mil-appearance">
                    <div className="mil-just-image mil-image-square">
                        <img src={about2.image} alt={about2.title} className="mil-scale-img" data-value-1="1" data-value-2="1.2" />
                    </div>
                </div>
                {/* collage end */}

            </div>
        </div>

    </div>
  );
};

export default AboutTwoSection;