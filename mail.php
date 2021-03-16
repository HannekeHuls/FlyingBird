<?PHP
  // form handler
  
    $name = $_POST['name'];
    $email = $_POST['mail'];
    $scores = $_POST['score'];
    $daily = $_POST['newsletter'];

      // send email and redirect
      $formcontent="Van: $name \n mailadres: $email \n Score: $scores \n Nieuwsbrief: $daily";
      $recipient = "info@gic.nl";
      $subject = "Quizzzz";
      $mailheader = "Van $names\r\n";
      mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
      echo "Dank voor het meedoen! U hoort binnen 2 weken of u een prijs heeft gewonnen.";
    
?>
