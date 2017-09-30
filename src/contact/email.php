<?php
    $email_from = "";
if(isset($_POST['email'])) {
    $email_from = $_POST['email'];
} else {
    $email_from = "caractive.info@gmail.com";
}
 
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "caractive.info@gmail.com";
    $email_subject = "Cash Your Car Msg";
 
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 

 
    $first_name = $_POST['name'];
    $telephone = $_POST['phone'];
    $comments = $_POST['message'];
 
    $model = "";
    $sub = "";
    
    $email_message = "Form details below.\n\n";
    $string_exp = "/^[A-Za-z .'-]+$/";
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    if(isset($_POST['model'])) {
        $model = $_POST['model'];
        $email_message .= "Model: ".clean_string($model)."\n";
    }
    if(isset($_POST['suburb'])) {
        $sub = $_POST['suburb'];
        $email_message .= "Suburb: ".clean_string($sub)."\n";
    }
    

     
 
    $email_message .= "Name: ".clean_string($first_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 