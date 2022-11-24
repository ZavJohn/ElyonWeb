
import { useState } from "react";

function Services2() {
    const [open, setOpen] = useState("p2")
  return (
    <>
		<section className="content-inner-2 about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic2.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">NUESTRAS HABILIDADES</h6>
							<h2 className="title m-b20">Te brindamos la mejor experiencia en todos nuestros servicios</h2>
						</div>
						
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">Diseño gráfico</span>
								<span className="progress-value">80%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width":"80%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">Desarrollo web</span>
								<span className="progress-value">90%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "90%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden mb-3">
							<div className="progress-info">
								<span className="title">Diseño editorial</span>
								<span className="progress-value">85%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "85%"}}></div>
							</div>
						</div>
						<div className="progress-bx overflow-hidden">
							<div className="progress-info">
								<span className="title">Marketing</span>
								<span className="progress-value">70%</span>
							</div>
							<div className="progress mb-3">
								<div className="progress-bar wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.6s" style={{"width": "70%"}}></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
  )
}

export default Services2;