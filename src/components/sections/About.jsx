import Link from "next/link";

const AboutSection = ({about}) => {
    return (
      <div className="container mil-p-120-0">
          <div className="row justify-content-between align-items-center">
              <div className="mil-12 col-xl-5 mil-mb-120">

                  <h3 className="mil-link mil-softened-60 mil-appearance mil-mb-30">درباره ما</h3>
                  <h3 className="mil-appearance mil-mb-30">{about.subtitle}</h3>
                  <p className="mil-appearance mil-mb-30">{about.description}</p>

                  {/* buttons */}
                  <div className="mil-appearance">
                      <Link href='/about' className="mil-button mil-button-lg mil-scale-down-trigger mil-buttons-space">
                        <span>بیشتر بدانید</span>
                     </Link>

                  </div>
                  {/* buttons end */}

              </div>
              <div className="mil-12 col-xl-6 mil-mb-120">

                  {/* collage */}
                  <div className="mil-collage-1">
                      <div className="mil-circle-text-position" style={{bottom: '62%', left: '-75px'}}>
                          <div className="mil-circle-text mil-rotate mil-accent-inside" data-value="360">
                              <svg 
                                version="1.1" 
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" 
                                x="0px" 
                                y="0px" 
                                viewBox="0 0 300 300" 
                                enableBackground="new 0 0 300 300"
                                xmlSpace="preserve">
                                  <defs>
                                      <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                                  </defs>
                                  <circle cx="150" cy="100" r="75" fill="none" />
                                  <g>
                                      <use xlinkHref="#circlePath" fill="none" />
                                      
                                  </g>
                              </svg>
                          </div>
                      </div>
                      <div className="mil-image-1 mil-appearance">
                          <div className="mil-just-image mil-image-square">
                              {/* back image */}
                              <img 
                                src={about.back_img} 
                                alt={about.title} 
                                className="mil-scale-img" 
                                data-value-1="1" 
                                data-value-2="1.2" 
                              />
                          </div>
                      </div>
                      <div className="mil-image-2 mil-appearance">
                          <div className="mil-just-image">
                              {/* front image */}
                              <img 
                                src={about.front_img} 
                                alt={about.title}
                                style={{'objectPosition': 'right'}}
                              />
                          </div>
                      </div>
                  </div>
                  {/* collage end */}

              </div>
          </div>
      </div>        
    );
};

export default AboutSection;