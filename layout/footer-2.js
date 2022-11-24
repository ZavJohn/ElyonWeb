import Link from 'next/link';

function Footer2() {
  return (
    <>
    {/* <!-- Footer --> */}
    <footer className="site-footer style-2" id="footer" style={{"backgroundImage":"url(images/background/bg4.png)"}}>
		<div className="container">
			<div className="dlab-subscribe style-1 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s">
				<div className="row align-items-center">
					<div className="col-lg-7">
						<h2 className="title">Subscribete a nuestro Newsletter</h2>
					</div>
					<div  id="mc_embed_signup" className="col-lg-5">
						<form 
							className="dzSubscribe" 
							action="https://elyondevs.us21.list-manage.com/subscribe/post?u=842cb73f10b660c450657a407&amp;id=fbcc27a784&amp;f_id=0068c5e1f0" 
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							class="validate"
							target="_blank"
							novalidate
						>
							<div className="dzSubscribeMsg"></div>
							<div className="form-group">
								<div className="input-group">
									<input id="mce-EMAIL" name="EMAIL" required="required" type="email" className="form-control" placeholder="Ingresa tu Email"/>
									<div className="input-group-addon">
										<button name="submit" value="Submit" type="submit" className="btn btn-primary gradient fa fa-paper-plane-o"></button>
									</div>
								</div>
							</div>
						</form>
					</div>
					
				</div>
			</div>
		</div>
		<div className="footer-top">
            <div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className="widget widget_about">
							<div className="footer-logo">
								<a href="/"><img src="images/logo-white.png" alt=""/></a> 
							</div>
							<div className="widget widget_getintuch">
								<ul>
									<li>
										<i className="fa fa-phone gradient"></i>
										<span>+52 729 131 5625<br/>+52 55 3653 1015</span> 
									</li>
									<li>
										<i className="fa fa-envelope gradient"></i> 
										<span>ventas@elyondevs.com</span>
									</li>
								</ul>
							</div>
						</div>
                    </div>
					<div className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="widget widget_services">
							<h5 className="footer-title">Nuestros links</h5>
							<ul>
								<li><Link href="/"><a>Home</a></Link></li>
								<li><Link href="/about-us-2"><a>Quiénes Somos</a></Link></li>
								<li><Link href="/services-2"><a>Servicios</a></Link></li>
								<li><Link href="/contact-us-2"><a>Contáctanos</a></Link></li>
							</ul>
						</div>
                    </div>
					{/* <div className="col-xl-3 col-lg-3 col-sm-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.8s">
						<div className="widget widget_services">
						   <h5 className="footer-title">Otros links</h5>
							<ul>
								<li><Link href="#"><a>FAQ</a></Link></li>
								<li><Link href="#"><a>Privacy Policy</a></Link></li>
								<li><Link href="#"><a>Terms & Conditions</a></Link></li>
								<li><Link href="#"><a>Support </a></Link></li>
							</ul>
						</div>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 text-left"> 
						<span className="copyright-text">Copyright © 2022 <a>Elyon Devs</a>. Todos los derechos reservados.</span> 
					</div>
					<div className="col-lg-6 col-md-5 text-right"> 
						<div className="dlab-social-icon">
							<ul>
								<li><a className="fa fa-facebook" href="https://www.facebook.com/ElyonDevs/"></a></li>
								<li><a className="fa fa-instagram" href="https://www.instagram.com/"></a></li>
								<li><a className="fa fa-whatsapp" href="https://api.whatsapp.com/send?phone=527291315625"></a></li>
							</ul>
						</div>
					</div>
                </div>
            </div>
        </div>
    </footer>
    {/* <!-- Footer End --></footer> */}
    </>
  )
}

export default Footer2;