import Link from "next/link";
import appData from "@data/app.json";

const DefaultFooter = ( { bg, instagram, extraClass } ) => {
  return (
    <footer className="mil-footer-1 mil-light-trigger">
        <div className="mil-image-frame">
            <img 
              src={bg ? bg : appData.footer.bg_image}
              alt="img" 
              className="mil-scale-img" 
              data-value-1="1" 
              data-value-2="1.2" 
              style={{filter: 'grayscale(100%)'}}
            />
            <div className="mil-overay"></div>
        </div>
        <div className="container">
            <div className="mil-footer-content mil-p-120-90">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-xl-4 mil-mb-30">
                        <h4 className="mil-light mil-mb-30"> 
                            <span dangerouslySetInnerHTML={{__html : 'شرکت مسینان'}} />
                        </h4>
                        <p className="mil-mb-30">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط</p>
                    </div>
                    <div className="col-lg-12 col-xl-8">
                        <div className="row justify-content-xl-end">
                            <div className="col-lg-4 col-xl-3 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">منو</h6>
                                {/* menu list */}
                                <ul>
                                    {appData.footer.menu.map((item, key) => (
                                    <li key={`footer-menu-item-${key}`}>
                                        <Link href={item.link} className="mil-link mil-link-hover mil-softened-50 mil-mb-15">{item.label}</Link>
                                    </li>
                                    ))}
                                </ul>
                                {/* menu list end */}
                            </div>
                            <div className="col-lg-4 col-xl-3 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">تخصصی ها</h6>
                                {/* useful links list */}
                                <ul>
                                    {appData.footer.links.map((item, key) => (
                                    <li key={`footer-links-item-${key}`}>
                                        <a href={item.link} className="mil-link mil-link-hover mil-softened-50 mil-light mil-mb-15">{item.label}</a>
                                    </li>
                                    ))}
                                </ul>
                                {/* useful links list end */}
                            </div>
                            <div className="col-lg-4 col-xl-4 mil-mb-30">
                                <h6 className="mil-light mil-mb-30">ارتباط با ما</h6>
                                {/* email */}
                                <a href={`mailto:${appData.contacts.email}`} className="mil-link mil-link-hover mil-accent mil-hidden-trigger mil-mb-30">{appData.contacts.email}</a>
                                {/* phone */}
                                <p className="mil-light mil-text-xl mil-bold mil-mb-30">{appData.contacts.tel}</p>

                                {/* social */}
                                <ul className="mil-social mil-hidden-trigger mil-left">
                                    {appData.social.map((item, key) => (
                                    <li key={`social-item-${key}`}>
                                        <a href={item.link} title={item.title} target="_blank" className="mil-light">
                                            <i className={item.icon} />
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                                {/* social end */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="mil-footer-bottom">
            <div className="container">
                {/* copyright */}
                <a href="https://alvandtechnology.com/" className="mil-text-sm mil-softened-60">Alvand Technology - الوند تکنولوژی</a>
            </div>
        </div>
    </footer>
  );
};
export default DefaultFooter;
