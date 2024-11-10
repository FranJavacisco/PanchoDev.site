<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir los datos del formulario
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($_POST["phone"]));
    $message = trim($_POST["message"]);

    // Verificar que todos los campos estén completos
    if (empty($name) || empty($email) || empty($phone) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Por favor completa todos los campos del formulario.";
        exit;
    }

    // Configurar el destinatario del correo y el asunto
    $recipient = "panchodev@gmail.com";
    $subject = "Nuevo mensaje de contacto de $name";

    // Crear el contenido del correo
    $email_content = "Nombre: $name\n";
    $email_content .= "Correo: $email\n";
    $email_content .= "Teléfono: $phone\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Cabeceras del correo
    $email_headers = "From: $name <$email>";

    // Enviar el correo
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Gracias, tu mensaje ha sido enviado con éxito.";
    } else {
        http_response_code(500);
        echo "Error al enviar el mensaje. Intenta de nuevo.";
    }
} else {
    http_response_code(403);
    echo "Hubo un problema con tu envío, intenta de nuevo.";
}
?>
