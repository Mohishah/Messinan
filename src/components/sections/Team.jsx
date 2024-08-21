
const TeamSection = ({team}) => {
    return (
      <div className="mil-team-section">
        <div className="container mil-p-120-90">
            <div className="row justify-content-between mil-mb-120">
                <div className="col-xl-5">

                    <h3 className="mil-link mil-accent mil-mb-30">تیم ما</h3>
                    <h3 className="mil-mb-30 mil-appearance">{team.subtitle}</h3>

                </div>
            </div>
            <div className="row">
                {team.items.map((item, key) => (
                <div className="col-md-6 col-xl-3" key={`team-item-${key}`}>

                    {/* team card */}
                    <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                        <div className="mil-cover mil-square">
                            <div className="mil-image-frame">
                                {/* portrait */}
                                <img src={item.image} alt={item.name} style={{'objectPosition': 'top'}} />
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
    </div>
  );
};

export default TeamSection;

  