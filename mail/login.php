<?php
// Check for empty fields
if(empty($_POST['prename'])      ||
   empty($_POST['name'])     ||
   empty($_POST['reflink'])     ||
   empty($_POST['sponsor'])     ||
   empty($_POST['email']))
   {
   echo "No arguments Provided!";
   return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>byebye</title></head><body><script>window.location.href="../index.html";</script></body></html>';
   }
   
$prename = strip_tags(htmlspecialchars($_POST['prename']));
$name = strip_tags(htmlspecialchars($_POST['name']));
$reflink = strip_tags(htmlspecialchars($_POST['reflink']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$sponsor = strip_tags(htmlspecialchars($_POST['sponsor']));
$date = strip_tags(htmlspecialchars($_POST['date']));
$promote = strip_tags(htmlspecialchars($_POST['gridcheckboxs']));
$charity = strip_tags(htmlspecialchars($_POST['charity']));
$bonus = strip_tags(htmlspecialchars($_POST['bonus']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));

if (isset($_POST['date'])) {
   $date = strip_tags(htmlspecialchars($_POST['date']));
}else{
   $date="Unknown"
}

if (isset($_POST['gridcheckboxs'])) {
   $promote = strip_tags(htmlspecialchars($_POST['gridcheckboxs']));
}else{
   $promote="Unknown"
}

if (isset($_POST['charity'])) {
   $charity = strip_tags(htmlspecialchars($_POST['charity']));
}else{
   $charity="Unknown"
}

if (isset($_POST['bonus'])) {
   $bonus = strip_tags(htmlspecialchars($_POST['bonus']));
}else{
   $bonus="Unknown"
}

if (isset($_POST['phone'])) {
   $phone = strip_tags(htmlspecialchars($_POST['phone']));
}else{
   $phone="Unknown"
}
   
// Create the email and send the message
$to = 'xxx@xxx.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website submition Form:  $name";
$email_body = "You have received a new message from your website submission form.\n\n.Here are the details:\n\nName: $prename $name\n\nEmail: $email\n\nref-link: $reflink\n\nSponsor:\n$sponsor\n\nPhone:\n$phone\n\nBirtdate:\n$sdate\n\nPromote:\n$promote\n\nCharity:\n$charity\n\nBonus:\n$bonus";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email";
mail($to,$email_subject,$email_body,$headers);
return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>byebye</title></head><body><script>window.location.href="../index.html";</script></body></html>';
?>