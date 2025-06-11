<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "tudungstore";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Sambungan gagal: " . $conn->connect_error);
}

$name = $_POST['name'];
$email = $_POST['email'];
$address = $_POST['address'];
$phone = $_POST['phone'];

$stmt = $conn->prepare("INSERT INTO orders (name, email, address, phone) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $address, $phone);
$stmt->execute();
$stmt->close();
$conn->close();

// 📌 Hantar Email ke Admin
$to = "m-10295952@moe-dl.edu.my";  // Tukar kepada email sebenar
$subject = "Pesanan Baru dari $name";
$message = "Nama: $name\nNombor Telefon: $phone\nAlamat: $address";
$headers = "From: no-reply@blushie.com";

if (mail($to, $subject, $message, $headers)) {
    echo "✅ Email berjaya dihantar!";
} else {
    echo "❌ Email GAGAL dihantar. Semak konfigurasi server.";
}
?>
