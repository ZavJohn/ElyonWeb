import Slider from "react-slick";

function ClientSlider3() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				
			  }
			},	
			{
			  breakpoint: 767,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				
			  }
			},
		]
		
    };
    return (
        <>
            {/* <!-- Clients Logo --> */}


			<Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/ggama.png" alt="" />
						<img className="logo-hover" src="images/logo/ggama-b.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/hechos.png" alt="" />
						<img className="logo-hover" src="images/logo/hechos-b.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/lids.png" alt="" />
						<img className="logo-hover" src="images/logo/lids.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/dif.png" alt="" />
						<img className="logo-hover" src="images/logo/dif-b.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/twin.png" alt="" />
						<img className="logo-hover" src="images/logo/twin-b.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/hhmusic.png" alt="" />
						<img className="logo-hover" src="images/logo/hhmusic-b.png" alt="" />
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img className="logo-main" src="images/logo/psara.png" alt="" />
						<img className="logo-hover" src="images/logo/psara-b.png" alt="" />
					</div>
				</div>
				
			</Slider>
        </>
    );
}

export default ClientSlider3;
