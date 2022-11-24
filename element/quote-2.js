import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import { useState } from 'react';

function Quote2() {
	const [check, setCheck] = useState(null);
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_lapz2sj', 'template_hfg9qoq', e.target, 'oNAhR6N2S3f5_5ofL')
		.then(response => {
			setCheck(true);
			console.log(response, check);
			
		})
		.catch(error => {
			setCheck(false);
			console.error(error, check);
		})

	}
	return (
		<>
			<div className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 m-b30 quote-media">
						<div className="dlab-media style-1 move-1">	
							<img src="images/team/large/pic1.jpg" alt=""/>
						</div>
						<div className="dlab-media style-2 move-2">	
							<img src="images/team/large/pic2.jpg" alt=""/>
						</div>
						<div className="dlab-media style-3 move-3">	
							<img src="images/team/large/pic3.jpg" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 m-b30 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
						<form className="dlab-form dzForm" onSubmit={sendEmail}>
							<div className="row">
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzName" required type="text" className="form-control" placeholder="Nombre" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="last_name" required type="text" className="form-control" placeholder="Apellidos" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzEmail" required type="text" className="form-control" placeholder="Email" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzPhone" required type="text" className="form-control" placeholder="Teléfono" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<input name="dzEmpresa" required type="text" className="form-control" placeholder="Empresa" />
									</div>
								</div>
								<div className="col-sm-6">
									<div className="input-group">
										<select name="dzService" className="form-control" required>
											<option selected>Tipo de servicio</option>
											<option value="1">Básico</option>
											<option value="2">E-commerce</option>
											<option value="3">A la medida</option>
											<option value="4">Diseño gráfico</option>
											<option value="5">Diseño Editorial</option>
											<option value="6">Identidad Corporativa</option>
										</select>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<textarea name="dzMessage" required className="form-control" placeholder="Mensaje"></textarea>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<input name="dzBuget" type="text" required className="form-control" placeholder="Presupuesto estimado"/>
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										{
											check === null											
											? <a></a>
											: check
												?<Alert severity='success'>El Email ha sido envíado</Alert>
												: <Alert severity='error'>El Email no fue envíado, intente de nuevo</Alert>
										}
										
									</div>
								</div>
								<div className="col-sm-12">
									<div className="input-group">
										<button className="btn btn-primary gradient border-0 rounded-xl">Enviar</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Quote2;