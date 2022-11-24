import Link from "next/link";

function AboutUs_2() {
    return (
      <>
        {/* <!-- About us --> */}
		<section className="content-inner about-wraper-1" style={{"backgroundImage":"url(images/background/bg15.png)","backgroundSize":"contain","backgroundPosition":"center right","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dz-media left">
							<img src="images/about/pic1.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-3">
							<h6 className="sub-title text-primary bgl-primary m-b15">COMPROMETIDOS CONITGO</h6>
							<h2 className="title m-b20">Contamos con el mejor equipo creativo para desarrollar el sitio web que necesitas</h2>
							<p>Nuestra <strong>Misión</strong> es implementar las Tecnologías de Información para poder optimizar los procesos mercadológicos y de negocios de las empresas, esforzandonos en alcanzar la excelencia en el Desarrollo de Sistemas de Información, lograr ser una empresa competitiva a nivel nacional y ofrecer recursos Tecnológicos y Humanos de calidad y simplicidad.</p>
							<p>Nuestra <strong>Cultura</strong> se enfoca en trabajar a la par de nuestros clientes, proveedores y trabajadores en un ambito de respeto y responsabilidad al momento de ofrecer servicios tecnológicos, permitir el desarrollo en todos los ambitos en el proceso del negocio y transformar los puntos debiles en fortalezas, para poder crecer en conjunto de quien nos ofrece la confianza de trabajar con el.</p>
							<p>Nuestros <strong>Valores</strong> son:</p>
						</div>
						<ul className="list-check primary m-b30">
							<li>Respeto.</li>
							<li>Trabajo en equipo.</li>
							<li>Excelencia.</li>
							<li>Innovación.</li>
							<li>Comunicación.</li>
						</ul>
						<Link href="/about-us-2"><a className="btn btn-primary rounded-xl gradient">Conoce más</a></Link>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default AboutUs_2;