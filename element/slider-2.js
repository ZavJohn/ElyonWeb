function Slider2() {
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt=""
          />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Internet fácil
                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Te proveemos la mejor solución para tu Sitio Web
                </h1>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Te ayudamos a hacer la transición de tu empresa a esta nueva
                  generación, donde las tecnologías de la información cada vez
                  más, son adoptadaspor las nuevas generaciones y se han convertido
                  en la tendencia de las ventas de productos o servicios.
                </p>
                <a
                  href="/about-us-2"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Conoce más
                </a>
              </div>
            </div>
          </div>
          <img className="img2 move-1" src="images/pattern/pattern8.png" alt="" />
          <img className="img3 move-2" src="images/pattern/pattern9.png" alt="" />
        </div>
      </div>
      <div className="dz-media">
        <img src="images/main-slider/slider2/pic1.jpg" alt="" />
      </div>
    </div>
  );
}

export default Slider2;
