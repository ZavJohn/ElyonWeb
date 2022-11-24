import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ClientSlider from "../component/clientSlider";
import ClientSlider3 from "../component/clientSlider-3";
import AboutUs_2 from "../element/aboutUs-2"
import Header from "../layout/header-2";
import Footer2 from "./../layout/footer-2";
import Testimonial2 from "../element/testimonial-2";

function AboutUs2() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-2 overlay-gradient-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Quiénes Somos</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Quiénes Somos
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- About --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                CONÓCENOS
              </h6>
              <h2 className="title">¡Así trabajamos!</h2>
            </div>
            <div
              className="row about-wraper-3 wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="col-md-3">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-line-chart"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Planeación</h4>
                    <p>
                      Nos gusta escuchar todas las peticiones que tienes, para así poder 
                      desarrollar un plan de trabajo que se ajuste a tus necesidades y entregar
                      un proyecto solido, funcional y simple.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a className="icon-cell text-primary"
                    >
                      <i className="flaticon-sketch"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Diseño</h4>
                    <p>
                      En base a tus peticiones, desarrollamos un backlog con base en springs 
                      entregables cada semana, de estaforma contenplamos mejor tus peticiones,
                      y desarrollamos un proceso rápido para entregar el producto final.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-vector"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Development</h4>
                    <p>
                      Implementamos reuniones diarias enfocadas en finalizar 
                      los springs semanales, así logramos tener un equipo de trabajo solido
                      y enfocado en el cumplimiento de metas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="icon-bx-wraper style-6 text-center m-b30 icon-up">
                  <div className="icon-bx-lg radius bg-white">
                    <Link href="#"><a
                      className="icon-cell text-primary"
                    >
                      <i className="flaticon-startup"></i>
                    </a></Link>
                  </div>
                  <div className="icon-content">
                    <h4 className="dlab-title m-b15">Entrega</h4>
                    <p>
                      Nos aseguramos que el lanzamiento del producto final, cuente
                      con todas las especificaciones y necesidades que necesitabas
                      comprometiendonos siempre en la calidad de nuestro servicio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- About us --> */}
        <AboutUs_2/>

        {/* <!-- Tecnologias --> */}
        <div className="content-inner-3 bg-white">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                NUESTRAS TECNOLOGIAS
              </h6>
              <h2 className="title">Con estos lenguajes programamos:</h2>
            </div>
            <div className="clients-carousel owl-none owl-carousel m-b30">
              <ClientSlider />
            </div>
          </div>
        </div>

        {/* <!-- Video --> */}
        <section
          className="content-inner-2 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
				<div className="row">
					<div className="col-lg-12">
            <center>
              <video src="video/elyondevs.mp4" className="video-bx style-1" poster="images/video/pic1.jpg" controls /> 
            </center>
          </div>
				</div>
			</div>	
        </section>

        {/* <!-- Testimonials --> */}
        
        {/*<Testimonial2/>  */}

        {/* <!-- Clients Logo --> */}
        <div className="content-inner-3 bg-white">
          <div className="container">
          <div className="section-head style-3 text-center">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                NUESTROS CLIENTES
              </h6>
              <h2 className="title">Nos complace aliarnos contigo:</h2>
            </div>
            <div className="clients-carousel owl-none owl-carousel m-b30">
              <ClientSlider3 />
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default AboutUs2;
