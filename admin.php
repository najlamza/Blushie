<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "tudungstore";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Sambungan gagal: " . $conn->connect_error);
}

$sql = "SELECT * FROM orders ORDER BY id DESC";
$result = $conn->query($sql);

echo "<h2>Senarai Pesanan Pelanggan</h2>";
echo "<table border='1'>
<tr>
<th>ID</th>
<th>Nama</th>
<th>Email</th>
<th>Alamat</th>
<th>Nombor Telefon</th>
<th>Tarikh Pesanan</th>
<th>Status</th>
<th>Tindakan</th>
</tr>";

while ($row = $result->fetch_assoc()) {
    echo "<tr>
    <td>{$row['id']}</td>
    <td>{$row['name']}</td>
    <td>{$row['email']}</td>
    <td>{$row['address']}</td>
    <td>{$row['phone']}</td>
    <td>{$row['order_date']}</td>
    <td>{$row['status']}</td>
    <td><a href='update_status.php?id={$row['id']}'>Tukar Status</a></td>
    </tr>";
}

echo "</table>";

$conn->close();
?>
