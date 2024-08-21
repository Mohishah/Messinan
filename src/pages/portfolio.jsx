import { useState } from 'react';

import Layouts from "@layouts/Layouts";

import 'photoswipe/dist/photoswipe.css'
import 'react-modal-video/css/modal-video.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

import Link from "next/link";

const PortfolioTwo = (props) => {

  const rows = [];
  const projectsGrid = [];

  for (var i = 0; i < props.projects.length; i += 5 ) {
    rows.push(props.projects.slice(i, 5 + i));
  }

  rows.forEach( (row) => {
    let row_rows = [];
    row_rows.push(row.slice(0, 2));
    row_rows.push(row.slice(2, 5));

    projectsGrid.push(row_rows);
  })

  const [isOpen, setOpen] = useState(false);

  const [modalURL, setModalURL] = useState(false);

  const openSingleModalVideo = (e) => {
    setModalURL(e.target.getAttribute('data-href'));
    setOpen(true);
  }  

  return (
    <Layouts>
      
      {/* portfolio */}
      <div className="container mil-content-frame mil-p-120-90 mil-appearance">
          <div className="row mt-5 pt-5">
            <div className="col-12 mil-text-center mil-appearance mil-mb-120">
                <h3 className="mil-link mil-appearance mil-accent mil-mb-30">{props.header.title}</h3>
                <h3 className="mil-appearance mil-mb-30">{props.header.subtitle}</h3>
                <p className="mil-text mil-appearance mil-shortened-50 m-auto">{props.header.description}</p>
            </div>
          </div>

          <Gallery>
          {projectsGrid.map((row, row_i) => (
          <div className={ ( ( row_i % 2 ) == 0 ) ? "row m-0" : "row m-0 flex-row-reverse" } key={`portfolio-row-${row_i}`}>
              {row.map((col, col_i) => (
              <div className="col-lg-12 p-0" key={`portfolio-row-${row_i}-col-${col_i}`}>
                  <div className="row">

                    {col.map((item, key) => (
                    <div className={ ( col_i == 0 ) ? "col-lg-6" : "col-lg-4" } key={`portfolio-row-${row_i}-col-${col_i}-item-${key}`}>
                      <div className="mil-portfolio-item mil-appearance mil-mb-30">

                        <div className="mil-cover mil-square mil-scale-down-trigger mil-accent-trigger">
                            <div className="mil-image-frame">
                                <img src={item.image} alt={item.title} />                                
                            </div>
                        </div>
                        <Link href={`portfolio/${item.id}`} className="mil-item-description mil-icon-2-trigger mil-accent-trigger">
                            <div className="mil-text-bg mil-mb-5">
                                <h5 className="mil-light">{item.title}</h5>
                            </div>
                            <br />
                            <div className="mil-text-bg">
                                <p className="mil-link mil-accent">{item.category.title}</p>
                            </div>
                        </Link>
                        
                        <Item
                          original={item.image}
                          thumbnail={item.image}
                          width={300}
                          height={300}
                        >
                        {({ ref, open }) => (
                        <a data-fancybox="gallery" ref={ref} onClick={open} data-no-swup className="mil-zoom-icon mil-hidden-trigger" style={{ "cursor" : "pointer" }}>
                            <img src="/img/icons/zoom.svg" alt="zoom" />
                        </a>
                        )}
                        </Item>

                      </div>
                    </div>
                    ))}
                
                </div>

              </div>
              ))}

          </div>
          ))}
          </Gallery>
      </div>
      {/* portfolio end */}
      
    </Layouts>
  );
};
export default PortfolioTwo;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/project")
  const projects = await res.json()
  const res1 = await fetch("http://127.0.0.1:8000/project/header")
  const header = await res1.json()
  return {
      props : {
        projects : projects,
        header : header,
      },
      revalidate : 10
  }
}