<?php
    $_POST = json_decode(file_get_contents("php://input"),true);

    iconv_set_encoding("internal_encoding", "UTF-8");
    $to = "lahdenpsykoterapia@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['firstName'];
    $last_name = $_POST['lastName'];
    $subject = "Viesti Henkilöltä: " . $first_name . " " . $last_name;
    $subject2 = "Kopio viestistäsi Lahden Psykoterapialle";
    $message = $first_name . " " . $last_name . " lähetti seuraavan viestin:" . "\n\n" . $_POST['message'];
    $message2 = "Tässä on kopio viestistäsi " . $first_name . "\n\n" . $_POST['message'];
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

    header('Location: http://lahdenpsykoterapia.fi');

?>
