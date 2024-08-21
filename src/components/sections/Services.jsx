import Link from "next/link";

const ServicesSection = ({service}) => {
  return (
    <div className="mil-services-1 mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover-el">

        {/* background image */}
        <div className="mil-just-image mil-section-bg mil-scale-img" data-value-1="1" data-value-2="1.1">
            <img src={service[0].image} alt="image" />
        </div>
        <div className="mil-gradient-overlay"></div>

        <div className="row m-0">
            {service.map((item, key) => (
            <div className="col-12 col-sm-6 col-lg-3 p-0" key={`services-item-${key}`}>

                {/* service card */}
                <div className="mil-card-1 mil-complex-hover mil-icon-2-trigger mil-accent-trigger mil-pseudo-hover">
                    <div className="mil-cover mil-long"></div>
                    <Link href={`/services/${item.id}`} className="mil-overlay mil-inside mil-between">
                        <div className="mil-top-hidden mil-flex justify-content-between">
                            <div className="mil-icon mil-accent">
                                {/* icon */}
                                <img src={item.image} alt={item.title} />
                            </div>
                            {/* number */}
                            <div className="mil-text-lg mil-softened-40">{item.id}</div>
                        </div>
                        <div className="mil-bottom-part-hidden">
                            {/* text */}
                            <h5 className="mil-light mil-mb-20">{item.title}</h5>
                            <p className="mil-hidden-part mil-softened-40">{item.short}</p>
                        </div>
                    </Link>
                </div>
                {/* service card end */}

            </div>
            ))}
        </div>

    </div>
  );
};

export default ServicesSection;