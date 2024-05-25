<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Compose email message
    $to = "kagustin733@gmail.com";
    $subject = "New Message from Your Website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully";
    } else {
        echo "Failed to send message";
    }
} else {
    // Handle invalid request method
    echo "Invalid request method";
}
?>