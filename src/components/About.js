function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
          <img alt="about" src={process.env.PUBLIC_URL + '/img/img1.png'} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">Full Spectrum IT Services</h2>
            <p className="main-p">
            Stay positive amidst IT challenges. We're the Melbourne-based IT firm that equips your business with secure, intelligent, and seamless technology solutions. This will gives you peace of mind to carry on the numerous tasks on your plate while your IT related problems are taken care by us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
