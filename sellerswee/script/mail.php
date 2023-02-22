<?php
$submit = $_POST['submit'];
if(empty($submit)) {
?>
<?
    $to = "marketing.wee.ae@gmail.com, marketing@saychas.ru, sales@wee.ae, sale@wee.ae";
    }
        $subject = 'Callback'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Form number: '.$_POST['type_form'].'</p>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Phone: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Company: '.$_POST['company'].'</p>
                        <p>Category: '.$_POST['cat_company'].'</p>
                        <p>File download: '.$_POST['file'].'</p>
                        <p>Retail outlets: '.$_POST['kol-item'].'</p>
                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Sender <sellerswee.ae>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>