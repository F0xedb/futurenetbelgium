<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
/*
Tested working with PHP5.4 and above (including PHP 7 )

 */
require_once './vendor/autoload.php';

use FormGuide\Handlx\FormHandler;


$pp = new FormHandler();

$validator = $pp->getValidator();
$validator->field('email')->isEmail();

$pp->sendEmailTo(''); // ← Your email here

// meerdere kan zo : $fh->sendEmailTo(['someone@gmail.com', 'someone.else@gmail.com']);

echo $pp->process($_POST);