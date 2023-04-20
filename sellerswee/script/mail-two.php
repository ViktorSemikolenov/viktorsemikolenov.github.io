
<?php
$submit = $_POST['submit'];
if(empty($submit)) {
?>
<?
    $to = "marketing.wee.ae@gmail.com, marketing@saychas.ru, sales@wee.ae, sale@wee.ae";
    // $to = "viktor.semikolenov@gmail.com";
    }
        $subject = 'Callback registration page'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Category: '.$_POST['cat_company'].'</p>
                        <p>File download: '.$_POST['file'].'</p>
                        <p>Retail outlets: '.$_POST['kol-item'].'</p>

                        <p>Address: '.$_POST['address'].'</p>
                        <p>Tax Registration No.: '.$_POST['registration-no'].'</p>
                        <p>Trade License No.: '.$_POST['license-no'].'</p>
                        <p>Attach a scan of your Trade License: '.$_POST['file-two'].'</p>
                        <p>Bank Name: '.$_POST['bank-name'].'</p>
                        <p>SWIFT: '.$_POST['SWIFT'].'</p>
                        <p>IBAN No: '.$_POST['IBAN-No'].'</p>

                        <p>utm_source: '.$_POST['utm_source'].'</p>
                        <p>utm_medium: '.$_POST['utm_medium'].'</p>
                        <p>utm_campaign: '.$_POST['utm_campaign'].'</p>
                        <p>utm_term: '.$_POST['utm_term'].'</p>
                        <p>utm_content: '.$_POST['utm_content'].'</p>
                        <p>utm_content: '.$_POST['formid'].'</p>

                    </body>
                </html>'; //Текст сообщения
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Sender <sellerswee.ae>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>