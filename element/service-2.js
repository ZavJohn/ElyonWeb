import {useState} from 'react';
import Link from 'next/link';

function Service2() {
    const [open, setOpen] = useState("p2")
    return (
      <>
        {/* <!-- Service --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className="container">
				<div className="row icon-wraper-1">
					<div className="col-lg-4 col-md-6">
						<div className="section-head style-3 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
							<h6 className="sub-title text-primary bgl-primary m-b15">NUESTROS SERVICIOS</h6>
							<h2 className="title m-t10">Somos proveedores de servicios digitales</h2>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
										<i className="flaticon-office"></i>
									</a>
								</Link>		
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Desarrollo web</h4>
								<p>Estamos enfocados en facilitar e implementar las mejores tecnologias para el desarrollo de las necesidades de negocio de tu empresa, y podarlas implementar en aplicaciones web.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-pie-charts"></i>
									</a> 
								</Link>	
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Diseño de Apps</h4>
								<p>En esta era tecnologíca la mejor opción es que los usuarios te encuentren a un clic de distancia a traves de sus dispositivos móviles. Muestra presencia como empresa lider en tu ramo.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p3" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-dollar"></i>
								</a></Link> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">E-commerce</h4>
								<p>Llega a más clientes a través del internet. Coloca tu tienda en línea y lleva tus productos a más lugares.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p4" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p4")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-bullhorn"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Marketing Digital</h4>
								<p>Llega a nuevos clientes con nuevas estrategias de marketing digital, controla el tráfico en internet y atarae a más potenciales compradores.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p5" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p5")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-help"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Soporte y mantienimiento</h4>
								<p>Nos hacemos cargo de tus equipos para que funcionen de manera optima y te capacitamos en temas de TI que tu empresa necesite. </p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p6" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p6")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-sketch"></i>					
								</a>
								</Link>		
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Diseño gráfico</h4>
								<p>Resolvemos los requerimientos creativos de tu empresa de forma efectiva, nos esforzamos en cumplir tus expectativas con calidad y puntualidad en las entregas.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p7" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p7")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-vector"></i>
									</a> 
								</Link>	
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Diseño editorial</h4>
								<p>Te ayudamos a diseñar con la finalidad de que tu contenido sea atractivo y útil, nos enfocamos en solucionar gráficamente como, donde y quién te lee y así se recrear historias contadas e ilustradas.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p8" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p8")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-idea"></i>
								</a></Link> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Diseño de exhibidores y P.O.P.</h4>
								<p>Te ayudamos a crear stands custom, stands virtuales, escenografías y activaciones interactivas, influyendo con las últimas tendencias del mercado.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className={`${open === "p9" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p9")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-promotion"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Puntos de venta</h4>
								<p>Destaca tu producto con exhibidores innovadores para el punto de venta. Desarrollados a la medida y personalidad de tu marca.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p10" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p10")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-left-quote"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Comunicación interna</h4>
								<p>Nos encantaria formar parte de tu equipo de trabajo y hacer sinergia en la comunicación con tus empleados de forma informativa y motivacional, con el objetivo de mejorar los resultados y lograr un sentido de pertenencia para enaltecer tu marca.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className={`${open === "p11" ? "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp active" : "icon-bx-wraper style-3 m-b30 box-hover wow fadeInUp"}`} onMouseOver={() => setOpen("p11")}>
							<div className="icon-bx-sm radius bgl-primary"> 
								<Link href="#"><a className="icon-cell">
									<i className="flaticon-user"></i>
								</a></Link>
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Identidad Corporativa</h4>
								<p>Nos hacemos cargo de tus equipos para que funcionen de manera optima y te capacitamos en temas de TI que tu empresa necesite. </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
      </>
    )
  }
  
  export default Service2;