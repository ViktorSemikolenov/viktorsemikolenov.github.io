<?php
$submit = $_POST['submit'];
if(empty($submit)) {
?>

<?
}else {
	

$email2="info@muravei38.ru"; // ----------------------------------------- почта, куда отправляем письмо 
$headers  =  'Заявка с сайта' . "\r\n";
	$headers .=  'Почта: '.$_POST['email'] . "\r\n";
	$headers .=  'Имя: '.$_POST['name'].', '."\r\n";
	$headers .=  'Телефон: '.$_POST['phone'] . "\r\n"; // ---------------------- адрес отправителя, это заголовок письма, менять не обязательно
$subject2    = "[Обратный звонок]"; // ----------------------------------------- заголовок
$message2    = "
<br> <b> Имя: </b>".$_POST['name']."
<br> <b> Телефон: </b>".$_POST['phone']."
<br> <b> Почта: </b>".$_POST['email']."
<br>IP-адрес посетителя: ".@$_SERVER['REMOTE_ADDR']."
<br>Время заказа: ".date('Y-m-d H:i:s').";
";
$mail=mail($email2, $subjtraidect2, $headers);
if($mail==true){
?>

<?
}else{
    echo "no";
}
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">

   


function changeurl(){eval(self.location="../thanks_pdf.html");}
window.setTimeout("changeurl();",0);

</script>