import Link from 'next/link';
import { useEffect, useState } from 'react';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
	
	 /* for class fixed  */
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        ventas@elyondevs.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +52
                                        729 131 56 25
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://www.facebook.com/ElyonDevs/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-whatsapp"
                                            href="https://api.whatsapp.com/send?phone=527291315625"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className={`sticky-header main-bar-wraper navbar-expand-lg ${scroll ? "is-fixed" : ""}`}>
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <img className="custom-logo-white" src="images/logo-white.png" alt="" />
                                        <img className="custom-logo" src="images/logo-2.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">¿Tienes una progunta?</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                            <img src="images/logo-2.png" alt="" />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Home</a></Link></li>
                                    <li><Link href="/about-us-2"><a>Quiénes Somos</a></Link></li>
                                    <li><Link href="/contact-us-2"><a>Contáctanos</a></Link></li>
                                    {/* <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>Pages</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
											<li><Link href="/about-us-2"><a>About Us</a></Link></li>
											<li><Link href="/faq-2"><a>Faq</a></Link></li>
											<li><Link href="/pricing-table-2"><a>Pricing Table</a></Link></li>
											<li><Link href="/team-2"><a>Team</a></Link></li>
                                            <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                            <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                            <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                        </ul>
                                    </li>									 */}
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://www.facebook.com/ElyonDevs/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://api.whatsapp.com/send?phone=527291315625">
                                            <a className="fa fa-whatsapp"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
