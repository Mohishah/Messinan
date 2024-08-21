import Layouts from "@layouts/Layouts";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import Date from '@library/date';

import PageBanner from "@components/PageBanner";
import RelatedPostsSection from "@/src/components/sections/RelatedPosts";

const PostsDetail = ( props ) => {
  
  const postData = props.postData;
  const posts = props.posts


  return (
    <Layouts>
    
      <PageBanner pageImage={postData.image} pageTitle={postData.title} />

      <div className="container mil-mb-120">
        <Gallery>

        <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">

                <h3 className="mil-text-center single-post-title mil-appearance mil-mb-60">{postData.title}</h3>

                {/* post info */}
                <div className="mil-post-info mil-appearance mil-center mil-mb-30">
                    <div className="mil-author">
                      <img src={postData.author.image} alt={postData.author.name} />
                      <span className="mil-dark mil-link me-3">{postData.author.name}</span>
                    </div>
                    <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                    <span className="mil-accent mil-link">{postData.category.title}</span>
                    <span className="mil-dot-divider mil-link mil-accent">&#x2022;</span>
                    <span className="mil-link mil-softened-30"><Date dateString={postData.date} /></span>
                </div>
                {/* post info end */}
                
                <Item
                    original={postData.image}
                    thumbnail={postData.image}
                    width={900}
                    height={700}
                >
                {({ ref, open }) => (
                <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-mb-120" style={{ 'cursor' : 'pointer' }}>
                    <img src={postData.image} alt={postData.title} className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                </a>
                )}
                </Item>
            </div>
            
            <div className="col-lg-10 col-xl-6 single-post-text" dangerouslySetInnerHTML={{ __html: postData.content_desc }} />
            
            {typeof postData.gallery != "undefined" &&
              <>
                <div className="row justify-content-center mil-p-120-0">
                    <div className="col-lg-12 col-xl-9">
                        <div className="row">
                            {postData.gallery.map((item, key) => (
                            <div className={ postData.gallery.cols == 3 ? "col-lg-4" : "col-lg-6"} key={`gallery-item-${key}`}>
                                <Item
                                  original={item.image}
                                  thumbnail={item.image}
                                  width={400}
                                  height={400}
                                >
                                  {({ ref, open }) => (
                                  <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className="mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30" style={{ "cursor": "pointer" }}>
                                    <img src={item.image} alt="blog" className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                                  </a>
                                )}
                                </Item>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
              </>
            }


              <div className="row justify-content-center single-post-text mil-p-90-0">
                  <div className="col-lg-10 col-xl-6" dangerouslySetInnerHTML={{ __html: postData.content_des2}} />
              </div>

        </div>

        </Gallery>
      </div>

      <RelatedPostsSection items={posts.posts} />
      
    </Layouts>
  );
};
export default PostsDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/blog')
  const post = await res.json()
  const paths = post.posts.map(u=>{
      return { params: { id: `${u.id}` } }
  })
  return {
      paths,
      fallback: "blocking"
  }
}

export async function getStaticProps(context){
  const { params } = context
  const res = await fetch(`http://127.0.0.1:8000/blog/${params.id}`)
  const postData = await res.json()
  const res2 = await fetch("http://127.0.0.1:8000/blog")
  const posts = await res2.json()
  return {
      props : {
        postData : postData,
        posts : posts
      },
      revalidate : 10
  }
}