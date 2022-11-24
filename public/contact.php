<?php

$to = "ventas@elyondevs.com"; /* you email address */
$message ="Haz recibido un email procedente de tu página web:\n\n"; /* email messege prefix */

$isOK = true; $msg = array();
	/* check success */
	if ( $isOK ) {
		/* build the email message body */
		$message.= 'Sender name: '.$_POST['dzName']."\n";
		$message.= 'Sender last name: '.$_POST['last_name']."\n";
		$message.= 'Sender email: '.$_POST['dzEmail']."\n";
		$message.= 'Sender phone: '.$_POST['dzOther[phone]']."\n";
		$message.= 'Sender presupuesto: '.$_POST['dzOther[estimated_buget]']."\n";
		$message.= 'Sender service: '.$_POST['dzOther[choose_service]']."\n";
		$message.= "Message: \n".$_POST['dzMessage'];
		
		$subject = $_POST['dzOther[project_title]'];
		
		/* send the mail */
		try {
			
			/*
			if( mail($to, $subject, $message) ){
			 	$msg[] = 'Thank for your contact.';
			} else {
				$msg[] = '<p>Sending error!</p>';
				$isOK = false;
			}
			*/
			mail($to, $subject, $message); //for demo
			$msg[] = 'Thank for your contact.';
			
		} catch(Exception $ex){
			$msg[] = '<p>' . $ex->getMessage() . '.</p>';
			$isOK = false;
		}
	}
	
	header('Content-Type: application/json');
	if ( $isOK ) {
		$msg = '<div class="alert alert-success">' . join("\n",$msg) . '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>';
	} else {
		$msg = '<div class="alert alert-danger">' . join("\n",$msg) . '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button></div>';
	}
}

exit;
