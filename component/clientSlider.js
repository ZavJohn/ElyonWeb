import Slider from "react-slick";

function ClientSlider() {
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
            <Slider {...settings}>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-html.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-html-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-js.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-js-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-css.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-css-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-boostrap.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-boostrap-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-react.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-react-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-angular.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-angular-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-node.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-node-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-next.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-next-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-java.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-java-b.png"
							alt=""
						/>
					</div>
				</div>
				<div className="item">
					<div className="clients-logo">
						<img
							className="logo-main"
							src="images/logo/logo-mongo.png"
							alt=""
						/>
						<img
							className="logo-hover"
							src="images/logo/logo-mongo-b.png"
							alt=""
						/>
					</div>
				</div>
			</Slider>
        </>
    );
}

export default ClientSlider;
