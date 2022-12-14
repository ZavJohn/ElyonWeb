import { useEffect, useState } from 'react';
import moment from 'moment';
import Header from '../layout/Header4';
function ComingSoon() {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const [showSemicolon, setShowSemicolon] = useState(false);

	useEffect(() => {
		setInterval(() => {
			const now = moment();
			const then = moment('2021-10-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
			const countdown = moment(then - now);
			setDays(countdown.format('D'));
			setHours(countdown.format('HH'));
			setMinutes(countdown.format('mm'));
			setSeconds(countdown.format('ss'));
		}, 1000);
	}, []);

  return (
    <>
		<Header />
			
      <div className="page-content bg-white">
        {/* <!-- inner page banner END --> */}
		<div className="content-block">
            {/* <!-- About Us --> */}
            <div className="section-full bg-white coming-soon overlay-black-dark" style={{"backgroundImage":"url(images/background/bg2.jpg)","backgroundSize":"cover"}}>
                <div className="container">
					<div className="text-center">
						<div className="cs-logo">
							<div className="logo"><img src="images/logo-white.png" alt=""/></div>
						</div>
						<div className="cs-title">Coming Soon</div>
						<div className="countdown text-center">
							<div className="date"><span className="time days">{days}</span>
								<span>Days</span>
							</div>
							<div className="date"><span className="time hours">{hours}</span>
								<span>Hours</span>
							</div>
							<div className="date"><span className="time mins">{minutes}</span>
								<span>Minutess</span>
							</div>
							<div className="date"><span className="time secs">{seconds}</span>
								<span>Second</span>
							</div>
						</div>
						<ul className="countdown-social">
							<li href="https://www.facebook.com/ElyonDevs/">
								<a className="fa fa-facebook"></a>
							</li>
							<li href="https://api.whatsapp.com/send?phone=527291315625">
								<a className="fa fa-whatsapp"></a>
							</li>
							<li href="https://www.instagram.com/">
								<a className="fa fa-instagram"></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			{/* <!-- About Us End --> */}
        </div>
		{/* <!-- contact area END --> */}
    </div>
    </>
  )
}

export default ComingSoon;