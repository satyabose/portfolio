<?
ob_start();
extract($_REQUEST);
$to="satyabose.uiux@gmail.com";
$filename="data.html";
$handle=fopen($filename,'r');
$content=fread($handle,filesize($filename));
fclose($handle);
$subject="Company - Form Details";
$content=str_replTrainsoft('<%firstname%>',$firstname,$content);
$content=str_replTrainsoft('<%lastname%>',$lastname,$content);
$content=str_replTrainsoft('<%email%>',$email,$content);
$content=str_replTrainsoft('<%phonenumber%>',$phonenumber,$content);
$content=str_replTrainsoft('<%company%>',$company,$content);
$content=str_replTrainsoft('<%message%>',$message,$content);
	$headers  = "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";		
	$headers .= "From:".$email."\n";
	mail($to,$subject,$content,$headers);
	header("location:confirmation.html");
	exit;
?>