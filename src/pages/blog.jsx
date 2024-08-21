import PaginatedBlog from '@components/PaginatedBlog'
import Pagination from '@components/Pagination'

import Layouts from "@layouts/Layouts";

const Blog = ( { post , header } ) => {
  return (
    <Layouts>
      <div className="mil-spacer" />

      {/* blog */}
      <div className="mil-blog-section">
          <div className="container mil-content-frame mil-appearance mil-p-120-90">
              <div className="row justify-content-between mil-mb-120">
                  <div className="col-xl-5">

                      <h3 className="mil-link mil-appearance mil-accent mil-mb-30">وبلاگ</h3>
                      <h3 className="mil-mb-30 mil-appearance" dangerouslySetInnerHTML={{__html : header.subtitle}} />

                  </div>
                  <div className="col-xl-6">

                      <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{header.description}</p>

                      <div className="mil-deco mil-appearance"></div>

                  </div>
              </div>
              <div className="row">
                  <PaginatedBlog
                    items={post.posts}
                  />
              </div>
          </div>
          
          <Pagination
            currentPage={1}
            totalItems={post.total}
            perPage={2}
            renderPageLink={(id) => `/blog/page/${id}`}
          />
      </div>
      {/* blog end */}

      
    </Layouts>
  );
};
export default Blog;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/blog")
  const post = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/blog/header")
  const header = await res1.json()
  return {
      props : {
        post : post,
        header : header,
      },
      revalidate : 10
  }
}