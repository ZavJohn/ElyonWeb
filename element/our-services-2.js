import { useState } from "react";

function OurServices2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">NUESTROS MÉTODOS</h6>
							<h2 className="title">Detrás de la historia de cada Agencia</h2>
						</div>
						<p>Estamos interesados en involucrarnos 100% contigo y saber de manera profunda tus necesidades, fortalezas y debilidades, para así poder ayudarte a llevar a tu empresa al siguiente nivel.</p>
						<p>Ofrecemos un excelente acompañamiento para atender cada necesidad de forma personalizada, porque sabemos que cada negocio tiene diferentes necesidades, por lo cúal; analizamos que tecnológia implementar en cada caso en particular.</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Reunión de Ideas &amp; Análisis</h4>
								<p>Realizamos un análisis especifico y profundo, para realizar un maquetado práctico y simple, que cumpla con tus necesidades.</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Diseño &amp; Desarrollo</h4>
								<p>Nos aseguramos que el producto que deseas, cumpla con las espectativas y calidad que necesitas, implementando nuestro valor de excelencia en el servicio.</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Testing &amp; Lanzamiento</h4>
								<p>Un producto con errores no es opción a lanzamiento, por eso nos aseguramos de que todos los modulos cumplan con su función, antes de lanzar el productivo.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default OurServices2;