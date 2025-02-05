import Layouts from "@layouts/Layouts";

import CallToActionSection from "@components/sections/CallToAction";

const Team = (props) => {

  return (
    <Layouts>

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">

          <div className="row justify-content-between mil-mb-120 mt-5 pt-5">
              <div className="col-lg-5">
                  <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">تیم ما</span>
                  <h3 className="mil-appearance mil-mb-30 mt-5" dangerouslySetInnerHTML={{__html : props.team.subtitle}} />
              </div>
              <div className="col-lg-6">
                  <p className="mil-appearance mil-mt-55-adapt mil-mb-30">{props.team.description}</p>

                  <div className="mil-deco mil-appearance"></div>
              </div>
          </div>

          <div className="row">
              {props.team.items.map((item, key) => (
              <div className="col-xl-3 col-lg-4 col-md-6" key={`team-item-${key}`}>

                  {/* team card */}
                  <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                      <div className="mil-cover mil-long">
                          <div className="mil-image-frame">
                              {/* portrait */}
                              <img src={item.image} alt={item.name} style={{'objectPosition': 'top' }} />
                          </div>
                      </div>
                      <div className="mil-overlay mil-with-bg mil-text-center">
                          <div className="mil-description">
                              {/* name */}
                              <h5>{item.name}</h5>
                              {/* post */}
                              <span className="mil-link mil-softened-50">{item.role}</span>
                          </div>
                      </div>
                  </div>
                  {/* team card end */}

              </div>
              ))}
          </div>
      </div>
      {/* team end */}

      <CallToActionSection />
    </Layouts>
  );
};
export default Team;

export async function getStaticProps(){
  const res = await fetch("http://127.0.0.1:8000/team/")
  const team = await res.json()
  return {
      props : {
          team,
      },
      revalidate : 10
  }
}
