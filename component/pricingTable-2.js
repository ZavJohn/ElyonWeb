import { useState } from "react";

function PricingTable2() {
	const [open, setOpen] = useState("p2")

	return (
		<>	
		{/* <!-- Pricing Table 2 --> */}
			<div className="pricingtable-row">
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
					<div className={`${open === "p1" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p1")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>Plan Básico</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i class="fa fa-globe" aria-hidden="true"></i>
									</div>
								</div>
								<ul className="pricingtable-features">
									<li>Diseño gráfico</li>
									<li>Diseño web</li>
									<li>HTML/CSS</li>
									<li>Hosting / Dominio</li>
									<br /><br /><br /><br />
								</ul>
								<div className="pricingtable-footer">
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Cotiza aquí</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">
					<div className={`${open === "p2" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p2")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>E-commerce</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i class="fa fa-usd" aria-hidden="true"></i>
									</div>
								</div>
								<ul className="pricingtable-features">
									<li>Diseño gráfico </li>
									<li>Diseño web</li>
									<li>HTML/CSS</li>
									<li>UI/UX</li>
									<li>Marketing</li>
									<li>Análisis de negocio</li>
									<li>Tienda en línea</li>
									<br/>
								</ul>
								<div className="pricingtable-footer">
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Cotiza aquí</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s">
					<div className={`${open === "p3" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p3")}>
							<div className="pricingtable-inner">
								<div className="pricingtable-title">
									<h3>A la medida</h3>
								</div>
								<div className="icon-bx-sm radius bgl-primary">
									<div className="icon-cell">
										<i class="fa fa-star" aria-hidden="true"></i>
									</div>
								</div>
								<ul className="pricingtable-features">
								<li>Diseño gráfico </li>
									<li>Diseño web</li>
									<li>HTML/CSS</li>
									<li>UI/UX</li>
									<li>Marketing</li>
									<li>Análisis de negocio</li>
									<li>Tienda en línea</li>
									<li>Módulos hechos a la medida</li>
								</ul>
								<div className="pricingtable-footer">
									<a href="/pricing-table-2" className="btn btn-primary gradient shadow rounded-xl">Cotiza aquí</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PricingTable2;
