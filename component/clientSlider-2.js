import Slider from "react-slick";

function ClientSlider2() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
    };
    return (
        <>
            {/* <!-- Clients Logo --> */}

                        <Slider {...settings}>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-main" src="images/logo/logo-html.png" alt="" />
                                    <img className="logo-hover" src="images/logo/logo-html-b.png" alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-js" src="images/logo/logo-js.png" alt="" />
                                    <img className="logo-js-b" src="images/logo/logo-js-b.png" alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-main" src="images/logo/logo-pink3.png" alt="" />
                                    <img className="logo-hover" src="images/logo/logo-light3.png" alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-main" src="images/logo/logo-pink4.png" alt="" />
                                    <img className="logo-hover" src="images/logo/logo-light4.png" alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-main" src="images/logo/logo-pink5.png" alt="" />
                                    <img className="logo-hover" src="images/logo/logo-light5.png" alt="" />
                                </div>
                            </div>
                            <div className="item">
                                <div className="clients-logo">
                                    <img className="logo-main" src="images/logo/logo-pink6.png" alt="" />
                                    <img className="logo-hover" src="images/logo/logo-light6.png" alt="" />
                                </div>
                            </div>
                        </Slider>
        </>
    );
}

export default ClientSlider2;
