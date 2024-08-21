import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const ProjectDetail = ( props ) => {
  
  const projectData = props.projectData;

  return (
    <Layouts>
    
      <PageBanner pageImage={projectData.image} pageTitle={projectData.title} />

      <div className="container mil-mb-120">
          <Gallery>

          <div className="row justify-content-center">
              <div className="col-lg-12 col-xl-9 mil-content-frame mil-appearance mil-p-120-0">

                  <h3 className="mil-link mil-text-center mil-appearance mil-softened-60 mil-mb-30" style={{ width: '100%' }}>{projectData.category.title}</h3>
                  <h3 className="mil-text-center mil-appearance mil-mb-60">{projectData.title}</h3>

                  <div className="mil-divider mil-appearance mil-mb-30"></div>

                  {/* project info */}
                  <ul className="mil-project-info mil-appearance mil-mb-30">
                      {projectData.items.map((item, key) => (
                      <li key={`project-list-${key}`}>
                        <span className="mil-link mil-mr-15">{item.label}:</span>
                        <span className="mil-link mil-softened-60">{item.value}</span>
                      </li>
                      ))}
                  </ul>
                  {/* project info end */}
                  
                  <Item
                      original={projectData.image}
                      thumbnail={projectData.image}
                      width={400}
                      height={400}
                  >
                  {({ ref, open }) => (
                  <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-120" style={{ 'cursor' : 'pointer' }}>
                      
                      <img 
                        src={projectData.image} 
                        alt={projectData.title} 
                        className="mil-scale-img" 
                        data-value-1="1" 
                        data-value-2="1.1" 
                        style={{'objectPosition': 'top'}} 
                      />
      
                  </a>
                  )}
                  </Item>
                  
              </div>

                  <div className="col-lg-10 col-xl-6">
                      <p className=" mil-appearance">
                        {projectData.description0}
                      </p>
                  </div>

          </div>
          

              <div className="row justify-content-center mil-p-0-0">
                  <div className="col-lg-10 col-xl-6 mil-text-center">
                      <p className="mil-appearance">{projectData.description1}</p>
                  </div>
              </div>



              <div className="row justify-content-center mil-p-120-0">
                  <div className="col-lg-12 col-xl-9">
                      <div className="row">
                          {projectData.gallery.map((item, key) => (
                          <div className="col-lg-4" key={`gallery-item-${key}`}>
                              <Item
                                original={item.image}
                                thumbnail={item.image}
                                width={400}
                                height={400}
                              >
                                {({ ref, open }) => (
                                <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className="mil-appearance mil-just-image mil-image-vert mil-icon-3-trigger mil-accent-trigger mil-mb-30">
                                  <img src={item.image} alt="project" className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                                </a>
                              )}
                              </Item>
                          </div>
                          ))}
                      </div>
                  </div>
              </div>

          

              <div className="row justify-content-center mil-p-90-120">
                  <div className="col-lg-10 col-xl-6">
                      <p className="mil-appearance">{projectData.description2}</p>
                  </div>
              </div>

          

              <div className="row justify-content-center mil-p-0-90">
                  <div className="col-lg-12 col-xl-9">
                      <Item
                        original={projectData.finalImage}
                        thumbnail={projectData.finalImage}
                        width={600}
                        height={600}
                      >
                      {({ ref, open }) => (
                      <a data-fancybox="gallery" data-no-swup ref={ref} onClick={open} className="mil-appearance mil-just-image mil-image-hori mil-icon-3-trigger mil-accent-trigger mil-mb-30" style={{ "cursor": "pointer" }}>
                          <img src={projectData.finalImage} alt="project" className="mil-scale-img" data-value-1="1" data-value-2="1.1" />
                      </a>
                      )}
                      </Item>
                  </div>
              </div>

          

              <div className="row justify-content-center pb-5">
                  <div className="col-lg-10 col-xl-6 pb-5">
                      <p className="mil-appearance pb-5">{projectData.description3}</p>
                  </div>
              </div>
              

          </Gallery>
      </div>

    </Layouts>
  );
};
export default ProjectDetail;

export async function getStaticPaths() {
  const res = await fetch('http://127.0.0.1:8000/project')
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
  const res = await fetch(`http://127.0.0.1:8000/project/${params.id}`)
  const projectData = await res.json()
  return {
      props : {
        projectData : projectData,
      },
      revalidate : 10
  }
}