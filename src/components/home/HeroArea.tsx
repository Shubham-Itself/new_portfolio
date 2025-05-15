 
export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Shubham Kumar</h2>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

              {/* <div className="hero-content wow fadeInUp delay-0-2s">
                <div className="clienti-reviews">
                  <ul className="clienti-profile">
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/01.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/02.jpg" alt="client" />
                    </li>
                    <li>
                      <img className="img-fluid" src="assets/images/avatar/03.jpg" alt="client" />
                    </li>
                  </ul>
                  <div className="reviews">100+ reviews <span>(4.96 of 5)</span>
                    <p>Five-star reviews from my esteemed clients.</p>
                  </div>
                </div>
              </div> */}

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="/assets/images/avatar/mainImage.webp" alt="" style={{width:'360px', height:'412px' , objectFit:'cover'}} />
              </div>

            </div>
            {/* <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I’m Shubham, a passionate software engineer with experience in developing scalable web applications and solving complex problems using modern technologies</p>
                <a className="theme-btn" href="">Get In touch</a>
              </div>

            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
