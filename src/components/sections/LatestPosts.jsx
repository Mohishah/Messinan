import Date from '@library/date';
import Link from "next/link";

const LatestPostsSection = ( { post , layout, imageHorizontal } ) => {
    
    return (
        <div className="mil-blog-section">
            <div className="container mil-p-120-90">
                <div className="row justify-content-between mil-mb-120">
                    <div className="col-xl-5">
                        
                        <h3 className="mil-link mil-appearance mil-accent mil-mb-30">وبلاگ</h3>
                        <h3 className="mil-mb-30 mil-appearance">جدیدترین مقالات :</h3>
                        
                    </div>
                </div>
                <div className="row">
                    {post.posts.slice(0, 3).map((item, key) => (
                    <div className="col-xl-4" key={`latest-posts-item-${key}`}>

                        {/* blog card */}
                        <Link href="post" className={`mil-card-1 mil-icon-2-trigger${layout != 2 ? " mil-accent-trigger" : ""} mil-appearance mil-mb-30`}>
                            <div className={`mil-cover${!imageHorizontal ? " mil-square" : ""}`}>
                                <div className="mil-image-frame">
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                            <div className={`mil-overlay${layout != 2 ? " mil-inside mil-gradient-overlay" : ""}`}>
                                <div className="mil-description">
                                    <div className="mil-post-info mil-mb-30">
                                        <span className="mil-accent mil-link">
                                            {item.category.title}
                                        </span>
                                        <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                                        <span className="mil-link mil-softened-30">
                                            <Date dateString={item.date} />
                                        </span>
                                    </div>
                                    <h5 className={`${layout != 2 ? "mil-light" : ""}`}>{item.title}</h5>
                                </div>
                            </div>
                        </Link>
                        {/* blog card end */}

                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestPostsSection;