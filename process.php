<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $UserName = $_POST['fullName'];
    $Email = $_POST['email'];
    $Msg = $_POST['message'];
    if (empty($UserName) || empty($Email) || empty($Msg)) {
        header('Location: index.php?error');
        exit();
    } else {
        $to = "agustinka733@gmail.com"; // Change this to your email address
        $Subject = "Contact Form Submission";
        $headers = "From: $Email";

        if (mail($to, $Subject, $Msg, $headers)) {
            header("Location: index.php?success");
            exit();
        } else {
            header("Location: index.php?error");
            exit();
        }
    }
} else {
    header("Location: index.php");
    exit();
}
?>
