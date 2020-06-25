<?php

if(isset($_POST['send'])){

    iconv_set_encoding("internal_encoding", "UTF-8");
    $to = "jere1rantalainen@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['etunimi'];
    $last_name = $_POST['sukunimi'];
    $subject = "Viesti Henkilöltä: " . $first_name . " " . $last_name;
    $subject2 = "Kopio viestistäsi Lahden Psykoterapialle";
    $message = $first_name . " " . $last_name . " lähetti seuraavan viestin:" . "\n\n" . $_POST['viesti'];
    $message2 = "Tässä on kopio viestistäsi " . $first_name . "\n\n" . $_POST['viesti'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    header('Location: http://lahdenpsykoterapia.fi');
}
?>
